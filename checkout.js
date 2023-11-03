document.getElementById("add").addEventListener("click", addNewItem);
document.getElementById("quantity").addEventListener("keypress", () => {
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("add").click();
    }
})
let totalPrice = 0;
let checkExistedItem = {};
function addNewItem(){
    const input = document.getElementById("barcode");
    const quan = document.getElementById("quantity");
    const grandPrice = document.getElementById("grandTotal");
    const total = document.getElementById("total");

    //container is the table
    const container = document.getElementById("table");

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
        const tableRow = container.insertRow();

        if(checkExistedItem.hasOwnProperty(itemName)){
            checkExistedItem[itemName] = parseFloat(quan.value);
            for(let i = 0; i < container.rows.length; i++){
                if(container.rows[i].cells[0].innerText === itemName){
                    const existedRow = container.rows[i];
                    existedRow.cells[2].innerText = checkExistedItem[itemName];
                    const newTotal = checkExistedItem[itemName] * itemPrice;
                    total.innerText = "Total: $" + newTotal;
                    totalPrice = itemPrice * quan.value;
                }
            }
        } else {
        
        
        const itemElement = tableRow.insertCell(0);
        const priceElement = tableRow.insertCell(1);
        const quantityElement = tableRow.insertCell(2);
        // tableRow.className = "data";

        console.log(checkExistedItem);
        //the check out button
        let checkBtn = document.getElementById("checkOut");


        itemElement.innerText = itemName;
        itemElement.classList.add("contain");

        priceElement.innerText = "$" + itemPrice;
        priceElement.classList.add("contain");

        quantityElement.innerText = quan.value;  
        quantityElement.classList.add("contain");

        totalPrice += itemPrice * quan.value;
        
        total.innerText = "Total: $" + totalPrice.toFixed(2);
        //after clicking check out button the grand total will be calculated
        checkBtn.onclick = function() {
            let grand = totalPrice + ( totalPrice * 0.0925);
            grand = grand.toFixed(2);
            grandPrice.innerText = "Your grand total (including tax, 9.25%) is $" + grand;
        };
        checkExistedItem[itemName] = quan.value;

        //add all of the element to the table
        input.value = "";
        quan.value = "";

    }
    } else {
        alert("The item is not in the store");
    }
}