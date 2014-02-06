$(function(){
	var orderItems = [];
	var dietarypref = [];
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

	$(document).on('click','.delete-order-item', function(){ 
		$(this).closest('.order-item').remove();
		var index = $(this).data("id");
		orderItems.splice(index,1);
		
		var order = new Order(orderItems);
		orderContainer.html("");
		orderContainer.append(order.create());

	});

	$(document).on('click','.diet', function(){
		dietarypref[0] = $(this).closest('#customer-prefs').find('[name="isVegan"]').is(':checked') ? 1 : 0;
		dietarypref[1] = $(this).closest('#customer-prefs').find('[name="isGlutenFree"]').is(':checked') ? 1 : 0;
		dietarypref[2] = $(this).closest('#customer-prefs').find('[name="isCitrusFree"]').is(':checked') ? 1 : 0;
		console.log(dietarypref);

		for (var i = 0; i < menu.length; i++) {
			var highlight = false;
			var harray = [];
			var arr = [];
			console.log(menu[i].isVegan());
			arr[0] = menu[i].isVegan() === 'Yes' ? 1 : 0;
			arr[1] = menu[i].isGlutenFree() === 'Yes' ? 1 : 0;
			arr[2] = menu[i].isCitrusFree() === 'Yes' ? 1 : 0;

			for (var k = 0; k < arr.length; k++) {
				harray[k] = arr[k]*dietarypref[k]
			};
			// console.log(harray);
			// highlight = harray === dietarypref ? true : false;
			// $('').toggleClass(highlighted)

		};
		

	});

});