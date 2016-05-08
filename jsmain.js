var wishlist = [
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