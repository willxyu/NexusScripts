/**
 * Based on https://github.com/mourner/tinyqueue
 * Copyright (c) 2017, Vladimir Agafonkin https://github.com/mourner/tinyqueue/blob/master/LICENSE
 * 
 * Adapted for PathFinding needs by @anvaka
 * Copyright (c) 2017, Andrei Kashcha
 */

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
   