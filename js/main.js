	var mainContainer = $("#bb-bookblock");
	var orderContainer = $("#order");

	//use date index to find current date through nicedate
	var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
		this.name = name;
		this.calories = calories;
		this.vegan = vegan;
		this.glutenFree = glutenFree;
		this.citrusFree = citrusFree;
	};

	FoodItem.prototype.toString = function(){
		return this.name;
		// return this.name + ', both organic and nutritious! \n'
		//   + '\tCalories: '+this.calories+'\n'
		//   + '\tVegan: '+this.vegan+'\n'
		//   + '\tGluten Free: '+this.glutenFree+'\n'
		//   + '\tCitrus Free: '+this.citrusFree+'\n';
	};

	FoodItem.prototype.create = function(){
		return '<pre class="food-ingredient">{0}</pre>'.supplant([this.toString()]);
	}

	///HERE BEGINS DRINKS
	var Drink = function(name, description, price, ingredients){
		this.name = name;
		this.description = description;
		this.price = price;
		this.ingredients = ingredients
	}
	
	Drink.prototype.toString = function(){
		var ingredientsString = "";
		for (var i = 0; i < this.ingredients.length; i++) {
			ingredientsString += this.ingredients[i].toString();
		};
		return this.name + ', both boozy and delicious! \n'
		  + '\tDescription: '+this.description+'\n'
		  + '\tPrice: '+this.price+'\n'
		  + '\tIngredients: \n'+ingredientsString+'\n';	  
	};


	Drink.prototype.create = function(){
		var str = "";
		for (var i = 0; i < this.ingredients.length; i++) {
			str += this.ingredients[i].create();
		};
		return '<div class="bb-item"><h2 class="menu-item">{0}</h2><div class="food-item">{1}<button type="button" class="add-button">Add</button></div></div>'.supplant([this.name,str]);
	}

	///HERE BEGINS PLATE STUFF
	var Plate = function(name, description, price, ingredients){
		this.name = name;
		this.description = description;
		this.price = price;
		this.ingredients = ingredients
	}

	Plate.prototype.toString = function(){
		var ingredientsString = "";
		for (var i = 0; i < this.ingredients.length; i++) {
			ingredientsString += this.ingredients[i].toString();
		};
		return this.name + ', both savory and scrumptious! \n'
		  + '\tDescription: '+this.description+'\n'
		  + '\tPrice: '+this.price+'\n'
		  + '\tIngredients: \n'+ingredientsString+'\n';
	};

	Plate.prototype.isVegan = function () {
		isVegan = "Yes";
		for (var i = 0; i < this.ingredients.length; i++) {
			this.ingredients[i].vegan ? isVegan : isVegan = "No";
		};
		return isVegan;
	};

	Plate.prototype.isCitrusFree = function () {
		isCitrusFree = "Yes";
		for (var i = 0; i < this.ingredients.length; i++) {
			this.ingredients[i].citrusFree ? isCitrusFree : isCitrusFree = "No";
		};
		return isCitrusFree;
	};

	Plate.prototype.isGlutenFree = function () {
		isGlutenFree = "Yes";
		for (var i = 0; i < this.ingredients.length; i++) {
			this.ingredients[i].glutenFree ? isGlutenFree : isGlutenFree = "No";
		};
		return isGlutenFree;
	};

	Plate.prototype.calories = function(){
		var totalCal = 0;
		for(var i=0;i < this.ingredients.length ;i++){
			totalCal += this.ingredients[i].calories;
		}
		return totalCal;
	}

	Plate.prototype.create = function(){
		var str = "";
		for (var i = 0; i < this.ingredients.length; i++) {
			str += this.ingredients[i].create();
		};
		var stats = "<div class='stats-container'><div class='stats'>Calories: {0}</div><div class='stats'>Vegan: {1}</div><div class='stats'>Gluten Free: {2}</div><div class='stats'>Citrus Free: {3}</div><div class='stats'>Price: {4}</div></div>".supplant([this.calories(),this.isVegan(),this.isGlutenFree(),this.isCitrusFree(),this.price]);
		return '<div class="bb-item"><h2 class="menu-item">{0}</h2><div class="food-item">{1}{2}<button type="button" class="add-button">Add</button></div></div>'.supplant([this.name,str, stats]);
	}


	///HERE BEINGS ORDER STUFF
	var Order = function(arrPlates){
		this.arrPlates = arrPlates
	}

	Order.prototype.toArray = function(){
		var plateArr = [];
		for (var i = 0; i < this.arrPlates.length; i++) {
			plateArr.push(this.arrPlates[i]);
		};
		return plateArr;
	};

	Order.prototype.create = function(){
		var str = "";
		var totalcals = 0;
		var totalprice = 0;
		var arr = this.toArray();
		for (var i = 0; i < arr.length; i++) {
			totalprice += arr[i].price;
			totalcals += arr[i].calories();
			str += '<li class="order-item"><span data-id="'+i+'" class="delete-order-item">x</span>'+arr[i].name+'</li>';
		};

		return $('<div class="orders"><h3>Ordered Items</h3><ul>{0}</ul><div class="calories">Total Calories: {1}</div><div class="totalprice">Total Price: {2}</div></div>'.supplant([str,totalcals,totalprice]));
	}

	///MENU SUTFF
	var Menu = function(arrPlates){
		this.arrPlates = arrPlates;
	}

	Menu.prototype.toString = function(){
		var plateString = "";
		for (var i = 0; i < this.arrPlates.length; i++) {
			plateString += (this.arrPlates[i].toString());
		};
		return plateString;
	}

	// Menu.prototype.toArray = function(){
	// 	var plateArr = [];
	// 	for (var i = 0; i < this.arrPlates.length; i++) {
	// 		plateArr.push(this.arrPlates[i]);
	// 	};
	// 	return plateArr;
	// };

	Menu.prototype.create = function () {
		var str = ""; 
		for (var i = 0; i < this.arrPlates.length; i++) {
			str += this.arrPlates[i].create();
		};
		return str;
	}
	///RESTAURANT
	var Restaurant = function(name, description, menu){
		this.name = name;
		this.description = description;
		this.menu = menu
	}

	Restaurant.prototype.toString = function(){
		return this.name + ', Best fusion food in Iowa! \n'
		  + '\tDescription: '+this.description+'\n'
		  + '\tMenu: '+this.menu.toString()+'\n'
	};
	///STUPID CUSTOMERS
	var Customer = function(dietaryPreference){
		this.dietaryPreference = dietaryPreference
	}

	///START
	var carrot = new FoodItem('Carrot',10,true,true,true);
	var steak = new FoodItem('Steak',1000,false,true,true);
	var spc = new FoodItem('Sour Patch Candy',500,false,true,false);
	var almond = new FoodItem('Almond',50,true,true,true);
	var lemon = new FoodItem('Lemon',80,true,true,false);
	var mushroom = new FoodItem('Mushroom',10,true,true,true);
	var chicken = new FoodItem('Chicken',400,false,true,true);
	var tortilla = new FoodItem('Tortilla',300,false,false,true);
	var bean = new FoodItem('Bean',200,true,true,true);
	var sourcream = new FoodItem('Sour Cream',250,false,true,true);
	var guacamole = new FoodItem('Guacamole',300,true,true,true);
	var tequila = new FoodItem('Tequila',100,true,true,true);
	var triplesec = new FoodItem('Triple Sec',100,true,true,false);
	var limejuice = new FoodItem('Lime Juice',100,true,true,false);;
	var olives = new FoodItem('Olives',250,true,true,true);
	var baguette = new FoodItem('Sourdough Baguette',600,true,false,true);
	var tacoSauce = new FoodItem('Pineapple Mango',100,true,true,false);
	var queso = new FoodItem('American Cheese',500,false,true,true);
	var salt = new FoodItem('Salt',0,true,true,true);



	var steakplate = new Plate('Steak du jour','A succulent mignon',70,[steak,almond,mushroom,tacoSauce]);
	var carrotCasserole = new Plate('Carrot Casserole','A savory glazed carrot infusion',20,[carrot,lemon,baguette]);
	var burrito = new Plate('Burrito','A tasty gas producing monster',35,[tortilla,bean,sourcream,guacamole,olives,tacoSauce,queso,chicken]);
	var margarita = new Plate('Margarita','The Walk of Shame',18,[tequila,limejuice,salt,triplesec]);
	var frenchy = new Plate('Frenchy','Louvre',58,[baguette,queso]);
	var beans = new Plate('Beans','Imported Mashed Beans',1,[bean,salt]);
	var chickenplate = new Plate('Chicken','Pineapple Mango Chicken',36,[chicken,almond,tacoSauce,salt]);
	var dip = new Plate('Carne Asada dip','An amazing infusion of domestically raised beef and responsibly raised avacados',40,[steak,guacamole,tortilla,salt,olives]);
	var guacamoleplate = new Plate('Guacamole','Plain avacados: no salt',100,[guacamole]);
	var dessert = new Plate('SPC fusion','An amazing combination sour candy and taco sauce',7,[spc,tacoSauce,triplesec,lemon,mushroom]);

	var menu = [steakplate,carrotCasserole,burrito,margarita,frenchy,beans,chickenplate,dip,guacamoleplate,dessert];
	var ourmenu = new Menu(menu);
	console.log(menu.length);

	var ourrestaurant = new Restaurant('Jasher\'s Fusion','Offers ethically/morally/responsibly/locally raised food products',ourmenu)

	// var ourorder = new Order([steakplate,carrotCasserole,burrito]);

	mainContainer.append(ourmenu.create());
	// orderContainer.append(ourorder.create());















	