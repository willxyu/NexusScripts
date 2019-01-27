var fnu = (function (fnu) {

  // Utility Functions
  //   clone, lpad
  var clone = function(obj) {
   var copy
   if (null == obj || 'object' != typeof obj) { return obj }
   if (obj instanceof String) { // https://stackoverflow.com/a/31733628
    return (' ' + obj).slice(1) }
   if (obj instanceof Date) { 
    copy = new Date()
    copy.setTime(obj.getTime())
    return copy }
   if (obj instanceof Array) {
    copy = []
    for (var i=0; i<obj.length; i++) {
      copy[i] = clone(obj[i]) }
    return copy }
   if (obj instanceof Object) {
    copy = {}
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) {
       copy[attr] = clone(obj[attr]) } }
    return copy }
   throw new Error('Unable to copy obj! Type not supported.') }
   
  var lpad = function(str, len, ch) {
   if (typeof str == 'number') { str = str.toString() }
   if (ch == null) { ch = ' ' }
   var r = len - str.length
   if (r < 0) { r = 0 }
   return ch.repeat(r) + str }
   
  return fnu
})(fnu || {}))
