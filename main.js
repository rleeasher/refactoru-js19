
	//use date index to find current date through nicedate
	var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
		this.name = name;
		this.calories = calories;
		this.vegan = vegan;
		this.glutenFree = glutenFree;
		this.citrusFree = citrusFree;

	};

	FoodItem.prototype.toString = function(){
		return this.name + ', both organic and nutritious! \n'
		  + '\tCalories: '+this.calories+'\n'
		  + '\tVegan: '+this.vegan+'\n'
		  + '\tGluten Free?: '+this.glutenFree+'\n'
		  + '\tCitrus Free?: '+this.citrusFree+'\n';
	};

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
		isVegan = true;
		for (var i = 0; i < this.ingredients.length; i++) {
			console.log(this.ingredients[i]);
			this.ingredients[i].vegan ? isVegan : isVegan = false;
		};
		return isVegan;
	};

	Plate.prototype.isCitrusFree = function () {
		isCitrusFree = true;
		for (var i = 0; i < this.ingredients.length; i++) {
			console.log(this.ingredients[i]);
			this.ingredients[i].citrusFree ? isCitrusFree : isCitrusFree = false;
		};
		return isCitrusFree;
	};

	Plate.prototype.isGlutenFree = function () {
		isGlutenFree = true;
		for (var i = 0; i < this.ingredients.length; i++) {
			console.log(this.ingredients[i]);
			this.ingredients[i].glutenFree ? isGlutenFree : isGlutenFree = false;
		};
		return isGlutenFree;
	};


	var Order = function(arrPlates){
		this.arrPlates = arrPlates
	}

	Order.prototype.toString = function(){
		var plateString = "";
		for (var i = 0; i < this.arrPlates.length; i++) {
			platesString += this.arrPlates[i].toString();
		};
		return plateString;
	};

	var Menu = function(arrPlates){
		this.arrPlates = arrPlates;
		console.log(this.arrPlates);
	}

	Menu.prototype.toString = function(){
		var plateString = "";
		for (var i = 0; i < this.arrPlates.length; i++) {
			plateString += (this.arrPlates[i].toString());
		};
		return plateString;
	};

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

	var Customer = function(dietaryPreference){
		this.dietaryPreference = dietaryPreference
	}



	var steakplate = new Plate('Steak du jour','A succulent mignon',70,[steak,almond,mushroom,tacoSauce]);
	var carrotCasserole = new Plate('Carrot Casserole','A savory glazed carrot infusion',20,[carrot,lemon,baguette]);
	var burrito = new Plate('Burrito','A tasty gas producing monster',35,[tortilla,bean,sourcream,guacamole,olives,tacoSauce,queso,chicken,steak,salt]);
	var margarita = new Plate('Margarita','The Walk of Shame',18,[tequila,limejuice,salt,triplesec]);
	var frenchy = new Plate('Frenchy','Louvre',58,[baguette,queso]);
	var beans = new Plate('Beans','Imported Mashed Beans',1,[bean,salt]);
	var chickenplate = new Plate('Chicken','Pineapple Mango Chicken',36,[chicken,almond,tacoSauce,salt]);
	var dip = new Plate('Carne Asada dip','An amazing infusion of domestically raised beef and responsibly raised avacados',40,[steak,guacamole,tortilla,salt,olives]);
	var guacamoleplate = new Plate('Guacamole','Plain avacados: no salt',100,[guacamole]);
	var dessert = new Plate('SPC fusion','An amazing combination sour candy and taco sauce',7,[spc,tacoSauce,triplesec,lemon,mushroom]);

	var ourmenu = new Menu([steak,carrotCasserole,burrito,margarita,frenchy,beans,chicken,dip,dessert]);

	var ourrestaurant = new Restaurant('Jasher\'s Fusion','Offers ethically/morally/responsibly/locally raised food products',ourmenu.toString())
	