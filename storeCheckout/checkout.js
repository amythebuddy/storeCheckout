document.getElementById("add").addEventListener("click", addNewItem);
let totalPrice = 0;
        //create each column with td
        let itemElement = document.createElement("td");
        let priceElement = document.createElement("td");
        let quantityElement = document.createElement("td");
        let tableRow = document.createElement("tr");
function addNewItem(){
    const input = document.getElementById("barcode");
    const quan = document.getElementById("quantity");
    const grandPrice = document.getElementById("grandTotal");
    const item = {
        "689145740844" : {
            name : "JavaScript Textbook",
            price: 34.95
        },
        "4549292070248" : {
            name: "Xerox Paper",
            price: 10.99
        },
        "092265222983" : {
            name: "First Aid Kit",
            price: 20.99
        },
        "X002ELVL3J" : {
            name: "Box of Pencils (50ct.)",
            price: 15.99
        },
        "686024002468" : {
            name: "Sanitizing Wipes",
            price: 10.99
        },
        "860004186236" : {
            name: "N95 Face Masks",
            price: 15.99 
        },
        "036000214000" : {
            name: "Kleenex",
            price: 3.99
        },
        "8809693254156" : {
            name: "Hand Sanitizer",
            price: 7.99
        },
        "036500060480" :  {
            name: "Printer Paper",
            price: 9.99  
        },
        "085014561877" : {
            name: "Brush Pens",
            price: 10.99
        },
        "X0032YGP2T" : {
            name: "Multiport Adapter",
            price: 25.99
        },
        "B07G6JT1XS" : {
        name: "Scissors (20ct.)",
        price: 23.99
        },
        "9780134682334" : {
            name: "iOS Programming Textbook",
            price: 119.99
        },
        "718103230759" : {
            name: "Spiral Notebook",
            price: 1.99
        }
    };
    if(item.hasOwnProperty(input.value)){
        //container is the table
        let container = document.getElementById("table");


        itemElement.innerText = item[input.value].name;
        itemElement.classList.add("contain");

        priceElement.innerText = "$" + item[input.value].price;
        priceElement.classList.add("contain");
        
        quantityElement.innerText = quan.value;  
        quantityElement.classList.add("contain");

        
        let checkExistedItem = [];
        if(checkExistedItem.includes(item[input.value].name)){
            quantityElement.innerText = quan.value;  
            totalPrice = item[input.value].price * quan.value;
        } else {
            itemElement = document.createElement("td");
         priceElement = document.createElement("td");
         quantityElement = document.createElement("td");
         tableRow = document.createElement("tr");
         totalPrice += item[input.value].price * quan.value;
        }
        checkExistedItem.push(item[input.value].name);
        
        //the check out button
        let checkBtn = document.getElementById("checkOut");

        //add the value to each element

        //calculate the price for the total

        //after clicking check out button the grand total will be calculated
        checkBtn.onclick = function() {
            total.innerText = "Total: $" + totalPrice;
            let grand = totalPrice + ( totalPrice * 0.925);
            grand = grand.toFixed(2);
            grandPrice.innerText = "Your grand total (including tax, 9.25%) is $" + grand;
        };

        //add all of the element to the table
        input.value = "";
        quan.value = "";

        container.appendChild(itemElement);
        container.appendChild(priceElement);
        container.appendChild(quantityElement);
        container.appendChild(tableRow);
    } else {
        alert("The item is not in the store");
    }
}