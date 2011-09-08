new Ext.Application({
    name: 'Compass School Manager ~ Mobile',
    defaultTarget: 'viewport',
    icon: 'apple~touch~icon.png',
    phoneStartupScreen: 'apple~touch~icon.png',
	launch: function () {
        var TabPanel = new Ext.TabPanel({
				fullscreen: true,
				dockedItems: [{
					xtype: 'toolbar', title: 'Compass School Manager'
				}],
				tabBar: {
					ui:'light',
                    scroll: 'horizontal'
				},
				items: [{
                    title: 'Dashboard',
                    styleHtmlContent: true,
                    scroll: 'vertical',
                    html: '<b>USERS PICTURE<br>STUDENTS NAME/TEACHERS NAME</b><br><a href= "http://192.168.0.31/~user/">Return Home</a><br>There are more tabs just scroll horizontally in the tab-bar to view<h3><br><b>Summary</b></h3><table><tr><td>Full Name</td><td>NAME</td></tr><tr><td>D.O.B</td><td>DD/AA/YYYY(AGE{# Years, # Months})</td></tr><tr><td>House</td><td>HOUSE</td></tr><tr><td>Email</td><td>USER@DOMAIN</td></tr></table><h3><br>Todays Schedule</h3><table><tr><td>8:40: 0 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>8:55: 1 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>10:35: 2 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>11:55: 3 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>2:00: 4 ~ CLASS ~ LOCATION ~ TEACHER</td></tr></table><h2>Looking Ahead</h2>Here you will find any special events you are enrolled in<table><tr><td><b>Event Name ~ TEACHER</b><br>Mmm DD, YYY, H(H):MM</td></tr></table><h2>Attendance Summary</h2>To view your full attendance report <a href= "http://192.168.0.31/~user/subsites/attendance/index.html">click here</a><br><br><table><br><tr><td>Punctuality:</td><td>#%</td></tr><tr><td>Absences:</td><td>#</td></tr><tr><td>Lates:</td><td>#</td></tr><tr><td>Approvals:</td><td>#</td</tr></table>',
                    }, {
                    title: 'Schedule',
                    styleHtmlContent: true,
                    scroll: 'vertical',
                    html: '<h1>Schedule</h1><h2>WEEK 1</h2><h3>{date}~Day 1</h3><table><tr><td>8:40: 0 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>8:55: 1 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>10:35: 2 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>11:55: 3 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>2:00: 4 ~ CLASS ~ LOCATION ~ TEACHER</td></tr></table><h3>{date}~Day 2</h3><table><tr><td>8:40: 0 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>8:55: 1 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>10:35: 2 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>11:55: 3 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>2:00: 4 ~ CLASS ~ LOCATION ~ TEACHER</td></tr></table><h3>{date}~Day 3~Co-Curriculum Day</h3><table><tr><tr><td>8:40: 1 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>10:15: 2 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>11:30: 3 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>1:30: 4 ~ CLASS ~ LOCATION ~ TEACHER</td></tr></table><h3>{date}~Day 4</h3><table><tr><td>8:40: 0 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>8:55: 1 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>10:35: 2 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>11:55: 3 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>2:00: 4 ~ CLASS ~ LOCATION ~ TEACHER</td></tr></table><h3>{date}~Day 5</h3><table><tr><td>8:40: 0 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>8:55: 1 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>10:35: 2 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>11:55: 3 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>2:00: 4 ~ CLASS ~ LOCATION ~ TEACHER</td></tr></table><h2>WEEK 2</h2><h3>{date}~Day 6</h3><table><tr><td>8:40: 0 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>8:55: 1 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>10:35: 2 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>11:55: 3 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>2:00: 4 ~ CLASS ~ LOCATION ~ TEACHER</td></tr></table><h3>{date}~Day 7</h3><table><tr><td>8:40: 0 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>8:55: 1 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>10:35: 2 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>11:55: 3 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>2:00: 4 ~ CLASS ~ LOCATION ~ TEACHER</td></tr></table><h3>{date}~Day 8~Co-Curriculum Day</h3><table><tr><td>8:40: 1 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>10:15: 2 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>11:30: 3 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>1:30: 4 ~ CLASS ~ LOCATION ~ TEACHER</td></tr></table><h3>{date}~Day 9</h3><table><tr><td>8:40: 0 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>8:55: 1 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>10:35: 2 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>11:55: 3 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>2:00: 4 ~ CLASS ~ LOCATION ~ TEACHER</td></tr></table><h3>{date}~Day 10</h3><table><tr><td>8:40: 0 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>8:55: 1 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>10:35: 2 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>11:55: 3 ~ CLASS ~ LOCATION ~ TEACHER</td></tr><tr><td>2:00: 4 ~ CLASS ~ LOCATION ~ TEACHER</td></tr></table>',
                    }, {
                    title: 'Photos',
                    styleHtmlContent: true,
                    scroll: 'vertical',
                    html: 'Here photo gallerys will be accessible',
                    }, {
                    title: 'Reports',
                    styleHtmlContent: true,
                    scroll:'vertical',
                    html: '<p id="1"><h3><br>For Students:</h3>Here the users report will be accessible<h3><br>For Teachers:</h3>Here the user will be able to write reports<h3><br>For Both:</h3>In the finished product when a user changes the Select field the text in the body will change</p>',
                    /*var ReportNumber = 2;
                    /*if (ReportNumber = 2),
                        {
                        document.getElementById("1").innerHTML='Report 1'();
                        },
                    else if (ReportNumber = 3);
                        {
                        document.getElementById("1").innerHTML='Report 2'();
                        },
                    else ;
                        {
                        document.getElementById("1").innerHTML='<h3><br>For Students:</h3>Here the users report will be accessible<h3><br>For Teachers:</h3>Here the user will be able to write reports<h3><br>For Both:</h3>In the finished product when a user changes the Select field the text in the body will change'();
                        }, 
                    */
                    dockedItems: [{
                        xtype: 'toolbar',
                        ui: 'light',
                        dock: 'top',
                        items: [{
                            xtype: 'selectfield',
                            name: 'options',
                            options: [
                                {text: 'Please Select a Report', value: '1'},
                                {text: 'Report 1', value: '2'},
                                {text: 'Report 2', value: '3'}

                            ]
                        }]
                    }]
                            
                }]
			});
		}
});