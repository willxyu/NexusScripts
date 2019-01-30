
gmcpf = typeof gmcpf != 'undefined' || {}

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
    $(document).off('gmcp-' + k)
    $(document).on('gmcp-' + k, function(data) {
      if (typeof gmcpf[m[m.use]] == 'function') {
        gmcpf[m[m.use]](data[0]) 
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
