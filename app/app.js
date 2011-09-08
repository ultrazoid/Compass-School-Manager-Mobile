new Ext.Application({
    name: 'Compass School Manager ~ Mobile',
    defaultTarget: 'viewport',
    icon: 'apple~touch~icon.png',
    phoneStartupScreen: 'apple~touch~icon.png',
	launch: function () {
        //new Ext.regModel('Calendar', {
        //        fields: ['time', 'period', 'subject', 'location', 'teacher']
        //            });
        //            store = new Ext.data.store({
        //                model: 'Calendar',
        //                proxy: {
        //                    type: 'scripttag',
        //                    url: ''
        //                },
        //                autoLoad: true
        //            });
        var TabPanel = new Ext.TabPanel({
				fullscreen: true,
				dockedItems: [{
					xtype: 'toolbar', title: 'Compass School Manager'
				}],
				tabBar: {
					ui:'light'
				},
				items: [{
                    title: 'Dashboard',
                    styleHtmlContent: true,
                    html:'<b>SCHOOL LOGO<br>STUDENT/TEACHER NAME</b><h2>Disclaimer:</h2><h3>This app was made as a UI (User Interface) test for a mobile version of Compass School Manager</h3><h2>My Alerts</h2><h3><b>You have # unmarked rolls (# from today)</b></h3>Please mark these rolls as soon as possible<h2>Latest My News</h2><hr /><h3><b>TITLE</b></h3>BODY<br><b>TIME AGO by TEACHER</b><hr /><br><a href="subsites/news/index.html">More News</a>',
                    scroll: /*Ext.is.phone ?*/ 'vertical',
                    }, {
                    title: 'Schedule',
                    styleHtmlContent: true,
                    scroll: /*Ext.is.phone ?*/ 'vertical',
                    html: '<h1>Schedule</h1>Here you will find your schedule<h3><br>How to read your Schedule</h3>Each class on your schedule is split into five(5) parts these are:<ul><li>Time (8:40)</li><li>Period (0 = Form group 1~4 = classes)</li><li>Class (10EENG2A)</li><li>Location (1B7)</li><li>Teacher Code(CAR)</li></ul><h2>Todays Schedule</h2><table><tr><td>8:40: 0 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>8:55: 1 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>10:35: 2 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>11:55: 3 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>2:00: 4 ~ CLASS ~ LOCATION ~ TEACHER</td></tr></table><h2>Looking Ahead</h2>Here you will find any special events you are enrolled in<table><tr><td><b>Event Name ~ TEACHER</b><br>Mmm DD, YYY, H(H):MM</td></tr>',
                    //items: [{
                    //        itemtpl: '{time}: {period} ~ {subject} ~ {location} ~ {teacher}',
                    //        xtype: 'list',
                    //        store: 'store'
                    //}]
                    }, {
					title: 'More',
                    xtype: 'form',
                    styleHtmlContent: true,
		    html:'<h2>About</h2>This app (Compass School Manager) was developed as a UI (User Interface) test by Emerson "ultrazoid_" Pender for JDLF International Pty. Ltd.<h2>Profile</h2>To vew your profile <a href= "subsites/profile/index.html">click here</a><a href="http://192.168.0.31/~user/mocksites/ourschoolwebsite.html"><h2>Our School Website</h2></a>School website is non-mobile<a href= "http://192.168.0.31/~user/mocksites/studenthandbook.html"><h2>Student Handbook</h2></a>Student Handbook is non-mobile',
                    scroll: /*Ext.is.phone ?*/ 'vertical',
                    dockedItems: [{
                        xtype: 'toolbar',
                        dock: 'top',
                        items: [{
                            xtype: 'searchfield',
                            placeHolder: 'Search CSM',
                            name: 'searchfield',
                            cleartext: true
                        }]
                    }]

                }]
			});
		}
});