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

        previewDetails.classList.add("active");
      };
    });

  function closePreview() {
    previewContainer.style.display = "none";
  }

  var counter = 0;
  function addToCart() {
    counter++;
    document.getElementById("cartCount").innerText = counter;
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
}
