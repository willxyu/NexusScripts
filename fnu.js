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

// Client Overwrites
if (typeof client != 'undefined') {
 client.handle_read = function(msg) {
   var arr = new Uint8Array(msg.data)
   var s   = ''
   for (var i = 0; i < arr.length; ++i) { s += String.fromCharCode(arr[i]) }
   client.read_data(s) }
  
 client.read_data = function(s) {
   var str
   do {
     str = client.handle_telnet_read(s); s = '';
     if (str === false)   { break }
     if (client.gagged)   { continue }
     var lines = client.telnet_split(str); lines = client.parse_lines(lines);
     if (lines === false) { continue }
     client.current_block = lines;
     if (client.triggers_enabled) { lines = client.handle_triggers(lines) }
     client.handle_beep_code(lines)
     for (var idx = 0; idx < lines.length; ++idx) {
       var temp = '';
       if (lines[idx].line) { temp = lines[idx].line }
       else if (lines[idx].prompt) { temp = lines[idx].prompt }
       if (temp.length) { client.on_msg_recv(temp) }
     }
     client.run_function('onBlock', null, 'ALL')
     client.display_text_block(lines)
     client.current_line = undefined; client.current_block = undefined;
   } while (str !== false)
 }
}

if (typeof ws != 'undefined') { ws.onmessage = client.handle_read }

