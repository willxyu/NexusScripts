// Defaults
NO_PATH = [];
if (typeof Object.freeze === 'function') { Object.freeze(NO_PATH) }

ng = typeof ng !== 'undefined' ? ng : {}

ng.blindh = function(/* a, b */) { return 0 }     // blindHeuristic
ng.constd = function(/* a, b */) { return 1 }     // constantDistance
ng.compFS = function(a, b) { return a.fs - b.fs } // compareFScore
ng.setHin = function(n, h) { n.heapIndex = h }    // setHeapIndex
ng.compF1 = function(a, b) { return a.f1 - b.f1 } // compareF1Score
ng.compF2 = function(a, b) { return a.f2 - b.f2 } // compareF2Score
ng.setH1  = function(n, h) { n.h1 = h }           // setH1
ng.setH2  = function(n, h) { n.h2 = h }           // setH2

// Events
ng.validate = function(s) {
 if (!s) { throw new Error('Eventify cannot use falsy object as events subject.') }
 var r = ['on','fire','off']
 for (var i=0; i<r.length; ++i) {
   if (s.hasOwnProperty(r[i])) {
    throw new Error('Subject cannot be Eventified, as it already has property "'+r[i]+'".')
   }
 } }

ng.createEvents = function(what) {
 var r = Object.create(null)
 return {
   on: function(name, cb, c) {
    if (typeof cb !== 'function') { throw new Error('Callback expected as Function.') }
    var h = r[name]
    if (!h) { h = r[name] = [] }
    h.push({callback: cb, ctx: c})
    return what },

   off: function(name, cb) {
    var rm = (typeof name === 'undefined')
    if (rm) { r = Object.create(null); return what }
    if (r[name]) {
      var d = (typeof cb !== 'function')
      if (d) { delete r[name] } else {
       var cbs = r[name]
       for (var i=0; i<cbs.length; ++i) {
         if (cbs[i].callback === cb) {
          cbs.splice(i, 1)
         }
       }
      }
    }
    return what },

   fire: function(name) {
    var cbs = r[name]
    if (!cbs) { return what }
    var fa
    if (arguments.length > 1) { fa = Array.prototype.splice.call(arguments, 1) }
    for (var i=0; i<cbs.length; ++i) {
      var cbi = cbs[i]
      cbi.callback.apply(cbi.ctx, fa) }
    return what }
 } }

// Graph Structure
Node = function(id, data) { this.id = id; this.links = null; this.data = data }
Link = function(fr, to, data, id) {
 this.fromID = fr; this.toID = to; this.data = data; this.id = id }
// Add Link to Node
ng.altn = function(n, link) { if (n.links) { n.links.push(link) } else { n.links = [link] } }
// HashCode
ng.hash = function(s) {
 var h = 0, i, chr, len
 if (s.length == 0) { return h }
 for (i=0, len = s.length; i < len; i++) {
   chr  = s.charCodeAt(i)
   h    = ((h << 5) - h) + chr
   h   |= 0 }
 return h }
// makeLinkId
ng.mlid = function(fr, to) { return fr.toString() + ' > ' + to.toString() }
// indexOfElementInArray
ng.indoe = function(el, arr) {
 if (!arr) { return -1 }
 if (arr.indexOf) { return arr.indexOf(el) }
 for (var i=0; i<arr.length; i++) {
   if (arr[i] === el) { return i } }
 return -1 }

ng.events = function(s) {
 ng.validate(s)
 var e  = ng.createEvents(s)
 s.on   = e.on
 s.off  = e.off
 s.fire = e.fire
 return s }

