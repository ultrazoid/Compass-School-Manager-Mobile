new Ext.Application({
    name: 'Compass School Manager - Mobile',
    defaultTarget: 'viewport',
    icon: 'apple-touch-icon.png',
    phoneStartupScreen: 'apple-touch-icon.png',
	launch: function () {
        var TabPanel = new Ext.TabPanel({
				fullscreen: true,
				dockedItems: [{
					xtype: 'toolbar', title: 'Compass School Manager',
				}],
				tabBar: {
					ui:'light',
                    scroll: 'horizontal'
				},
				items: [{
                    title: 'Summary',
                    styleHtmlContent: true,
                    scroll: 'vertical',
                    html:'<h2>Summary of Attendance</h2><h3>By Subject</h3><a href= "http://192.168.0.31/~user/subsites/profile/index.html">Return to Profile</a><br>Here there will be a table much like the one on the current Compass School Manager displaying information on attendance<br>Below is an example<br><img src="http://www.imgjoe.com/x/d." width="186.25" height="114.75"/>',
                    }, {
                    title: 'Approvals',
                    styleHtmlContent: true,
                    scroll: 'vertical',
                    html:'<h2>Attendance Approvals</h2><h3>(Absent from school/Lateness)</h3><table><tr><td><b>Start</td><td><b>Finish</td><td><b>Reason</td><td><b>Entered By</td><td><b>Dept OK</b></td></tr><tr><td>DD/MM/YY HH:mm</td><td>DD/MM/YY HH:mm</td><td>REASON</td><td>TEACHER</td><td>Y/N</td></tr></table>',
                    }, {
                    title: 'Absences/Lates',
                    styleHtmlContent: true,
                    scroll: 'vertical',
                    html: '<h2>Unapproved Absences</h2><table><tr><td><b>Activity Name</td><td><b>Start</td><td><b>Finish</td><td><b>Period</td><td><b>Tch</td><td><b>Location</td></tr><tr><td>CLASS NAME</td><td>DD/MM/YY HH:mm</td><td>DD/MM/YY HH:mm</td><td>#</td><td>TCH</td><td>LOCATION</td></tr></table><h2>Unapproved Lates/Not Present</h2><table><tr><td><b>Activity Name</td><td><b>Start</td><td><b>Finish</td><td><b>Period</td><td><b>Tch</td><td><b>Location</td></tr><tr><td>CLASS NAME</td><td>DD/MM/YY HH:mm</td><td>DD/MM/YY HH:mm</td><td>#</td><td>TCH</td><td>LOCATION</td></tr></table>'
                    },{
                    title: 'Arrive/Depart',
                    styleHtmlContent: true,
                    scroll: 'vertical',
                    html: '<h2>Late Arrival / Early Departure</h2><table><tr><td><b>Date/Time</td><td><b>Type</td><td><b>Comment</td></tr><tr><td>DD/MM/YY HH:mm</td><td>TYPE</td><td>COMMENT</td></tr></table>'
                }]
			});
		}
});