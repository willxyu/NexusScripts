gmcpf = typeof gmcpf != 'undefined' ? gmcpf : {}

gmcpf.debug = true

gmcpf.map = {
  ['Char.Name']                : {use: 'original', original: 'charname',             lean: 'leanCharname'             },
  ['Char.StatusVars']          : {use: 'original', original: 'charsvars',            lean: 'leanCharsvars'            },
  ['Char.Status']              : {use: 'original', original: 'status',               lean: 'leanStatus'               },
  ['Char.Vitals']              : {use: 'original', original: 'vitals',               lean: 'leanVitals'               },
  ['Char.Skills.Groups']       : {use: 'lean',     original: 'skillgroups',          lean: 'leanSkillgroups'          },
  ['Char.Skills.List']         : {use: 'original', original: 'skillList',            lean: 'leanSkillList'            },
  ['Char.Skills.Info']         : {use: 'original', original: 'skillinfo',            lean: 'leanSkillinfo'            },
  ['Char.Afflictions.List']    : {use: 'original', original: 'afflictionlist',       lean: 'leanAfflictionlist'       },
  ['Char.Afflictions.Add']     : {use: 'original', original: 'afflictionadd',        lean: 'leanAfflictionadd'        },
  ['Char.Afflictions.Remove']  : {use: 'original', original: 'afflictionremove',     lean: 'leanAfflictionremove'     },
  ['Char.Defences.List']       : {use: 'original', original: 'defencelist',          lean: 'leanDefencelist'          },
  ['Char.Defences.Add']        : {use: 'original', original: 'defenceadd',           lean: 'leanDefenceadd'           },
  ['Char.Defences.Remove']     : {use: 'original', original: 'defenceremove',        lean: 'leanDefenceremove'        },
  ['Room.AddPlayer']           : {use: 'original', original: 'roomAddplayer',        lean: 'leanRoomAddplayer'        },
  ['Room.RemovePlayer']        : {use: 'original', original: 'roomRemoveplayer',     lean: 'leanRoomRemoveplayer'     },
  ['Room.Players']             : {use: 'original', original: 'roomplayers',          lean: 'leanRoomplayers'          },
  ['Char.Items.Add']           : {use: 'original', original: 'charAdditems',         lean: 'leanCharAdditems'         },
  ['Char.Items.Update']        : {use: 'original', original: 'charUpdateitems',      lean: 'leanCharUpdateitems'      },
  ['Char.Items.Remove']        : {use: 'original', original: 'charRemoveitems',      lean: 'leanCharRemoveitems'      },
  ['Char.Items.List']          : {use: 'original', original: 'charListitems',        lean: 'leanCharListitems'        },
  ['IRE.Display.Help']         : {use: 'original', original: 'ireDisplayhelp',       lean: 'leanIreDisplayhelp'       },
  ['IRE.Display.Window']       : {use: 'original', original: 'ireDisplaywindow',     lean: 'leanIreDisplaywindow'     },
  ['IRE.Display.FixedFont']    : {use: 'original', original: 'ireDisplayfixedfont',  lean: 'leanIreDisplayfixedfont'  },
  ['IRE.Display.AutoFill']     : {use: 'original', original: 'ireDisplayautofill',   lean: 'leanIreDisplayautofill'   },
  ['IRE.Display.HidePopup']    : {use: 'original', original: 'ireDisplayhidepopup',  lean: 'leanIreDisplayhidepopup'  },
  ['IRE.Display.HideAllPopups']: {use: 'original', original: 'ireDisplayhidepopups', lean: 'leanIreDisplayhidepopups' },
  ['IRE.Display.Popup']        : {use: 'original', original: 'ireDisplaypopup',      lean: 'leanIreDisplaypopup'      },
  ['IRE.Display.Ohmap']        : {use: 'original', original: 'ireDisplayohmap',      lean: 'leanIreDisplayohmap'      },
  ['IRE.Display.ButtonActions']: {use: 'original', original: 'ireDisplaybActions',   lean: 'leanIreDisplaybActions'   },
  ['Comm.Channel.Start']       : {use: 'original', original: 'commChannstart',       lean: 'leanCommChannstart'       },
  ['Comm.Channel.End']         : {use: 'original', original: 'commChannend',         lean: 'leanCommChannend'         },
  ['Comm.Channel.Text']        : {use: 'original', original: 'commChanntext',        lean: 'leanCommChanntext'        },
  ['Comm.Channel.List']        : {use: 'original', original: 'commChannlist',        lean: 'leanCommChannlist'        },
  ['Comm.Channel.Players']     : {use: 'original', original: 'commChannplayers',     lean: 'leanCommChannplayers'     },
  ['IRE.Rift.Change']          : {use: 'original', original: 'ireRiftchange',        lean: 'leanIreRiftchange'        },
  ['IRE.Rift.List']            : {use: 'original', original: 'ireRiftlist',          lean: 'leanIreRiftlist'          },
  ['IRE.Tasks.List']           : {use: 'original', original: 'ireTasklist',          lean: 'leanIreTasklist'          },
  ['IRE.Tasks.Update']         : {use: 'original', original: 'ireTaskupdate',        lean: 'leanIreTaskupdate'        },
  ['IRE.Time.List']            : {use: 'original', original: 'ireTimelist',          lean: 'leanIreTimelist'          },
  ['IRE.Time.Update']          : {use: 'original', original: 'ireTimeupdate',        lean: 'leanIreTimeupdate'        },
  ['Room.Info']                : {use: 'original', original: 'roominfo',             lean: 'leanRoominfo'             },
  ['IRE.Composer.Edit']        : {use: 'original', original: 'ireComposeredit',      lean: 'leanComposeredit'         },
  ['IRE.Sound.Preload']        : {use: 'original', original: 'ireSoundpreload',      lean: 'leanIreSoundpreload'      },
  ['IRE.Sound.Play']           : {use: 'original', original: 'ireSoundplay',         lean: 'leanIreSoundplay'         },
  ['IRE.Sound.Stop']           : {use: 'original', original: 'ireSoundstop',         lean: 'leanIreSoundstop'         },
  ['IRE.Sound.StopAll']        : {use: 'original', original: 'ireSoundstopall',      lean: 'leanIreSoundstopall'      },
  ['IRE.Target.Set']           : {use: 'original', original: 'ireTargetset',         lean: 'leanIreTargetset'         },
  ['IRE.Target.Request']       : {use: 'original', original: 'ireTargetrequest',     lean: 'leanIreTargetrequest'     },
  ['IRE.Target.Info']          : {use: 'original', original: 'ireTargetinfo',        lean: 'leanIreTargetinfo'        },
  ['IRE.Misc.OneTimePassword'] : {use: 'original', original: 'ireMiscpwd',           lean: 'leanIreMiscpwd'           },
}
  
