var wishlist = [
	{
		'title' : 'Sound Box',
		'descrip' : 'Two soundboxes for annoucements in dormitories, announcements during morning assembly, sports and other engagements',
		'link' : 'http://www.amazon.in/Philips-Multimedia-Speakers-SPA1260-12/dp/B007VZFZO8?ie=UTF8&keywords=stereo%20speakers&qid=1462739125&ref_=sr_1_5&sr=8-5'
		'units_needed' : 2,
		'units_fulfilled' : 0,
		'cost' : 1168.00,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},
	{
		'title' : 'Mosquito Net',
		'descrip' : '6.5*6.5 sq. ft.',
		'link': 'http://www.amazon.in/Blue-Classic-Heavy-Delux-Mosquito/dp/B01EJU6DQG/ref=sr_1_2?ie=UTF8&qid=1462739531&sr=8-2-spons&keywords=mosquito+net&psc=1'
		'units_needed' : 4,
		'units_fulfilled' : 0,
		'cost' : 489.00,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},
	{
		'title' : 'Steel Almirah',
		'descrip' : '',
		'link':'http://www.flipkart.com/durian-alden-b-stainless-steel-collapsible-wardrobe/p/itmeg4ug49zrufqr?pid=CWDEG4UGAVQHVVFV&al=SjMsdDNFPsWUdjJlkNmJi8ldugMWZuE75aUsiwTbcEM6Re4IzNLHsYiZKpH4wXUoFooWMqSTJgI%3D&ref=L%3A7915270700945263890&srno=p_18&findingMethod=Search&otracker=start'
		'units_needed' : 2,
		'units_fulfilled' : 0,
		'cost' : 7000,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},
	{
		'title' : 'Cricket Bats',
		'descrip' : '',
		'units_needed' : 10,
		'units_fulfilled' : 3,
		'cost' : 500,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},
	{
		'title' : 'Cricket Bats',
		'descrip' : '',
		'units_needed' : 10,
		'units_fulfilled' : 3,
		'cost' : 500,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},
	{
		'title' : 'Cricket Bats',
		'descrip' : '',
		'units_needed' : 10,
		'units_fulfilled' : 3,
		'cost' : 500,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},
	{
		'title' : 'Cricket Bats',
		'descrip' : '',
		'units_needed' : 10,
		'units_fulfilled' : 3,
		'cost' : 500,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},
	{
		'title' : 'Cricket Bats',
		'descrip' : '',
		'units_needed' : 10,
		'units_fulfilled' : 3,
		'cost' : 500,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},
	{
		'title' : 'Cricket Bats',
		'descrip' : '',
		'units_needed' : 10,
		'units_fulfilled' : 3,
		'cost' : 500,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},
	{
		'title' : 'Cricket Bats',
		'descrip' : '',
		'units_needed' : 10,
		'units_fulfilled' : 3,
		'cost' : 500,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},
	{
		'title' : 'Cricket Bats',
		'descrip' : '',
		'units_needed' : 10,
		'units_fulfilled' : 3,
		'cost' : 500,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},
	{
		'title' : 'Cricket Bats',
		'descrip' : '',
		'units_needed' : 10,
		'units_fulfilled' : 3,
		'cost' : 500,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},{
		'title' : 'Cricket Bats',
		'descrip' : '',
		'units_needed' : 10,
		'units_fulfilled' : 3,
		'cost' : 500,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},
	{
		'title' : 'Cricket Bats',
		'descrip' : '',
		'units_needed' : 10,
		'units_fulfilled' : 3,
		'cost' : 500,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},
	{
		'title' : 'Cricket Bats',
		'descrip' : '',
		'units_needed' : 10,
		'units_fulfilled' : 3,
		'cost' : 500,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},
	{
		'title' : 'Cricket Bats',
		'descrip' : '',
		'units_needed' : 10,
		'units_fulfilled' : 3,
		'cost' : 500,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},
	{
		'title' : 'Cricket Bats',
		'descrip' : '',
		'units_needed' : 10,
		'units_fulfilled' : 3,
		'cost' : 500,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	},
	{
		'title' : 'Cricket Bats',
		'descrip' : '',
		'units_needed' : 10,
		'units_fulfilled' : 3,
		'cost' : 500,
		'status' : 0,
		'imageURL' : 'imgs/5.jpg'
	}
];
window.onload=function(){
	for (var i=0;i<wishlist.length;i++){
		var tile = $("<div></div>").addClass("tile");
		tile.append($("<p></p>").addClass("tile-title").html(wishlist[i].title));
		var icondiv = $("<div></div>").addClass("icon-circle");
		var pofind = $("<p></p>").addClass("text-need").html(wishlist[i].units_needed+" more needed  ");
		pofind.append($("<i></i>").addClass("fa fa-battery-"+wishlist[i].status));
		icondiv.append(pofind);
		tile.append(icondiv);
		tile.append($("<img></img>").attr("src",wishlist[i].imageURL).addClass("img-responsive tiles"));
		$(".tile-group").append(tile);
	}
}