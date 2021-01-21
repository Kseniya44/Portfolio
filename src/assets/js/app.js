console.log('file 1');

const menuItem = document.querySelector(".nav__item_has_sub-nav");
const subNav = document.querySelector(".sub-nav");
menuItem.addEventListener("mouseover", () => {
    subNav.classList.add("show-sub-nav");
});
menuItem.addEventListener("mouseout", () => {
    subNav.classList.remove("show-sub-nav");
});