gmcpf.init = function() {
  for (var k in gmcpf.map) {
    let m = gmcpf.map[k]
    let n = k
    $(document).off('gmcp-' + k)
    $(document).on('gmcp-' + k, function(event, data) {
      if (typeof gmcpf[m[m.use]] == 'function') {
        if (gmcpf.debug) {
          console.log('running ' + m.use + ' for event: ' + n + '.')
          console.log(gmcpf[m[m.use]])
          console.log(data)
        }
        gmcpf[m[m.use]](data) 
      }
    })
  } }

gmcpf.charname = function(data) {
  GMCP.Character = data
  logged_in      = true
  document.title = GMCP.Character.name + ' - ' + game
  $('#character_module_name').html(GMCP.Character.name)
  request_avatar()
  setTimeout( function() { if (client.load_settings) { gmcp_import_system() } }, 1000 ) }

gmcpf.charsvars = function(data) { GMCP.StatusVars = data }

gmcpf.status = function(data) {
  if (GMCP.Status == null) { GMCP.Status = {} }
  var s = data
  for (var v in s) { GMCP.Status[v] = s[v] }
  var status = GMCP.Status // [?delete]
  client.draw_affdef_tab() }

gmcpf.vitals = function(data) {
  if (data.charstats) {
    GMCP.CharStats = data.charstats
    client.update_affdef_stats()
  }
  var vote_display = data.vote ? 'block' : 'none'
  if (vote_display != $('#vote').css('display')) {
    $('#vote').css('display', vote_display)
    relayout_status_bar()
  }
  GMCP.gauge_data = data;
  for (var v in data) {
    if (v == 'charstats') { continue }
    client.set_variable('my_' + v, data[v])
  }
  parse_gauges(data)
  if (client.game == 'Lusternia') { parse_lusternia_wounds(data) }
  client.handle_event('GMCP', 'Char.Vitals', '') }

