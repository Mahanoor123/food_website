/****************************** Hamburger Code  ******************************/

var hamMenu = document.getElementById("ham_menu");
var navMenu = document.getElementById("nav_menu");
var navBar = document.getElementById("navbar");
var closeMenu = document.getElementById("ham_close");

hamMenu.addEventListener("click", function () {
  navBar.classList.add("active");
  navMenu.classList.add("active");
  hamMenu.classList.add("hidden");
  closeMenu.classList.add("active");
});

closeMenu.addEventListener("click", function () {
  navBar.classList.remove("active");
  navMenu.classList.remove("active");
  hamMenu.classList.remove("hidden");
  closeMenu.classList.remove("active");
});

/****************************** Home page Code  ******************************/

const pageTitle = document.title;

if (pageTitle === "Homepage") {
  /*** Image Slider ***/
  var heroImages = [
    "./Assets/Images/banner1.jpg",
    "./Assets/Images/banner2.jpg",
    "./Assets/Images/banner3.jpg",
    "./Assets/Images/banner4.jpg",
    "./Assets/Images/banner5.jpg",
  ];
  var currentImage = document.getElementById("hero_img");
  var currentIndex = 0;

  function rightSlide() {
    if (currentIndex === heroImages.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    currentImage.src = heroImages[currentIndex];
  }

  function leftSlide() {
    if (currentIndex === 0) {
      currentIndex = heroImages.length - 1;
    } else {
      currentIndex--;
    }

    currentImage.src = heroImages[currentIndex];
  }

  /*** Dynamic products generate ***/

  var foodItems = [
    {
      image: "./Assets/Images/food1.jpg",
      title: "Cheese pasta",
      price: "PKR 450.00",
    },
    {
      image: "./Assets/Images/food2.jpg",
      title: "Beef steak with seasoning",
      price: "PKR 1,436.00",
    },
    {
      image: "./Assets/Images/food3.jpg",
      title: "Mushroom hot grill",
      price: "PKR 850.00",
    },
    {
      image: "./Assets/Images/food4.jpg",
      title: "Meatball spicy spaghetti",
      price: "PKR 680.00",
    },
    {
      image: "./Assets/Images/food5.jpg",
      title: "Minced with wongton",
      price: "PKR 700.70",
    },
    {
      image: "./Assets/Images/food6.jpg",
      title: "weggies with steak",
      price: "PKR 1,250.00",
    },
    {
      image: "./Assets/Images/food7.jpg",
      title: "Seasoning mayo wrap",
      price: "PKR 900.00",
    },
    {
      image: "./Assets/Images/food8.jpg",
      title: "Chicken fingers hot",
      price: "PKR 850.00",
    },
    {
      image: "./Assets/Images/food9.jpg",
      title: "Large beef steak",
      price: "PKR 1,650.00",
    },
    {
      image: "./Assets/Images/food10.jpg",
      title: "Hot n sour soup",
      price: "PKR 850.00",
    },
    {
      image: "./Assets/Images/food11.jpg",
      title: "Mayo cheesy salid",
      price: "PKR 550.00",
    },
    {
      image: "./Assets/Images/food12.jpg",
      title: "Cutlets with seasoning",
      price: "PKR 980.00",
    },
    {
      image: "./Assets/Images/food13.jpg",
      title: "Achaari sabzi with roti",
      price: "PKR 980.00",
    },
    {
      image: "./Assets/Images/food14.jpg",
      title: "Fish fry with lemon flavour",
      price: "PKR 1050.10",
    },
    {
      image: "./Assets/Images/food15.jpg",
      title: "Tikka kabab paratha",
      price: "PKR 1200.60",
    },
    {
      image: "./Assets/Images/food16.jpg",
      title: "Creamy lasagna",
      price: "PKR 1620.80",
    },
    {
      image: "./Assets/Images/food17.jpg",
      title: "Fish fry",
      price: "PKR 1220.80",
    },
    {
      image: "./Assets/Images/food18.jpg",
      title: "Chilly fry with rice",
      price: "PKR 678.80",
    },
    {
      image: "./Assets/Images/food19.jpg",
      title: "Fried potatoes",
      price: "PKR 345.00",
    },
    {
      image: "./Assets/Images/food20.jpg",
      title: "Creamy museli pasta",
      price: "PKR 650.99",
    },
  ];

  for (var i = 0; i < foodItems.length; i++) {
    var singleItem = document.createElement("div");
    singleItem.setAttribute("class", "single_item");
    singleItem.setAttribute("data-name", "${idx}");
    var itemContent = `<img src="${foodItems[i].image}">
                    <div class="item_content">
                        <h3>${foodItems[i].title}</h3>
                        <p>${foodItems[i].price}</p>
                    </div>`;
    singleItem.innerHTML = itemContent;

    document.getElementById("food_items_display").appendChild(singleItem);
  }

  /*** Dynamic products details preview ***/

  var previewContainer = document.querySelector(".products_preview");

  document
    .querySelectorAll(".items_display .single_item")
    .forEach(function (product, index) {
      product.onclick = function () {
        previewContainer.style.display = "flex";

        const itemDetails = foodItems[index];
        const previewDetails = previewContainer.querySelector(".single_detail");

        previewDetails.querySelector(".main_img img").src = itemDetails.image;
        previewDetails.querySelector(".detail_content h3").textContent =
          itemDetails.title;
        previewDetails.querySelector(".detail_content .price").textContent =
          itemDetails.price;
        previewDetails.querySelector(".detail_content p").textContent =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quas! Quod recusandae sunt natus error.";
        previewDetails.querySelector(".detail_content .buttons").innerHTML = `
                         <button class="buy" onclick="checkout()">Buy Now</button>
                        <button class="cart" onclick="addToCart('${itemDetails.title}')">Add To Cart</button>`;

        previewDetails.classList.add("active");
      };
    });

  function closePreview() {
    previewContainer.style.display = "none";
  }

  /*** Dynamic add to cart section ***/

  var cartIcon = document.getElementById("cart");
  var cartclose = document.querySelector(".cart_section .fa-xmark");
  var cartTotal = document.querySelector(".cart_total");
  var cartMenu = document.querySelector(".cart_menu");

  cartIcon.addEventListener("click", function () {
    document.querySelector(".cart_section").style.right = "0";
  });

  cartclose.addEventListener("click", function () {
    document.querySelector(".cart_section").style.right = "-50vw";
  });

  var counter = 0;
  var total = 0;
  document.getElementById("cartCount").innerText = counter;

  function addToCart(val) {
    var foodItem = null;

    for (var i = 0; i < foodItems.length; i++) {
      if (foodItems[i].title === val) {
        foodItem = foodItems[i];
        break;
      }
    }

    if (foodItem) {
      document.querySelector(".cart_menu p").style.display = "none";
      var cartItem = document.createElement("div");
      cartItem.setAttribute("class", "cart_item");
      cartItem.setAttribute("data-title", val);

      var cartItemContent = `<div class="item_image">
                        <img src="${foodItem.image}">
                    </div>
                    
                    <div class="item_desc">
                        <h4>${foodItem.title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                    <div class="item_quantity">
                        <span>-</span> <input type="number"> <span>+</span>
                    </div>
                    <div class="item_price">
                        ${foodItem.price}
                    </div>
                    <div class="item_remove">
                        <i class="fa-solid fa-multiply" onclick="removeItem('${val}')"></i>
                    </div>
    `;
      cartItem.innerHTML = cartItemContent;

      cartMenu.appendChild(cartItem);
      counter++;
      document.getElementById("cartCount").innerText = counter;
      document.querySelector(".cart_header span").innerText = counter;
      total += parseFloat(foodItem.price.replace("PKR", "").trim());
      cartTotal.innerText = "PKR " + total.toFixed(2);
    }
  }

  function removeItem(val) {
    var cartItem = document.querySelector(`.cart_item[data-title="${val}"]`);

    var foodItem = null;

    for (var i = 0; i < foodItems.length; i++) {
      if (foodItems[i].title === val) {
        foodItem = foodItems[i];
        break;
      }
    } 

    if (foodItem) {
      total -= parseFloat(foodItem.price.replace("PKR", "").trim());
      cartTotal.innerText = "PKR " + total.toFixed(2);
      counter--;
      document.getElementById("cartCount").innerText = counter;
      document.querySelector(".cart_header span").innerText = counter;
    }
    cartMenu.removeChild(cartItem);
  }

  function checkout(){
    cartMenu.innerHTML = "";
    previewContainer.style.display = "none";
    alert("Your order complete, Thanks for purchasing");
  }

  var mainImage = document.querySelector(".main_img img");
  var smallImages = document.querySelectorAll(".small_images img");

  smallImages[0].onclick = function () {
    mainImage.src = smallImages[0].src;
  };
  smallImages[1].onclick = function () {
    mainImage.src = smallImages[1].src;
  };
  smallImages[2].onclick = function () {
    mainImage.src = smallImages[2].src;
  };
  smallImages[3].onclick = function () {
    mainImage.src = smallImages[3].src;
  };
} else if (pageTitle === "Dealpage") {

  var deals = [
    {
      image: "./Assets/Images/deal1.jpg",
      title: "Super Hot Deal",
      desc: {
        item1: "4 large penne pasta",
        item2: "3 chicken broast",
        item3: "Mayo Garlic Sauce",
        item4: "Regular drink",
      },
      button: "Avail Now",
    },
    {
      image: "./Assets/Images/deal2.jpg",
      title: "Super Hot Deal",
      desc: {
        item1: "4 large penne pasta",
        item2: "3 chicken broast",
        item3: "Mayo Garlic Sauce",
        item4: "Regular drink",
      },
      button: "Avail Now",
    },
    {
      image: "./Assets/Images/deal3.jpg",
      title: "Super Hot Deal",
      desc: {
        item1: "4 large penne pasta",
        item2: "3 chicken broast",
        item3: "Mayo Garlic Sauce",
        item4: "Regular drink",
      },
      button: "Avail Now",
    },
    {
      image: "./Assets/Images/deal4.jpg",
      title: "Super Hot Deal",
      desc: {
        item1: "4 large penne pasta",
        item2: "3 chicken broast",
        item3: "Mayo Garlic Sauce",
        item4: "Regular drink",
      },
      button: "Avail Now",
    },
    {
      image: "./Assets/Images/deal5.jpg",
      title: "Super Hot Deal",
      desc: {
        item1: "4 large penne pasta",
        item2: "3 chicken broast",
        item3: "Mayo Garlic Sauce",
        item4: "Regular drink",
      },
      button: "Avail Now",
    },
    {
      image: "./Assets/Images/deal6.jpg",
      title: "Super Hot Deal",
      desc: {
        item1: "4 large penne pasta",
        item2: "3 chicken broast",
        item3: "Mayo Garlic Sauce",
        item4: "Regular drink",
      },
      button: "Avail Now",
    },
    {
      image: "./Assets/Images/deal7.jpg",
      title: "Super Hot Deal",
      desc: {
        item1: "4 large penne pasta",
        item2: "3 chicken broast",
        item3: "Mayo Garlic Sauce",
        item4: "Regular drink",
      },
      button: "Avail Now",
    },
    {
      image: "./Assets/Images/deal8.jpg",
      title: "Super Hot Deal",
      desc: {
        item1: "4 large penne pasta",
        item2: "3 chicken broast",
        item3: "Mayo Garlic Sauce",
        item4: "Regular drink",
      },
      button: "Avail Now",
    },
    {
      image: "./Assets/Images/deal9.jpg",
      title: "Super Hot Deal",
      desc: {
        item1: "4 large penne pasta",
        item2: "3 chicken broast",
        item3: "Mayo Garlic Sauce",
        item4: "Regular drink",
      },
      button: "Avail Now",
    },
    {
      image: "./Assets/Images/deal10.jpg",
      title: "Super Hot Deal",
      desc: {
        item1: "4 large penne pasta",
        item2: "3 chicken broast",
        item3: "Mayo Garlic Sauce",
        item4: "Regular drink",
      },
      button: "Avail Now",
    },
    {
      image: "./Assets/Images/deal11.jpg",
      title: "Super Hot Deal",
      desc: {
        item1: "4 large penne pasta",
        item2: "3 chicken broast",
        item3: "Mayo Garlic Sauce",
        item4: "Regular drink",
      },
      button: "Avail Now",
    },
    {
      image: "./Assets/Images/deal12.jpg",
      title: "Super Hot Deal",
      desc: {
        item1: "4 large penne pasta",
        item2: "3 chicken broast",
        item3: "Mayo Garlic Sauce",
        item4: "Regular drink",
      },
      button: "Avail Now",
    },
    {
      image: "./Assets/Images/deal13.jpg",
      title: "Super Hot Deal",
      desc: {
        item1: "4 large penne pasta",
        item2: "3 chicken broast",
        item3: "Mayo Garlic Sauce",
        item4: "Regular drink",
      },
      button: "Avail Now",
    },
    {
      image: "./Assets/Images/deal14.jpg",
      title: "Super Hot Deal",
      desc: {
        item1: "4 large penne pasta",
        item2: "3 chicken broast",
        item3: "Mayo Garlic Sauce",
        item4: "Regular drink",
      },
      button: "Avail Now",
    },
    {
      image: "./Assets/Images/deal15.jpg",
      title: "Super Hot Deal",
      desc: {
        item1: "4 large penne pasta",
        item2: "3 chicken broast",
        item3: "Mayo Garlic Sauce",
        item4: "Regular drink",
      },
      button: "Avail Now",
    },
    {
      image: "./Assets/Images/deal16.jpg",
      title: "Super Hot Deal",
      desc: {
        item1: "4 large penne pasta",
        item2: "3 chicken broast",
        item3: "Mayo Garlic Sauce",
        item4: "Regular drink",
      },
      button: "Avail Now",
    },
  ];

  for (var i = 0; i < deals.length; i++) {
    var deal = document.createElement("div");
    deal.setAttribute("class", "deal");
    var dealContent = `<div class="deal_img">
                <img src="${deals[i].image}">
            </div>
            <div class="deal_content">
                <h1>${deals[i].title}</h1>
                <ul>
                    <li>${deals[i].desc.item1}</li>
                    <li>${deals[i].desc.item2}</li>
                    <li>${deals[i].desc.item3}</li>
                    <li>${deals[i].desc.item4}</li>
                </ul>
                <div class="buttons">
                    <button onclick="checkout()">Avail Now</button>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-heart"></i>
                </div>
            </div>`;
    deal.innerHTML = dealContent;

    document.querySelector(".deals_display").appendChild(deal);
  }
  function checkout(){
    alert("Your purchase complete, Thanks for purchasing")
  }
}
