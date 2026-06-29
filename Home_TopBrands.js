const topBrands = document.querySelectorAll(".top-brands .container .box .products");
const allLi = document.querySelectorAll(".top-brands header li");
const havellsLi = document.querySelector(".top-brands header ul li:nth-child(1) a");
const cromptonLi = document.querySelector(".top-brands header ul li:nth-child(2) a");
const asianLi = document.querySelector(".top-brands header ul li:nth-child(3) a");

document.addEventListener("DOMContentLoaded", initializeSlide);

function initializeSlide() {
  havellsLi.classList.add("active");

  topBrands.forEach(topBrand => {
    topBrand.classList.remove("display-g");
  });

  topBrands[0].classList.add("display-g");  
  localStorage.setItem("index", 0);
}

havellsLi.addEventListener("click", (e) => {
  e.preventDefault();

  topBrands.forEach(topBrand => {
    topBrand.classList.remove("display-g");
  });

  topBrands[0].classList.add("display-g");

  allLi.forEach(li => {
    li.querySelector("a").classList.remove("active");
  });
  allLi[0].querySelector("a").classList.add("active");
  localStorage.setItem("index", 0);
});

cromptonLi.addEventListener("click", (e) => {
  e.preventDefault();

  topBrands.forEach(topBrand => {
    topBrand.classList.remove("display-g");
  });

  topBrands[1].classList.add("display-g");

  allLi.forEach(li => {
    li.querySelector("a").classList.remove("active");
  });
  allLi[1].querySelector("a").classList.add("active");
  localStorage.setItem("index", 1);
});

asianLi.addEventListener("click", (e) => {
  e.preventDefault();

  topBrands.forEach(topBrand => {
    topBrand.classList.remove("display-g");
  });

  topBrands[2].classList.add("display-g");

  allLi.forEach(li => {
    li.querySelector("a").classList.remove("active");
  });
  allLi[2].querySelector("a").classList.add("active");
  localStorage.setItem("index", 2);
});

   



// Image topbrandsBox By Clicking
const leftClick = document.querySelector(".top-brands .prev");
const rightClick = document.querySelector(".top-brands .next");
const topbrandsBox = document.querySelector(".top-brands .box");

let currentX0 = 0;
let currentX1 = 0;
let currentX2 = 0;

    rightClick.addEventListener("click",()=> {
      if(localStorage.getItem("index") == 0) {
        currentX0 -= topbrandsBox.clientWidth;
        console.log(currentX0);
        
        
        const maxSlide = topBrands[0].scrollWidth - topbrandsBox.clientWidth;
        console.log(maxSlide);
          
  
        if (Math.abs(currentX0) > maxSlide) {
          currentX0 = -maxSlide;
        }
        topBrands[0].style.transform = `translateX(${currentX0}px)`;
      }

      else if(localStorage.getItem("index") == 1) {
        currentX1 -= topbrandsBox.clientWidth;
        const maxSlide = topBrands[1].scrollWidth - topbrandsBox.clientWidth;  
        console.log("1 : ", maxSlide);
  
        if (Math.abs(currentX1) > maxSlide) {
          currentX1 = -maxSlide;
        }
        topBrands[1].style.transform = `translateX(${currentX1}px)`;
      }

      else if(localStorage.getItem("index") == 2) {
        currentX2 -= topbrandsBox.clientWidth;
        const maxSlide = topBrands[2].scrollWidth - topbrandsBox.clientWidth; 
        console.log("2 : ", maxSlide);
  
        if (Math.abs(currentX2) > maxSlide) {
          currentX2 = -maxSlide;
        }
        topBrands[2].style.transform = `translateX(${currentX2}px)`;
      }
    }) 

    leftClick.addEventListener("click",()=> {
      
      
      if(localStorage.getItem("index") == 0) {
        currentX0 += topbrandsBox.clientWidth;
        if (currentX0 > 0) {
          currentX0 = 0;
        }
        topBrands[0].style.transform = `translateX(${currentX0}px)`;
      }

      else if(localStorage.getItem("index") == 1) {
        currentX1 += topbrandsBox.clientWidth;
        if (currentX1 > 0) {
          currentX1 = 0;
        }
        topBrands[1].style.transform = `translateX(${currentX1}px)`;
      }

      else if(localStorage.getItem("index") == 2) {
       currentX2 += topbrandsBox.clientWidth;
        if (currentX2 > 0) {
          currentX2 = 0;
        }
        topBrands[2].style.transform = `translateX(${currentX2}px)`;
      }
    }) // left click
  

  