gmcpf.skillgroups = function(data) {
  $('#tbl_skills').html('<table><tbody></tbody></table>')
  var skills = $('#tbl_skills tbody')
  var temp   = ''
      temp  += '<tr><td class=\'skill_group\' style=\'padding: 1px; font-weight: bolder;\''
      temp  += 'group=\'DATA_NAMEG\'>DATA_NAME&nbsp;</td>'
      temp  += '<td style=\'padding: 1px;\'>DATA_RANK</td></tr>'
  var str    = ''
  for (var i in data) {
    str += temp.replace('DATA_NAMEG', data[i].name).replace('DATA_NAME', data[i].name).replace('DATA_RANK', data[i].rank)
  }
  // reduced multiple appending to single call
  skills.append(str)
  $('#tbl_skills tr').css('cursor', 'pointer').click(function() {
    send_GMCP('Char.Skills.Get', {group: $(this).find('.skill_group').attr('group')})
    GMCP.WaitingForSkills = true
  })
}

gmcpf.skillList = function(data) {
  if (GMCP.WaitingForSkills == true) {
    var dsl = $('<div/>')
    var div = '<div id=\'group_skills\' class=\'\' title=\'Abilities in ' + ucfirst(data.group) + '\' style=\'font-size:0.8em;\'>'
    div += '<table id=\'skill_listing\'>'
    for (var i = 0; i < data.list.length; ++i) {
      var desc = ''
      if (data.descs && (data.descs.length > i)) { desc = data.descs[i] }
      div += '<tr class=\'skill_name\' group=\'' + data.group + '\' skill=\'' + data.list[i] + '\'><td>' + data.list[i] + '</td><td>' + desc + '</td></tr>'
    }
    div += '</table>'
    dsl.append(div).find('.skill_name').click(function() {
      send_GMCP('Char.Skills.Get', {'group': $(this).attr('group'), 'name': $(this).attr('skill') })
    })
    cm_dialog('#', {id: 'skill_list', top_align: 40, title: 'Abilities in ' + ucfirst(data.group), width: ($('#container').width() & .4), height: ($('#container').height() * 0.5), content: dsl })
    GMCP.WaitingForSkills = false
  } }

gmcpf.skillinfo = function(data) {
  var dsl = $('<div/>')
  var div = '<div id=\'group_skills_skill\' class=\'\' title=\'' + ucfirst(data.skill) + '\' style=\'font-size: 0.8em;\'>'
  if (data.info != '') {
    div += '<p>' + client.escape_html(data.info).replace(/\n/g,'<br />') + '</p>'
  } else {
    div += '<p>You have not yet learned that ability.</p>'
  }
  dsl.append(div)
  cm_dialog('#', {id: 'skill_info', top_align: 40, title: ucfirst(data.skill), width: ($('#container').width() * 0.5), height: ($('#container').height() * 0.5), content: dsl })
}
 
gmcpf.afflictionlist = function(data) {
  GMCP.Afflictions = {}
  for (var i = 0; i < data.length; ++i) {
    var aff = data[i]
    GMCP.Afflictions[aff.name] = aff
  }
  client.draw_affdef_tab() }

gmcpf.afflictionadd = function(data) {
  var aff = data
  GMCP.Afflictions[data.name] = data
  client.draw_affdef_tab()
  client.handle_event('GMCP', 'Char.Afflictions.Add', data) }

