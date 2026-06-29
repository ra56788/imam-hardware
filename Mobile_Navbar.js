//Home Page Routing

const websiteTitle = document.querySelector(".main-header .website-title");
 
websiteTitle.addEventListener("click",()=> {
  window.location.href = "./index.html";
})
  

// Mobile only Navbar
const navbar = document.querySelector(".bi-list");
const mobileNavbar =  document.querySelector(".mobile-navbar");
const closeBtn = document.querySelector(".bi-x");
const overlay = document.querySelector(".overlay");

navbar.addEventListener("click",()=> {
  mobileNavbar.style.transform = "translateX(0)";
  document.body.style.overflow = "hidden";
   overlay.classList.add("active");
})

closeBtn.addEventListener("click",()=> {
  mobileNavbar.style.transform = "translateX(-100%)";
  document.body.style.overflow = "";
  overlay.classList.remove("active");
})



// mobile click

const productNavItemA = document.querySelector(".product-nav-item a");
const productNavItem = document.querySelector(".product-nav-item .nav-list");

productNavItemA.addEventListener("click", () => {
  productNavItem.classList.toggle("display");
});




// Desktop Click

const desktopProductNavItemA = document.querySelector(".desktop-product-nav-item a");
const desktopProductNavItem = document.querySelector(".desktop-product-nav-item .nav-list");

let hideMenu;

desktopProductNavItemA.addEventListener("mouseover", () => {
  clearTimeout(hideMenu);
  desktopProductNavItem.classList.add("display");
});

desktopProductNavItem.addEventListener("mouseover", () => {
  clearTimeout(hideMenu);
  desktopProductNavItem.classList.add("display");
});


// hide after 3 seconds
desktopProductNavItemA.addEventListener("mouseout", () => {
  hideMenu = setTimeout(() => {
    desktopProductNavItem.classList.remove("display");
  }, 800);
});

desktopProductNavItem.addEventListener("mouseout", () => {
  hideMenu = setTimeout(() => {
    desktopProductNavItem.classList.remove("display");
  }, 400);
});

