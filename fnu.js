fnu = typeof fnu != 'undefined' ? fnu : {}

fnu.utils = (function() {
  return {
   clone: function(obj) { 
    var copy
    if (null == obj || 'object' != typeof obj) { return obj }
    if (obj instanceof String) { return (' ' + obj).slice(1) } // https://stackoverflow.com/a/31733628
    if (obj instanceof Date  ) { copy = new Date(); copy.setTime(obj.getTime()); return copy }
    if (obj instanceof Array ) { copy = []; for (var i=0; i<obj.length; i++) { copy[i] = clone(obj[i]) }; return copy }
    if (obj instanceof Object) { copy = {}; 
     for (var attr in obj) { if (obj.hasOwnProperty(attr)) { copy[attr] = clone(obj[attr]) } }
     return copy }
    throw new Error('Unable to copy obj! Type not supported.') },
     
   lpad: function(str, len, ch) {
    if (typeof str == 'number') { str = str.toString() }
    if (ch == null) { ch = ' ' }
    var r = len - str.length
    if (r < 0) { r = 0 }
    return ch.repeat(r) + str }
  }
})()

// Client Overwrites/Intercepts
if (typeof client != 'undefined') {
 client.handle_read = function(msg) {
   var arr = new Uint8Array(msg.data)
   var s   = ''
   for (var i = 0; i < arr.length; ++i) { s += String.fromCharCode(arr[i]) }
   client.read_data(s) }
  
 client.read_data = function(s) {
   var str
   do {
     str = client.handle_telnet_read(s)
     s   = ''
     if (str === false)   { break }
     if (client.gagged)   { continue }
     var lines = client.telnet_split(str)
         lines = client.parse_lines(lines)
     if (lines === false) { continue }
     client.current_block = lines
     if (client.triggers_enabled) { lines = client.handle_triggers(lines) }
     client.handle_beep_code(lines)
     for (var idx = 0; idx < lines.length; ++idx) {
       var temp = ''
       if (lines[idx].line) {
         temp = lines[idx].line
       } else if (lines[idx].prompt) {
         temp = lines[idx].prompt
       }
       if (temp.length) { client.handle_on_msg_recv(temp) }
     }
     client.run_function('onBlock', null, 'ALL')
     client.display_text_block(lines)
     client.current_line = undefined
     client.current_block = undefined
   } while (str !== false)
 }
}
if (typeof ws != 'undefined') { ws.onmessage = client.handle_read }

// GMCP Murder, handle_GMCP < telnet_split (line 6 of client.read_data)
//   We are going to reduce Nexus' independent GMCP handling & provide specific event control for users, but also provide internal templates
if (typeof client != 'undefined') {
  client.handle_GMCP = function(data) {
    var gmcp_fire_event  = false
    var gmcp_event_param = ''
    if (data.GMCP) {
      if (client.echo_gmcp) { print('[GMCP: ' + data.GMCP.method + ' ' + data.GMCP.args, client.color_gmcpecho) }
      var gmcp_method = data.GMCP.method
      var gmcp_args   = data.GMCP.args
      if (gmcp_args.length == 0) { gmcp_args = "\"\"" }
      gmcp_args = JSON.parse(gmcp_args)
      
      if (gmcp_method == 'Core.Ping') { if (GMCP.PingStart) { GMCP.PingTime = new Date().getTime() - GMCP.PingStart }; GMCP.PingStart = null }

      if (gmcp_method == 'Char.Name') {
        GMCP.Character = gmcp_args
        logged_in      = true
        setTimeout( function() { if (client.load_settings) { gmcp_import_system() } }, 1000)
      }
      if (gmcp_method == 'IRE.Display.FixedFont') {
        var res = {}
            res.display_fixed_font = true
            res.start = (gmcp_args == 'start')
        return res
      }
      if (gmcp_method == "IRE.FileStore.Content") {
         var file = gmcp_args;
         if (file.name && file.name == "raw_refresh") {
           if (file.text != "") { import_system(file.text) }
           $.colorbox.close();
         } else if (file.name && file.name == "raw") {
           if (file.text != "") { import_system(file.text) }
         }
      }
      if (gmcp_method == "IRE.FileStore.List") {
         var list = gmcp_args;
         if (client.settings_window && client.settings_window.process_filelist)
             client.settings_window.process_filelist (list);
      }

      // The rest of GMCP we will provide specific event control
      $(document).trigger('gmcp-' + gmcp_method, [gmcp_args])
      $(document).trigger('gmcp-' + gmcp_method + '-user', [gmcp_args])
      
      // 3 pre-existing bound behaviours
      $(document).trigger('onGMCP', [gmcp_method, gmcp_args])
      run_function('onGMCP', {'gmcp_method': gmcp_method, 'gmcp_args': gmcp_args}, 'ALL')
      if (gmcp_fire_event) { client.handle_event('GMCP', gmcp_method, gmcp_event_param) }
    }
 }
}

// Mapper Enhancements
if (typeof client != 'undefined' && typeof client.mapper != 'undefined') {
  client.mapper.delay = 160
  client.mapper.center_map = function(el) {
    var map = client.mapper
    if (el.length == 0) { return }
    var vw = $('#map_container').width()
    var vh = $('#map_container').height()
    var ew = el.width()
    var eh = el.height()
    var x  = -1 * ((vw - ew) / 2)
    var y  = -1 * ((vh - eh) / 2)
    var t  = client.mapper.delay
    if (($('#map_container').prop('scrollTop') == 0) && ($('#map_container').prop('scrollLeft') == 0)) {
      t = 0
    }
    if (map.previousZoom != map.zoom) {
      t = 0  
    }
    map.previousZoom = map.zoom
    $('#map_container').scrollTo(el, t, {offset: { top: y, left: x }})
  }
}