gmcpf.afflictionremove = function(data) {
  for (var i = 0; i < data.length; ++i) {
    delete GMCP.Afflictions[data[i]]
  }
  client.draw_affdef_tab()
  client.handle_event('GMCP', 'Char.Afflictions.Add', data) }

gmcpf.defencelist = function(data) {
  GMCP.Defences = {}
  for (var i = 0; i < data.length; ++i) {
    GMCP.Defences[data[i].name] = data[i]
  }
  client.draw_affdef_tab() }

gmcpf.defenceadd = function(data) {
  GMCP.Defences[data.name] = data
  client.draw_affdef_tab()
  client.handle_event('GMCP', 'Char.Defences.Add', data) }

gmcpf.defenceremove = function(data) {
  for (var i = 0; i < data.length; ++i) {
    delete GMCP.Defences[data[i]]
  }
  client.draw_affdef_tab()
  client.handle_event('GMCP', 'Char.Afflictions.Add', data) }

gmcpf.roomAddplayer = function(data) {
  if (data.name != GMCP.Character.name) {
    var name = data.name.toLowerCase()
    $('#div_room_players #' + name).remove()
    $('#div_room_players').append('<p class=\'no_border item\' id=\'' + name + '\'><span class=\'item_icon\'></span><span class=\'player_name\'>' + data.fullname + '</span></p>')
    client.handle_event('GMCP', 'Room.AddPlayer', data.name) 
  } }

gmcpf.roomRemoveplayer = function(data) {
  var name = data.toLowerCase()
  $('#div_room_players #' + name).remove()
  client.handle_event('GMCP', 'Room.RemovePlayer', data) }

gmcpf.roomplayers = function(data) {
  setTimeout(function() {
    $('#div_room_players').html('')
    for (var k in data) {
     if (data[k].name.toLowerCase() != GMCP.Character.name.toLowerCase()) {
       var html = '<p class=\'no_border item\' id=\'' + data[k].name.toLowerCase() + '\'><span class=\'item_icon\'></span><span class=\'player_name\'>' + data[k].fullname + '</span>'
       $('#div_room_players').append(html)
     }
    }
  }, 0) }

gmcpf.charAdditems = function(data) {
  var div_id = itemlist_divid( data.location, data.item )
  if (div_id == null) { return }
  $(div_id).append( itemlist_entry(data.item) )
  itemlist_events( data.item )
  update_item_visibility() }

gmcpf.charUpdateitems = function(data) {
  var div_id = itemlist_divid(data.location, data.item)
  if (div_id == null) { return }
  var orig = $(div_id + ' #' + data.item.id)
  var orig_crosstype = $('#div_inventory #' + data.item.id)
  if (orig_crosstype.length > orig.length) {
    orig_crosstype.remove()
    crossbuttons = true
    orig = new Array()
  }
  var buttons = $('#div_inventory .buttons_' + data.item.id)
  buttons.remove()
  var newtext = itemlist_entry(data.item)
  if (orig.length) {
    orig.replaceWith(newtext)
  } else {
    $(div_id).append(newtext)
  }
  itemlist_events(data.item)
  var room = (data.location == 'room')
  var parentid = room ? '#container_room_contents' : '#tab_content_inventory'
  if (buttons.length) { item_button_click($(parentid + ' #' + data.item.id), !room) }
  update_item_visibility() }

gmcpf.charRemoveitems = function(data) {
  if (typeof data.item.id != 'undefined') {
    temp_item_id = data.item.id 
  } else {
    temp_item_id = data.item 
  }
  if (data.location == 'room') {
    div_id = '#container_room_contents'
    $(div_id + ' #' + temp_item_id).remove()
    $(div_id + ' .buttons_' + temp_item_id).remove()
  } else {
    $('#div_inventory #' + temp_item_id).remove()
    $('#div_inventory .buttons_' + temp_item_id).remove()
  } }

