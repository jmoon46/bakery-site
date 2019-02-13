console.log("we live boys");

window.onscroll = () => {
	navBarFixed();

	if (window.innerWidth > 580) {
		headlineScroll();
		headerFixed();
	} else {
		headline.removeAttribute("style");
		header.removeAttribute("style");
	}
}

const navBar = document.querySelector(".navigation");
const headline = document.querySelector(".headline");
const header = document.querySelector(".header");
const dropDownNav = document.querySelector(".drop-down-nav");


let scrollBarPosition;

const navBarFixed = () => {
	scrollBarPosition = window.pageYOffset;
	if (scrollBarPosition >= 400) {
		navBar.classList.add("navbar-fixed")
	} else if (scrollBarPosition < 400) {
		navBar.classList.remove("navbar-fixed")
	}
}

const headlineScroll = () => {
	headline.style.transform = `translate(0px, -${scrollBarPosition / 2.4}%)`
}

const headerFixed = () => {
	header.style.transform = `translate(0px, ${scrollBarPosition}px)`
}

dropDownNav.style.display = "none";

const navBarToggle = () => {
	if (dropDownNav.style.display === "none") {
		dropDownNav.style.display = "block"
	} else {
		dropDownNav.style.display = "none"
	}
}