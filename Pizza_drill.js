// JavaScript source code

// ------ Size JS ------

function getReceipt() {
    // This initializes our string so it can get passed from  
    // function to function, growing line by line into a full receipt
    var text1 = "";
    var text2 = 0;
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("sizespec");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    text1 = text1 + selectedSize + "<br> ";
    text2 = sizeTotal + "<br>";
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getMeat(runningTotal, text1, text2);


    // All three of these variables will be passed on to each function
};

// ------ /Size JS / intilize Running total ------

// ------ Meat JS ------
function getMeat(runningTotal, text1, text2) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: (" + meatArray[j].value + ")");
            //	text1 =  text1+", "+meats+"<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }

    runningTotal = (runningTotal + meatTotal);
    console.log("total selected meat items: " + meatCount);
    console.log(meatCount + " meat - 1 free meat = " + "$" + meatTotal + ".00");
    console.log("meat text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    //document.getElementById("showText2").innerHTML = text2;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
    text1 = text1 + "Meats <br> ";
    text2 = text2 + meatTotal + "<br>"
    getCheese(runningTotal, text1, text2);
};
// ------ /Meat JS ------

// ------ Cheese JS ------
document.getElementsByClassName("Cheese")

function getCheese(runningTotal, text1, text2) {
    var cheeseTotal = 0;
    var selectedCheese = [];
    var cheeseArray = document.getElementsByClassName("cheeseSpec");
    for (var k = 0; k < cheeseArray.length; k++) {
        if (cheeseArray[k].checked) {
            var selectedCheese = cheeseArray[k].value;
            text1 = text1 + selectedCheese + "<br>";
        }
    }
    if (selectedCheese === "Regular") {
        cheeseTotal = 0;
    } else if (selectedCheese === "No Cheese") {
        cheeseTotal = 0;
    } else if (selectedCheese === "Extra Cheese") {
        cheeseTotal = 3;
    }

    runningTotal = (runningTotal + cheeseTotal);
    console.log(selectedCheese + " = $" + cheeseTotal + ".00");
    console.log("cheese text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
    text2 = text2 + cheeseTotal + "<br>"
    getCrust(runningTotal, text1, text2);
};

// ------ /Cheese JS ------

// ------ Crust JS ------
document.getElementsByClassName("crust")

function getCrust(runningTotal, text1, text2) {
    var crustTotal = 0;
    var selectedCrust = [];
    var crustArray = document.getElementsByClassName("crustSpec");
    for (var l = 0; l < crustArray.length; l++) {
        if (crustArray[l].checked) {
            var selectedCrust = crustArray[l].value;
            text1 = text1 + selectedCrust + "<br>";
        }
    }
    if (selectedCrust === "Plain Crust") {
        crustTotal = 0;
    } else if (selectedCrust === "Garlic Butter Crust") {
        crustTotal = 0;
    } else if (selectedCrust === "Cheese Stuffed Crust") {
        crustTotal = 3;
    } else if (selectedCrust === "Spicy Crust") {
        crustTotal = 0;
    } else if (selectedCrust === "House Special Crust") {
        crustTotal = 0;
    }

    runningTotal = (runningTotal + crustTotal);
    text2 = text2 + crustTotal + "<br>"
    getSauce(runningTotal, text1, text2)
}
// ------ /Crust JS ------

// ----- Sauce ------
function getSauce(runningTotal, text1, text2) {
    var sauceTotal = 0;
    var selectedSauce = [];
    var sauceArray = document.getElementsByClassName("sauceSpec");
    for (var l = 0; l < sauceArray.length; l++) {
        if (sauceArray[l].checked) {
            var selectedSauce = sauceArray[l].value;
            text1 = text1 + selectedSauce + "<br>";
        }
    }
    if (selectedSauce === "Marinara sauce") {
        crustTotal = 0;
    } else if (selectedSauce === "White sauce") {
        crustTotal = 0;
    } else if (selectedSauce === "Barbeque sauce") {
        crustTotal = 0;
    } else if (selectedSauce === "No sauce") {
        crustTotal = 0;
    }

    runningTotal = (runningTotal + sauceTotal);

    text2 = text2 + sauceTotal + "<br>"
    getVeggie(runningTotal, text1, text2)
}


// ----- Sauce ------

// ------ Veggie JS ------
function getVeggie(runningTotal, text1, text2) {
    var veggietotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggiesspec");
    for (var j = 0; j < veggieArray.length; j++) {
        if (veggieArray[j].checked) {
            selectedVeggie.push(veggieArray[j].value);
            console.log("selected veggie item: (" + veggieArray[j].value + ")");
        }
    }
    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }

    runningTotal = (runningTotal + veggieTotal);
    console.log("total selected veggie items: " + veggieCount);
    console.log(veggieCount + " veggie - 1 free meat = " + "$" + veggieTotal + ".00");
    console.log("veggie text1: " + text1);
    text1 = text1 + "Veggies <br> ";
    text2 = text2 + veggieTotal + "<br>"

    // ------ /Veggie JS ------

    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("showText2").innerHTML = text2;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";

};