gmcpf.charListitems = function(data) {
  setTimeout(function() {
    if (data.location == 'room') {
      $('#div_room_items, #div_room_mobs').html('')
    } else if (data.location == 'inv') {
      var str  = ''
          str += '<div class=\'subsection\'><div class=\'heading\'>Wielded</div>'
          str += '<div class=\'section_content\' id=\'div_inv_wielded\'></div></div>'
          str += '<div class=\'hrule\'></div><div class=\'subsection\'><div class=\'heading\'>Worn</div>'
          str += '<div class=\'section_content\' id=\'div_inv_worn\'></div></div>'
          str += '<div class=\'hrule\'></div><div class=\'subsection\'><div class=\'heading\'>Other</div>'
          str += '<div class=\'section_content\' id=\'div_inv_items\'></div></div>'
      $('#div_inventory').html(str)
    } else if (data.location.substr(0, 3) == 'rep') {
      var id = data.location.substr(3)
      var container = 'div_inv_container' + id
      $('#' + container).remove()
      $('#' + id + ' > .fa.fa-plus-circle').removeClass('fa-plus-circle').addClass('fa-minus-circle')
      $('#' + id + ', .buttons_' + id).addClass('open_container')
      var after = $('.buttons_' + id)
      if (after.length == 0) { after = $('#' + id) }
      after.after('<div id=\'' + container + '\' class=\'item-container open_container\'></div>')
    }
    for (var k in data.items) {
      var div_id = itemlist_divid(data.location, data.items[k])
      if (div_id == null) { continue }
      $(div_id).append(itemlist_entry(data.items[k]))
      itemlist_events(data.items[k])
    }
    update_item_visibility()
  }, 0) }

gmcpf.ireDisplayhelp = function(data) {
  if (client.popups_help !== true) { return }
  var res = {}
      res.display_help = true
      res.start = (data == 'start')
  return res }

gmcpf.ireDisplaywindow = function(data) {
  var res = {}
      res.display_window = true
      res.start = (parseInt(data.start) == 1)
      res.cmd = data.cmd
  return res }
  
gmcpf.ireDisplayfixedfont = function(data) {
  var res = {}
      res.display_fixed_font = true
      res.start = (data == 'start')
  return res }

gmcpf.ireDisplayautofill = function(data) {
  $('#user_input').val(data.command)
  if (data.highlight && (data.highlight === true || data.highlight == 'true')) {
    document.getElementById('user_input').setSelectionRange(0, document.getElementById('user_input').value.length) }
  $('#user_input').focus() }

gmcpf.ireDisplayhidepopup = function(data) { $('#' + data.id).fadeOut({ complete: function() { $(this).remove() } }) }
gmcpf.ireDisplayhidepopups = function(data) { $('.popup').fadeOut({ complete: function() { $(this).remove() } }) }

gmcpf.ireDisplaypopup = function(data) {
  client.display_gmcp_popup( data.id, data.element, data.src, $('<p/>').html(data.text), data.options, data.commands, data.allow_noshow) }

gmcpf.ireDisplayohmap = function(data) {
  if (!client.map_enabled()) { return }
  var res = {}
      res.ohmap = true
      res.start = (data == 'start')
  return res }
  
gmcpf.ireDisplaybActions = function(data) { bottom_buttons_set_defaults(data) }

gmcpf.commChannstart = function(data) {
  var res = {}
      res.channel = data
      res.start = true
  return res }
  
gmcpf.commChannend = function(data) {
  var res = {}
      res.channel = data
      res.start = false
  return res }
 
gmcpf.commChanntext = function(data) {
  var chann = data.channel
  var text = data.text
      text = parse_and_format_line(text)
  write_channel(chann, text)
  notifications_channel_text(chann, text, data.talker) }

