//  change after pull
var product = document.getElementById("product")
var productArr = [
    {
        "id": "1",
        "image": "../img/1.jpg",
        "name": "Airpods Pro",
        "price-sale": "$135.99",
        "price-origin": "$249.99",
        "status": true
    },
    {
        "id": "2",
        "image": "../img/2.jpg",
        "name": "AirPods with Wireless Charging Case (Latest Model)",
        "price-sale": "$89.99",
        "price-origin": "$199.99",
        "status": false
    },
    {
        "id": "3",
        "image": "../img/3.jpg",
        "name": "AirPods with Charging Case (Latest Model)",
        "price-sale": "$89.99",
        "price-origin": "$199.99",
        "status": true
    },
    {
        "id": "4",
        "image": "../img/4.jpg",
        "name": "Powerbeats Pro Wireless Earphones – Blue",
        "price-sale": "$89.99",
        "price-origin": "$199.99",
        "status": true
    },
    {
        "id": "5",
        "image": "../img/5.jpg",
        "name": "Powerbeats Pro Wireless Earphones – Green",
        "price-sale": "$89.99",
        "price-origin": "$199.99",
        "status": true
    },
    {
        "id": "6",
        "image": "../img/6.jpg",
        "name": "Powerbeats Pro Wireless Earphones – Black",
        "price-sale": "$89.99",
        "price-origin": "$199.99",
        "status": true
    },
    {
        "id": "7",
        "image": "../img/7.jpg",
        "name": "Beats Studio3 Wireless Noise Cancelling Over-Ear",
        "price-sale": "$199.99",
        "price-origin": "$299.99",
        "status": true
    },
    {
        "id": "8",
        "image": "../img/8.jpg",
        "name": "Beats Studio3 Wireless Noise Cancelling Over-Ear",
        "price-sale": "$319.99",
        "price-origin": "$599.99",
        "status": false
    },
    {
        "id": "9",
        "image": "../img/9.jpg",
        "name": "Beats Solo3 Wireless On-Ear Headphones – Rose Gold",
        "price-sale": "$319.99",
        "price-origin": "$599.99",
        "status": true
    },
    {
        "id": "10",
        "image": "../img/10.jpg",
        "name": "Beats Studio3 Wireless Noise Cancelling Over-Ear",
        "price-sale": "$299.99",
        "price-origin": "$479.99",
        "status": false
    },
    {
        "id": "11",
        "image": "../img/11.jpg",
        "name": "Beats Studio3 Wireless Noise Cancelling Over-Ear",
        "price-sale": "$299.99",
        "price-origin": "$479.99",
        "status": true
    },
    {
        "id": "12",
        "image": "../img/12.jpg",
        "name": "Beats Solo3 Wireless On-Ear Headphones – Red",
        "price-sale": "$259.99",
        "price-origin": "$479.99",
        "status": false
    }
]
function showProduct() {
    for (var i = 0; i < productArr.length; i++) {
        product.innerHTML += `
        <div class="item" >
            <a href="" class = "img-product">
                <img src="${productArr[i].image}" alt="" width = "250px" height = "320px">
            </a>
            <div class = "name-product">
                <a href="">${productArr[i].name}</a>
            </div>
            <div class="price">
                <p class = "price-sale">${productArr[i]["price-sale"]}</p>
                <del class = "price-origin">${productArr[i]["price-origin"]}</del>
            </div>
            <div class="btn-addCart">
	            <button id = "addToCart" onclick = "addToCart(${productArr[i].id})" >ADD TO CART</button>
            </div>
        </div>
    `
    }
}
showProduct()
var cartArr = []
var addToCart = document.getElementById('addToCart')
var btnCart = document.getElementById('btn-cart')
var showMain = document.getElementById('showMain')
var tableCart = document.getElementById('table-cart')
btnCart.onclick = function () {
    tableCart.classList.toggle('show')
    showMain.classList.toggle('hide')
}
addToCart = function (id) {
    for (let i = 0; i < productArr.length; i++) {
        if (productArr[i].id == id) {
            var newProduct =
            {
                "id": productArr[i].id,
                "image": productArr[i].image,
                "nameProduct": productArr[i].name,
                "priceSale": productArr[i]["price-sale"],
                "priceOrigin": productArr[i]["price-origin"],
                "status": productArr[i].status
            }
        }
    }
    cartArr.push(newProduct);
    alert('Add to cart success')
    showCart()
    totalCart(cartArr)
}
var tableData = document.getElementById('tableData')
function showCart() {
    tableData.innerHTML = ""
    for (let i = 0; i < cartArr.length; i++) {
        tableData.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td><img src="${cartArr[i].image}" width = "100px"></td>
            <td>${cartArr[i].nameProduct}</td>
            <td>${cartArr[i].priceSale}</td>
            <td>${cartArr[i].status ? "In Stock" : "Out of Stock"}</td>
            <td>
                <button id="btnRemoveProduct" onclick = "removeProduct(${cartArr[i].id})">Remove</button>
            </td>
        </tr>
    `
    }
}
function totalCart(carts) {
    var total = document.getElementById('total')
    var totalCart = carts.reduce(function (accumulator, currentIndex) {
        var price = currentIndex.priceSale.slice(1)
        return accumulator + Number(price)
    }, 0);
    total.innerHTML = '$' + totalCart.toFixed(2)
}
var btnClearCart = document.getElementById('btnClearCart')
btnClearCart.onclick = function () {
    if (confirm("Do you want clear cart?")) {
        cartArr.splice(0, cartArr.length)
        tableData.innerHTML = ""
        total.innerHTML = "$" + 0
    }
}
var returnToShop = document.getElementById('returnToShop')
returnToShop.onclick = function () {
    tableCart.classList.toggle('show')
    showMain.classList.toggle('hide')
}
function removeProduct(id) {
    for (let i = 0; i < cartArr.length; i++) {
        if (cartArr[i].id == id) {
            cartArr.splice(i,1)
        }
    }
    showCart()
    totalCart(cartArr)
}