ng.makeGraph = function(opt) {
 opt = opt || {}
 if ('uniqueLinkID' in opt) {
   opt.multigraph = opt.uniqueLinkID }
 if (opt.multigraph === undefined) { opt.multigraph = false }
 function noop() {}
 var nodes = typeof Object.create === 'function' ? Object.create(null) : {},
     links = [],
     multiEdges = {},
     nodesCount = 0,
     suspendEvents = 0,
     forEachNode = createNodeIterator(),
     createLink  = opt.multigraph ? createUniqueLink : createSingleLink,
     changes = [],
     recordLinkChange = noop,
     recordNodeChange = noop,
     enterModification = noop,
     exitModification = noop

  // this is our public API:
  var graphPart = {
    addNode: addNode,
    addLink: addLink,
    removeLink: removeLink,
    removeNode: removeNode,
    getNode: getNode,
    getNodesCount: function () { return nodesCount; },
    getLinksCount: function () { return links.length; },
    getLinks: getLinks,
    forEachNode: forEachNode,
    forEachLinkedNode: forEachLinkedNode,
    forEachLink: forEachLink,
    beginUpdate: enterModification,
    endUpdate: exitModification,
    clear: clear,
    hasLink: getLink,
    hasNode: getNode,
    getLink: getLink }

  ng.events(graphPart)

  monitorSubscribers();

  return graphPart;

  function monitorSubscribers() {
    var realOn = graphPart.on;

    // replace real `on` with our temporary on, which will trigger change
    // modification monitoring:
    graphPart.on = on;

    function on() {
      // now it's time to start tracking stuff:
      graphPart.beginUpdate = enterModification = enterModificationReal;
      graphPart.endUpdate = exitModification = exitModificationReal;
      recordLinkChange = recordLinkChangeReal;
      recordNodeChange = recordNodeChangeReal;

      // this will replace current `on` method with real pub/sub from `eventify`.
      graphPart.on = realOn;
      // delegate to real `on` handler:
      return realOn.apply(graphPart, arguments);
    }
  }

  function recordLinkChangeReal(link, changeType) {
    changes.push({
      link: link,
      changeType: changeType
    });
  }

  function recordNodeChangeReal(node, changeType) {
    changes.push({
      node: node,
      changeType: changeType
    });
  }

  function addNode(nodeId, data) {
    if (nodeId === undefined) {
      throw new Error('Invalid node identifier');
    }

    enterModification();

    var node = getNode(nodeId);
    if (!node) {
      node = new Node(nodeId, data);
      nodesCount++;
      recordNodeChange(node, 'add');
    } else {
      node.data = data;
      recordNodeChange(node, 'update');
    }

    nodes[nodeId] = node;

    exitModification();
    return node;
  }

  function getNode(nodeId) {
    return nodes[nodeId];
  }

  function removeNode(nodeId) {
    var node = getNode(nodeId);
    if (!node) {
      return false;
    }

    enterModification();

    var prevLinks = node.links;
    if (prevLinks) {
      node.links = null;
      for(var i = 0; i < prevLinks.length; ++i) {
        removeLink(prevLinks[i]);
      }
    }

    delete nodes[nodeId];
    nodesCount--;

    recordNodeChange(node, 'remove');

    exitModification();

    return true;
  }


  function addLink(fromId, toId, data) {
    enterModification();

    var fromNode = getNode(fromId) || addNode(fromId);
    var toNode = getNode(toId) || addNode(toId);

    var link = createLink(fromId, toId, data);

    links.push(link);

    // TODO: this is not cool. On large graphs potentially would consume more memory.
    ng.altn(fromNode, link);
    if (fromId !== toId) {
      // make sure we are not duplicating links for self-loops
      ng.altn(toNode, link);
    }

    recordLinkChange(link, 'add');

    exitModification();

    return link;
  }

  function createSingleLink(fromId, toId, data) {
    var linkId = ng.mlid(fromId, toId);
    return new Link(fromId, toId, data, linkId);
  }

  function createUniqueLink(fromId, toId, data) {
    // TODO: Get rid of this method.
    var linkId = ng.mlid(fromId, toId);
    var isMultiEdge = multiEdges.hasOwnProperty(linkId);
    if (isMultiEdge || getLink(fromId, toId)) {
      if (!isMultiEdge) {
        multiEdges[linkId] = 0;
      }
      var suffix = '@' + (++multiEdges[linkId]);
      linkId = ng.mlid(fromId + suffix, toId + suffix);
    }

    return new Link(fromId, toId, data, linkId);
  }

  function getLinks(nodeId) {
    var node = getNode(nodeId);
    return node ? node.links : null;
  }

  function removeLink(link) {
    if (!link) {
      return false;
    }
    var idx = ng.indoe(link, links);
    if (idx < 0) {
      return false;
    }

    enterModification();

    links.splice(idx, 1);

    var fromNode = getNode(link.fromId);
    var toNode = getNode(link.toId);

    if (fromNode) {
      idx = ng.indoe(link, fromNode.links);
      if (idx >= 0) {
        fromNode.links.splice(idx, 1);
      }
    }

    if (toNode) {
      idx = ng.indoe(link, toNode.links);
      if (idx >= 0) {
        toNode.links.splice(idx, 1);
      }
    }

    recordLinkChange(link, 'remove');

    exitModification();

    return true;
  }

  function getLink(fromNodeId, toNodeId) {
    // TODO: Use sorted links to speed this up
    var node = getNode(fromNodeId),
      i;
    if (!node || !node.links) {
      return null;
    }

    for (i = 0; i < node.links.length; ++i) {
      var link = node.links[i];
      if (link.fromId === fromNodeId && link.toId === toNodeId) {
        return link;
      }
    }

    return null; // no link.
  }

  function clear() {
    enterModification();
    forEachNode(function(node) {
      removeNode(node.id);
    });
    exitModification();
  }

  function forEachLink(callback) {
    var i, length;
    if (typeof callback === 'function') {
      for (i = 0, length = links.length; i < length; ++i) {
        callback(links[i]);
      }
    }
  }

  function forEachLinkedNode(nodeId, callback, oriented) {
    var node = getNode(nodeId);

    if (node && node.links && typeof callback === 'function') {
      if (oriented) {
        return forEachOrientedLink(node.links, nodeId, callback);
      } else {
        return forEachNonOrientedLink(node.links, nodeId, callback);
      }
    }
  }

  function forEachNonOrientedLink(links, nodeId, callback) {
    var quitFast;
    for (var i = 0; i < links.length; ++i) {
      var link = links[i];
      var linkedNodeId = link.fromId === nodeId ? link.toId : link.fromId;

      quitFast = callback(nodes[linkedNodeId], link);
      if (quitFast) {
        return true; // Client does not need more iterations. Break now.
      }
    }
  }

  function forEachOrientedLink(links, nodeId, callback) {
    var quitFast;
    for (var i = 0; i < links.length; ++i) {
      var link = links[i];
      if (link.fromId === nodeId) {
        quitFast = callback(nodes[link.toId], link);
        if (quitFast) {
          return true; // Client does not need more iterations. Break now.
        }
      }
    }
  }

  // Enter, Exit modification allows bulk graph updates without firing events.
  function enterModificationReal() {
    suspendEvents += 1;
  }

  function exitModificationReal() {
    suspendEvents -= 1;
    if (suspendEvents === 0 && changes.length > 0) {
      graphPart.fire('changed', changes);
      changes.length = 0;
    }
  }

  function createNodeIterator() {
    return Object.keys ? objectKeysIterator : forInIterator;
  }

  ng.oki = function(cb) {
   if (typeof cb !== 'function') { return }
   var k = Object.keys(nodes)

  function objectKeysIterator(callback) {
    if (typeof callback !== 'function') {
      return;
    }

    var keys = Object.keys(nodes);
    for (var i = 0; i < keys.length; ++i) {
      if (callback(nodes[keys[i]])) {
        return true; // client doesn't want to proceed. Return.
      }
    }
  }

  function forInIterator(callback) {
    if (typeof callback !== 'function') {
      return;
    }
    var node;

    for (node in nodes) {
      if (callback(nodes[node])) {
        return true; // client doesn't want to proceed. Return.
      }
    }
  }
}


// Heap Implementation
NodeHeap = function(data, options) {
 if (!(this instanceof NodeHeap)) { return new NodeHeap(data, options) }
 if (!Array.isArray(data)) {
   options = data
   data    = [] }
 options   = options || {}
 this.data = data    || []
 this.length    = this.data.length
 this.compare   = options.compare   || function(a,b){ return a-b }
 this.setNodeId = options.setNodeId || function(){}
 if (this.length > 0) {
   for (var i=(this.length >> 1); i>=0; i--) {
    this._down(i) } }
 if (options.setNodeId) {
   for (var i=0; i<this.length; ++i) {
    this.setNodeId(this.data[i], i) } }
}

NodeHeap.prototype = {
 push: function(item) {
   this.data.push(item)
   this.setNodeId(item, this.length)
   this.length++
   this._up(this.length - 1) },
 pop : function() {
   if (this.length === 0) { return undefined }
   var top = this.data[0]
   this.length--
   if (this.length > 0) {
    this.data[0] = this.data[this.length]
    this.setNodeId(this.data[0], 0)
    this._down(0) }
   this.data.pop()
   return top },
 peek: function() { return this.data[0] },
 updateItem: function(pos) {
   this._down(pos)
   this._up(pos) },
 _up: function(pos) {
   var data      = this.data
   var compare   = this.compare
   var setNodeId = this.setNodeId
   var item      = data[pos]
   while (pos > 0) {
    var parent  = (pos - 1) >> 1
    var current = data[parent]
    if (compare(item, current) >= 0) { break }
    data[pos]   = current
    setNodeId(current, pos)
    pos         = parent }
   data[pos] = item
   setNodeId(item, pos) },
 _down: function(pos) {
   var data       = this.data
   var compare    = this.compare
   var halfLength = this.length >> 1
   var item       = data[pos]
   var setNodeId  = this.setNodeId
   while (pos < halfLength) {
    var left  = (pos << 1) + 1
    var right = left + 1
    var best  = data[left]
    if (right < this.length && compare(data[right], best) < 0 ) {
     left = right
     best = data[right] }
    if (compare(best, item) >= 0) { break }
    data[pos] = best
    setNodeId(best, pos)
    pos       = left }
   data[pos] = item
   setNodeId(item, pos) }
}

// Heuristics
l2 = function(a, b) {
 var dx = a.x - b.x
 var dy = a.y - b.y
 return Math.sqrt( dx * dx + dy * dy ) }
 
l1 = function(a, b) {
 var dx = a.x - b.x
 var dy = a.y - b.y
 return Math.abs(dx) + Math.abs(dy) }
 
// State Machine
NodeSearchState = function(node) {
 this.node   = node
 this.parent = null
 this.closed = false
 this.open   = 0
 this.distanceToSource = Number.POSITIVE_INFINITY
 this.fScore = Number.POSITIVE_INFINITY
 this.heapIndex = -1 }
 
makeSearchStatePool = function() {
 var currentInCache = 0
 var nodeCache      = []
 var reset = function() { currentInCache = 0 }
 var createNewState = function(node) {
   var cached = nodeCache[currentInCache]
   if (cached) {
    cached.node = node
    cached.parent = null
    cached.closed = false
    cached.open   = 0
    cached.distanceToSource = Number.POSITIVE_INFINITY
    cached.fScore = Number.POSITIVE_INFINITY
    cached.heapIndex = -1
   } else {
    cached = new NodeSearchState(node)
    nodeCache[currentInCache] = cached }
   currentInCache++
   return cached }
 return {
   createNewState: createNewState,
   reset         : reset
 } }
   