gmcpf.commChannlist = function(data) {
  GMCP.ChannelList = data
  setTimeout(function() {
    $('#div_channels').html('')
    for (var k in GMCP.ChannelList) {
     $('#div_channels').append('<p class=\'no_border item\' style=\'padding: 5px; cursor: pointer\' name=\'' + GMCP.ChannelList[k].name + '\' caption=\'' + GMCP.ChannelList[k].caption + '\' command=\'' + GMCP.ChannelList[k].command + '\'>' + ucfirst(GMCP.ChannelList[k].caption) + '</p>')
    }
    $('#div_channels > .item').click(function() {
      if ($(this).hasClass('bg_medium')) { clear = true } else { clear = false }
      $('#div_channels > .item').removeClass('bg_medium')
      $('#div_channels > .buttons').remove()
      if (!clear) {
       $(this).addClass('bg_medium')
       var name = $(this).attr('name')
       var caption = $(this).attr('caption')
       var command = $(this).attr('command')
       $(this).after('<p class=\'buttons txt_center\' style=\'font-size: 0.9em;\'>' +
                     '<button class=\'open_channel\' name=\'' + name + '\' caption=\'' + caption + '\' command=\'' + command + '\'>Open Channel</button>' + '</p>')
       $('#div_channels > .buttons > button.open_channel').button().click(function() { open_channel($(this).attr('name'), $(this).attr('caption'), $(this).attr('command')) })
      }
    })
  }, 0) }

gmcpf.commChannplayers = function(data) {
  setTimeout(function() {
    GMCP.WhoList = data
    GMCP.WhoList.sort(function(a, b) {
      if (a.name < b.name) { return -1 }
      if (a.name > b.name) { return  1 }
      return 0
    })
    $('#div_who_channels').html('<p class=\'no_border bg_medium who_channel\' style=\'padding: 5px; cursor: pointer\'>All Players</p>')
    $('#div_who_players').html('')
    var channels = []
    for (var k in GMCP.WhoList) {
      if (GMCP.WhoList[k].channels) {
        for (var j in GMCP.WhoList[k].channels) {
          if ($.inArray(GMCP.WhoList[k].channels[j], channels) == -1) { channels.push(GMCP.WhoList[k].channels[j]) }
        }
      }
      $('#div_who_players').append('<p class=\'no_border who_name\' style=\'padding: 2px 5px; cursor:pointer\'>' + GMCP.WhoList[k].name + '</p>')
    }
    $('#div_who_players > .who_name').click(function() { send_direct('honours ' + $(this).html()) })
    channels.sort()
    for (var k in channels) {
      $('#div_who_channels').append('<p class=\'no_border who_channel\' style=\'padding: 5px; cursor: pointer\' who_channel=\'' + channels[k] + '\'>' + ucfirst(channels[k]) + '</p>') 
    }
    $('#div_who_channels > .who_channel').click(function() {
      if ($(this).hasClass('bg_medium')) { clear = true } else { clear = false }
      $('#div_who_channels > .who_channel').removeClass('bg_medium')
      $(this).addClass('bg_medium')
      $('#div_who_players').html('')
      for (var k in GMCP.WhoList) {
        if ($(this).html() == 'All Players' || (GMCP.WhoList[k].channels && $.inArray($(this).attr('who_channel'), GMCP.WhoList[k].channels) > -1)) {
          $('#div_who_players').append('<p class=\'no_border who_name\' style=\'padding: 2px 5px; cursor: pointer\'>' + GMCP.WhoList[k].name + '</p>') 
        }
      }
      $('#div_who_players > .who_name').click(function() { send_direct('honours ' + $(this).html()) })
    })
  }, 0) }

gmcpf.ireRiftchange = function(data) {
  var name = data.name
  if (data.amount) {
    GMCP.Rift[name] = {amount: data.amount, desc: data.desc }
  } else {
    delete GMCP.Rift[name]
  }
  if (GMCP.rift_update_timeout) { window.clearTimeout(GMCP.rift_update_timeout) }
  GMCP.rift_update_timeout = window.setTimeout(function() {
    GMCP.rift_update_timeout = null
    client.render_rift()
  }, 20) }

gmcpf.ireRiftlist = function(data) {
  GMCP.Rift = {}
  for (var k in data) {
    GMCP.Rift[data[k].name] = { amount: data[k].amount, desc: data[k].desc }
  }
  setTimeout(function() { client.render_rift() }, 0) }

