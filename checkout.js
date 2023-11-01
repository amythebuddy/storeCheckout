document.getElementById("add").addEventListener("click", addNewItem)

function addNewItem(){
    const input = document.getElementById("barcode");
    const quan = document.getElementById("quantity");
    const item = {
        "689145740844" : {
            name : "JavaScript Textbook",
            price: "34.95"
        },
        "4549292070248" : {
            name: "Xerox Paper",
            price: "10.99"
        },
        "092265222983" : {
            name: "First Aid Kit",
            price: "20.99"
        },
        "X002ELVL3J" : {
            name: "Box of Pencils (50ct.)",
            price: "15.99"
        },
        "686024002468" : {
            name: "Sanitizing Wipes",
            price: "10.99"
        },
        "860004186236" : {
            name: "N95 Face Masks",
            price: "15.99" 
        },
        "036000214000" : {
            name: "Kleenex",
            price: "3.99"
        },
        "8809693254156" : {
            name: "Hand Sanitizer",
            price: "7.99"
        },
        "036500060480" :  {
            name: "Printer Paper",
            price: "9.99"   
        },
        "085014561877" : {
            name: "Brush Pens",
            price: "10.99"
        },
        "X0032YGP2T" : {
            name: "Multiport Adapter",
            price: "25.99"
        },
        "B07G6JT1XS" : {
        name: "Scissors (20ct.)",
        price: "23.99"
        },
        "9780134682334" : {
            name: "iOS Programming Textbook",
            price: "119.99"
        },
        "718103230759" : {
            name: "Spiral Notebook",
            price: "1.99"
        }
    };
    if(item.hasOwnProperty(input.value)){
        let container = document.createElement("div");
        let itemElement = document.createElement("p");
        let priceElement = document.createElement("p");
        let quantityElement = document.createElement("p");
        let total = document.createElement("p");
        let checkOut = document.createElement("button");
        let totalPrice = item[input.value].price;

        container.classList.add("contain");

        itemElement.innerText = item[input.value].name;
        itemElement.classList.add("itemStyle");

        priceElement.innerText = item[input.value].price;
        priceElement.classList.add("itemStyle");
        
        quantityElement.innerText = quan.value;  
        quantityElement.classList.add("itemStyle");

        checkOut.innerText = "Check Out";

        checkOut.onclick = function(price){
            totalPrice += parseFloat(price);
        };

        total.innerText = "Total: $" + totalPrice;
        document.body.appendChild(container);
        container.appendChild(itemElement);
        container.appendChild(priceElement);
        container.appendChild(quantityElement);
        document.body.appendChild(checkOut);
        input.value = "";
        quan.value = "";
    }
}