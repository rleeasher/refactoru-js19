$(function(){
	var orderItems = [];
	var findPlate = function(str) {
		var obj = {};
		for (var i = 0; i < ourmenu.arrPlates.length; i++) {
			if (ourmenu.arrPlates[i].name === str){
				obj = ourmenu.arrPlates[i];
				}
			}
		return obj;
	};




	$( '#bb-bookblock' ).bookblock();
	// $( '#bb-bookblock' ).bookblock("first");
	$(document).on("click","#bb-nav-first", function(){
		$('#bb-bookblock' ).bookblock("first");
	});
	$(document).on("click","#bb-nav-next", function(){
		$('#bb-bookblock' ).bookblock("next");
	});
	$(document).on("click","#bb-nav-prev", function(){
		$('#bb-bookblock' ).bookblock("prev");
	});
	$(document).on("click","#bb-nav-last", function(){
		$('#bb-bookblock' ).bookblock("last");
	});

	$(document).on('click','.add-button', function(){
		var plate = $(this).closest('.bb-item').find('.menu-item').text();
		var obj = findPlate(plate);

		orderItems.push(obj);

		var order = new Order(orderItems);
		orderContainer.html("");
		orderContainer.append(order.create());
	});

});