gmcpf.ireTasklist = function(data) {
  GMCP.TaskList = {}
  setTimeout( function() {
    var types = ['task', 'quest', 'achievement' ]
    for (var tt = 0; tt < types.length; ++tt) {
      var type = types[tt]
      var groups = {}
      var grouporder = new Array()
      grouporder.push('Active')
      var lastgroups = new Array()
      lastgroups.push('Completed')
      for (var k in data) {
       if (data[k].type.toLowerCase().indexOf(type) < 0) { continue }
       GMCP.TaskList[type + data[k].id] = data[k]
       var group = data[k].group
       if (groups[group] == null) { groups[group] = new Array() }
       groups[group].push(k)
       if ((grouporder.indexOf(group) < 0) && (lastgroups.indexOf(group) < 0)) { grouporder.push(group) }
      }
      for (var i = 0; i < lastgroups.length; ++i) { grouporder.push(lastgroups[i]) }
      var tbl = $('#tbl_' + type + 's')
      tbl.html('')
      var count = 0
      var gid   = 0
      for (var g = 0; g < grouporder.length; ++g) {
        var group = grouporder[g]
        if (groups[group] == null) || (groups[group].length == 0)) { continue }
        var section = ''
        gid++
        for (var idx = 0; idx < groups[group].length; ++idx) {
          var i = groups[group][idx]
          var html = task_hteml(type, data[i])
          section += '<div id=\'' + type + data[i].id + '\' class=\'task_group_' + type + gid + '\'>' + html + '</div>'
        }
        section = '<div class=\'subsection\'><div class=\'heading\'>' + client.escape_html(group) + '</div><div class=\'section_content\'>' + section + '</div>'
        if (count > 0) { tbl.append('<div class=\'hrule\'></div>') }
        tbl.append(section)
        for (var idx = 0; idx < groups[group].length; ++idx) {
          var i = groups[group][idx]
          task_html_add_handler(type, data[i])
        }
        count++
      }
    }
  }, 0) }

gmcpf.ireTaskupdate = function(data) {
  setTimeout( function() {
    var types = ['task', 'quest', 'achievement']
    for (var tt = 0; tt < types.length; ++tt) {
      var type = types[tt]
      for (var k in data) {
       if (data[k].type.toLowerCase().indexOf(type) < 0) { continue }
       GMCP.TaskList[type + data[k].id] = data[k]
       var html = task_html(type, data[k])
       $('div#' + type + data[k].id).html(html)
       task_html_add_handler(type, data[k])
      }
    }
  }, 0) }

gmcpf.ireTimelist = function(data) {
  GMCP.Time = {}
  for (var k in data) { GMCP.Time[k] = data[k] } }

gmcpf.ireTimeupdate = function(data) {
  for (var k in data) { GMCP.Time[k] = data[k] } }
  
gmcpf.roominfo = function(data) {
  setTimeout(function() {
    var map = client.mapper
    $('#div_room_description').html(data.desc.replace(/\n/g, '<br>'))
    map.roomName  = data.name
    map.roomExits = data.exits
    map.set_map_background(data.background)
    map.set_map_linecolor(data.linecolor)
    map.cID = data.num
    if (!data.ohmap) { map.overhead = false }
    var coords = data.coords.split(/,/g)
    var coords_okay = false
    var area_id  = undefined
    var x        = undefined
    var y        = undefined
    var z        = undefined
    var building = undefined
    if (coords && coords.length >= 4) {
     area_id = coords[0]
     x       = coords[1]
     y       = coords[2]
     z       = coords[3]
     building= (coords.length >= 5) ? coords[4] : 0
     if ($.isNumeric(area_id) && $.isNumeric(x) && $.isNumeric(y) && $.isNumeric(z)) { coords_okay = true }
    }
    if (!coords_okay) { map.set_area_name(data.area) }
    last_x = map.cX
    last_y = map.cY
    last_z = map.cZ
    last_building = map.cB
    map.cX = x
    map.cY = y
    map.cZ = z
    map.cB = building
    GMCP.CurrentArea.id = area_id
    GMCP.CurrentArea.level = z
    if (coords_okay && (map.cArea != area_id)) { 
      map.cArea = area_id
      map.load_map_data()
    } else {
      if ((map.cZ != last_z) || (map.cB != last_building)) {
        map.draw_map()
      } else {
        map.draw_player() 
      }
    }
    client.update_movement_compass(data.exits)
  }, 0)
  client.handle_event('GMCP', 'Room.Info', data.num) }

