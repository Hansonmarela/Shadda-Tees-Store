const wrapper = document.querySelector(".sliderwrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "T-Shirt",
      price: 100,
      colors: [
        {
          code: "black",
          img: "./img/black shirt1.png",
        },
        {
          code: "white",
          img: "./img/White shirt 1.png",
        },
      ],
    },
    {
      id: 2,
      title: "Polo Shirt",
      price: 100,
      colors: [
        {
          code: "lightgray",
          img: "./img/Polo shirt.png",
        },
        {
          code: "green",
          img: "./img/polo shirt 2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Vee Neck",
      price: 100,
      colors: [
        {
          code: "lightgray",
          img: "./img/Vee Neck.png",
        },
        {
          code: "red",
          img: "./img/Vee Neck red.png",
        },
      ],
    },
    {
      id: 4,
      title: "Design Shirts",
      price: 100,
      colors: [
        {
          code: "black",
          img: "./img/design shirt.png",
        },
        {
          code: "lightgray",
          img: "./img/design shirt 2.png",
        },
      ],
    },
    {
      id: 5,
      title: "MJ",
      price: 100,
      colors: [
        {
          code: "gray",
          img: "./img/mj shirt.png",
        },
        {
          code: "brown",
          img: "./img/mj shirt 2.png",
        },
      ],
    },
  ];
  
  let choosenProduct = products[0];
  
  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
  
      //change the choosen product
      choosenProduct = products[index];
  
      //change texts of currentProduct
      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "$" + choosenProduct.price;
      currentProductImg.src = choosenProduct.colors[0].img;
  
      //assing new colors
      currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      });
    });
  });

  currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });
  
  currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });
  
  const productButton = document.querySelector(".productButton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");
  
  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });
  
  close.addEventListener("click", () => {
    payment.style.display = "none";
  });