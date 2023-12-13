document.getElementById("add").addEventListener("click", addNewItem);
document.getElementById("quantity").addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        document.getElementById("add").click();
    }
})
let totalPrice = 0;
const input = document.getElementById("barcode");
const quan = document.getElementById("quantity");
const grandPrice = document.getElementById("grandTotal");
const total = document.getElementById("total");
let uniqueId = 0;
//container is the table
const container = document.getElementById("table");

//create an object to check existing item, and only store the item name with the value of quantity
let checkExistedItem = {};

function addNewItem(){

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
    if(quan.value === "" || input.value === "") {
        alert("You need to type something in barcode and quantity!");
        input.value = "";
        quan.value = "";
    } else if(item.hasOwnProperty(input.value)){
        const itemName = item[input.value].name;
        const itemPrice = item[input.value].price;
        
        //adding new row when the user input new things
        const tableRow = container.insertRow();

        //checking if the input is an existing item
        if(checkExistedItem.hasOwnProperty(itemName)){
            
            //changing the existing quantity value
            checkExistedItem[itemName] = parseFloat(quan.value);

            //storing the new quantity
            let newQuantity = checkExistedItem[itemName];

            //looping through the table rows
            for(let i = 0; i < container.rows.length; i++){

                //checking if the first cell exist and if the first cell have the same item name
                if(container.rows[i].cells[0] && container.rows[i].cells[0].innerText === itemName){
                    //go to that row
                    const existedRow = container.rows[i];
                    //go to the quantity cell and change it to the new quantity value
                    existedRow.cells[2].innerText = parseInt(existedRow.cells[2].innerText) + newQuantity;
                    //calculating the new total after changing the quantity
                    const newTotal = parseInt(existedRow.cells[2].innerText) * itemPrice;
                    total.innerText = "Total: $" + newTotal.toFixed(2);
                    // totalPrice = itemPrice * quan.value;
                    totalPrice = newTotal;
                }
            }
            input.value = "";
            quan.value = "";
        } else {
        
        //adding new property and quantity
        const itemElement = tableRow.insertCell(0);
        const priceElement = tableRow.insertCell(1);
        const quantityElement = tableRow.insertCell(2);
        const deleteElement = tableRow.insertCell(3);
        uniqueId++;
        //the check out button
        let checkBtn = document.getElementById("checkOut");

        itemElement.innerText = itemName;
        itemElement.classList.add("contain");

        priceElement.innerText = "$" + itemPrice;
        priceElement.classList.add("contain");

        quantityElement.innerText = quan.value;  
        quantityElement.classList.add("contain");
        
        deleteElement.innerHTML = '<button id = `${uniqueId}` class = "delete">x</button>';
        
        //trying to make a delete button for each item

        //storing the total price for the grand total
        totalPrice += itemPrice * quan.value;
        total.innerText = "Total: $" + totalPrice.toFixed(2);

        //after clicking check out button the grand total will be calculated
        checkBtn.onclick = function() {
            let grand = totalPrice + ( totalPrice * 0.0925);
            grandPrice.innerText = "Your grand total (including tax, 9.25%) is $" + grand.toFixed(2);
        };
        document.getElementById("uniqueId").onclick = function(){
            container.deleteRow(tableRow.rowIndex);
            console.log(uniqueId);
            uniqueId--;
            totalPrice -= (itemPrice * quan.value);
            total.innerText = "Total: $" + totalPrice.toFixed(2);
            console.log(totalPrice);
        }
        //after adding the new item, add it to the existing item for the next item to be checked
        checkExistedItem[itemName] = quan.value;

        input.value = "";
        quan.value = "";
        }
    } else {
        alert("The item is not in the store");
    }
}