/*
gmcpf.ireComposeredit = function(data) {
  var composer_edit = data
  if (composer_edit.title != '') { $('#composer_title').html(composer_edit.title) }
  $.colorbox({width: '700px', open: true, inline: true, href: '#m_composer' })
  $('#composer_text').val(composer_edit.text).focus() }

gmcpf.ireSoundpreload = function(data) { preload_sound('library/' + data.name) }
  
gmcpf. ireSoundplay = function(data) {
  fadein = fadeout = loop = false
  if (typeof data.fadein_csec != 'undefined') { fadein = data.fadein_csec * 1000 }
  if (typeof data.fadeout_csec != 'undefined') { fadeout = data.fadeout_csec * 1000 }
  if (typeof data.loop != 'undefined' && (data.loop == 'true' || data.loop == true)) { loop = true }
  play_sound('library/' + data.name, fadein, fadeout, loop) }
  
gmcpf.ireSoundstop = function(data) {
  fadeout = false
  if (typeof data.fadeout_csec != 'undefined') { fadeout = data.fadeout_csec * 1000 }
  stop_sound(data.name, fadeout) }
  
gmcpf.ireSoundstopall = function(data) {
  fadeout = false
  if (typeof data.fadeout_csec != 'undefined') { fadeout = data.fadeout_csec * 1000 }
  stop_all_sounds(fadeout) }

gmcpf.ireTargetset = function(data) {
  var target = data
  var ntarget = parseInt(target)
  if (!isNaN(ntarget)) { target = ntarget }
  client.set_current_target(target, false)
  client.handle_event('GMCP', 'IRE.Target.Set', target) }
  
gmcpf.ireTargetrequest = function(data) {
  client.send_GMCP('IRE.Target.Set', (GMCP.Target != undefined) ? GMCP.Target: 0) }

gmcpf.ireTargetinfo = function(data) {
  var tg = parseInt(data.id)
  var is_player = (tg == -1)
  if ((!is_player) && tg != client.current_target())) { return }
  var desc = data.short_desc
  var hp = is_player ? undefined : data.hpperc
  client.set_current_target_info(desc, hp, is_player) }

gmcpf.ireMiscpwd = function(data) { dropzone_kickoff(data) }

// Lean Section
gmcpf.leanSkillgroups = function(data) { }

gmcpf.leanAfflictionlist = function(data) {
  GMCP.Afflictions = {}
  for (var i = 0; i < data.length; ++i) {
    var aff = data[i]
    GMCP.Afflictions[aff.name] = aff
  } }
gmcpf.leanAfflictionadd = function(data) { GMCP.Afflictions[data.name] = data }
gmcpf.leanAfflictionremove = function(data) {
  for (var i = 0; i < data.length; ++i) { delete GMCP.Afflictions[data[i]] } }
gmcpf.leanDefencelist = function(data) {
  GMCP.Defences = {}
  for (var i = 0; i < data.length; ++) { GMCP.Defences[data[i].name] = data[i] } }
gmcpf.leanDefenceadd = function(data) { GMCP.Defences[data.name] = data }
gmcpf.leanDefenceremove = function(data) {
  for (var i = 0; i < data.length; ++i) { delete GMCP.Defences[data[i]] } }
*/
  
gmcpf.init()

/*
 gmcpf.ireFilesContent = function(data) {
  var file = data
  if (file.name && file.name == 'raw_refresh') {
    if (file.text != '') {
      import_system(file.text)
    }
    $.colorbox.close()
  } else if (file.name && file.name == 'raw') {
    if (file.text != '') {
      import_system(file.text)
    }
  } }

 gmcpf.ireFilesList = function(data) {
  var list = data
  if (client.settings_window && client.settings_window.process_filelist) { client.settings_window.process_filelist(list) } }
 */
