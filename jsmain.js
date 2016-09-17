var wishlist = [{
    'title': 'Sound Box',
    'descrip': 'Two soundboxes for annoucements in dormitories, announcements during morning assembly, sports and other engagements',
    'link': 'http://www.amazon.in/Philips-Multimedia-Speakers-SPA1260-12/dp/B007VZFZO8?ie=UTF8&keywords=stereo%20speakers&qid=1462739125&ref_=sr_1_5&sr=8-5',
    'units_needed': 2,
    'units_fulfilled': 0,
    'cost': 1168.00,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {
    'title': 'Mosquito Net',
    'descrip': '6.5*6.5 sq. ft.',
    'link': 'http://www.amazon.in/Blue-Classic-Heavy-Delux-Mosquito/dp/B01EJU6DQG/ref=sr_1_2?ie=UTF8&qid=1462739531&sr=8-2-spons&keywords=mosquito+net&psc=1',
    'units_needed': 4,
    'units_fulfilled': 0,
    'cost': 489.00,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {
    'title': 'Steel Almirah',
    'descrip': '',
    'link': 'http://www.flipkart.com/durian-alden-b-stainless-steel-collapsible-wardrobe/p/itmeg4ug49zrufqr?pid=CWDEG4UGAVQHVVFV&al=SjMsdDNFPsWUdjJlkNmJi8ldugMWZuE75aUsiwTbcEM6Re4IzNLHsYiZKpH4wXUoFooWMqSTJgI%3D&ref=L%3A7915270700945263890&srno=p_18&findingMethod=Search&otracker=start',
    'units_needed': 2,
    'units_fulfilled': 0,
    'cost': 16575,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {
    'title': 'CFL Lights',
    'descrip': '',
    'link': 'http://www.flipkart.com/aae-20-w-cfl-eurolex-bulb/p/itmegggefyd8bmfr?pid=BLBEGGGEG9Z2N5AE&al=SjMsdDNFPsV%2FPzivkln5t8ldugMWZuE7mxWx381qOwQa%2FjQIklnJgm7vnBP%2FpPGoBNq388G1Nq4%3D&ref=L%3A-7182202938594606719&srno=p_1&otracker=from-search',
    'units_needed': 2,
    'units_fulfilled': 0,
    'cost': 200,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {
    'title': 'Large Kadai',
    'descrip': 'Cooking Utensil 15+ L',
    'units_needed': 1,
    'units_fulfilled': 0,
    'cost': 1300,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {

    'title': 'Large Dekchi',
    'descrip': 'Cooking Utensil 15+ L',
    'units_needed': 1,
    'units_fulfilled': 3,
    'cost': 500,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {
    'title': 'Cricket Bats',
    'descrip': '',
    'units_needed': 10,
    'units_fulfilled': 3,
    'cost': 500,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {
    'title': 'Cricket Bats',
    'descrip': '',
    'units_needed': 10,
    'units_fulfilled': 3,
    'cost': 500,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {
    'title': 'Cricket Bats',
    'descrip': '',
    'units_needed': 10,
    'units_fulfilled': 3,
    'cost': 500,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {
    'title': 'Cricket Bats',
    'descrip': '',
    'units_needed': 10,
    'units_fulfilled': 3,
    'cost': 500,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {
    'title': 'Cricket Bats',
    'descrip': '',
    'units_needed': 10,
    'units_fulfilled': 3,
    'cost': 500,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {
    'title': 'Cricket Bats',
    'descrip': '',
    'units_needed': 10,
    'units_fulfilled': 3,
    'cost': 500,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {
    'title': 'Cricket Bats',
    'descrip': '',
    'units_needed': 10,
    'units_fulfilled': 3,
    'cost': 500,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {
    'title': 'Cricket Bats',
    'descrip': '',
    'units_needed': 10,
    'units_fulfilled': 3,
    'cost': 500,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {
    'title': 'Cricket Bats',
    'descrip': '',
    'units_needed': 10,
    'units_fulfilled': 3,
    'cost': 500,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {
    'title': 'Cricket Bats',
    'descrip': '',
    'units_needed': 10,
    'units_fulfilled': 3,
    'cost': 500,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {
    'title': 'Cricket Bats',
    'descrip': '',
    'units_needed': 10,
    'units_fulfilled': 3,
    'cost': 500,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}, {
    'title': 'Cricket Bats',
    'descrip': '',
    'units_needed': 10,
    'units_fulfilled': 3,
    'cost': 500,
    'status': 0,
    'imageURL': 'imgs/5.jpg'
}];
window.onload = function() {
    for (var i = 0; i < wishlist.length; i++) {
        var tile = $("<div></div>").addClass("tile col-md-4");
        var card = $("<div></div>").addClass("card col-md-12");
        //var icondiv = $("<div></div>").addClass("icon-circle");
        //var pofind = $("<p></p>").addClass("text-need").html(wishlist[i].units_needed + " more needed  ");
        //pofind.append($("<i></i>").addClass("fa fa-battery-" + wishlist[i].status));
        //icondiv.append(pofind);
        card.append($("<img></img>").attr("src", wishlist[i].imageURL).addClass("img-responsive tiles col-md-12"));
        card.append($("<p></p>").addClass("tile-title col-md-12").html(wishlist[i].title));
        card.append($("<p></p>").addClass("tile-descrip col-md-12").html(wishlist[i].descrip));
        card.append($("<button></button>").addClass("btn btn-danger buttony").html("Fulfill Wish <i class='fa fa-heart' aria-hidden='true'></i>"));
        var minicard1 = $("<div></div>").addClass("minicard1 col-md-6");
        var minicard2 = $("<div></div>").addClass("minicard2 col-md-6");
        minicard1.append($("<p></p>").addClass("tile-wish1 col-md-12").html('Wishes Fulfilled'));
        minicard1.append($("<p></p>").addClass("tile-wish2 col-md-12").html(wishlist[i].units_fulfilled));
        minicard2.append($("<p></p>").addClass("tile-wish1 col-md-12").html('Wishes Remaining'));
        minicard2.append($("<p></p>").addClass("tile-wish3 col-md-12").html(wishlist[i].units_needed));
        
        card.append($("<p></p>").addClass("tile-wish4 col-md-12").html('Approx. Cost per Unit : ' + wishlist[i].cost + ' <i class="fa fa-inr" aria-hidden="true"></i>'));
        card.append(minicard2);
        card.append(minicard1);
        tile.append(card);
        $(".tile-group").append(tile);
    }
}