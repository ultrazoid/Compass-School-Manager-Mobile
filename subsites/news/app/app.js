new Ext.Application({
    name: 'Compass School Manager - Mobile',
    defaultTarget: 'viewport',
    icon: 'apple-touch-icon.png',
    phoneStartupScreen: 'apple-touch-icon.png',
	launch: function () {
        var TabPanel = new Ext.TabPanel({
				fullscreen: true,
				dockedItems: [{
					xtype: 'toolbar', title: 'Compass School Manager'
				}],
				tabBar: {
					ui:'light'
				},
				items: [{
                    title: 'My News',
                    styleHtmlContent: true,
                    scroll: 'vertical',
                    html:'<h1>My News</h1><a href= "http://192.168.0.31/~user/">Return Home</a><hr /><h3><b>TITLE</b></h3>BODY<br><b>TIME AGO by TEACHER</b><hr /><br>',
                    }, {
                    title: 'World News',
                    styleHtmlContent: true,
                    scroll: 'vertical',
                    html: '<h1>World News</h1><b>Taken from BBC World News (<a href= "http://www.bbc.co.uk/news/world/">http://www.bbc.co.uk/news/world/</a>)<br><hr /><h3>ARTICLE TITLE</h3>SMALL SYNOPSIS<br>{<a href= "http://192.168.0.31/~user/mocksites/newsarticle.html">LINK TO ARTICLE</a>}<hr />',            

                }]
			});
		}
});