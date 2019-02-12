console.log("we live boys");

window.onscroll = () => {
	if (window.innerWidth > 580) {
		navBarFade();
		headlineScroll();
		cookiePFade();
	} else {
		cookieP.classList.add("visible");
		cookieHead.classList.add("visible");
	}
}

const navBar = document.querySelector(".navigation-2");
const cookieP = document.querySelector(".cookie-p");
const cookieHead = document.querySelector(".cookie-head");
const bannerImage = document.querySelector(".top-background");
const headline = document.querySelector(".headline");
const dropDownNav = document.querySelector(".drop-down-nav");

let scrollBarPosition;

const cookiePFade = () => {
	if (scrollBarPosition > 450) {
		cookieP.classList.add("animate-right")
		cookieP.classList.add("visible")
		cookieHead.classList.add("animate-right")
		cookieHead.classList.add("visible")
	}
}

const navBarFade = () => {
	scrollBarPosition = window.pageYOffset;
	if (scrollBarPosition > 700) {
		navBar.classList.remove("hidden")
	} else {
		navBar.classList.add("hidden")
	}
}

const headlineScroll = () => {
	headline.style.transform = `translate(0px, -${scrollBarPosition / 3.25}%)`
	bannerImage.style.transform = `translate(0px, ${scrollBarPosition}px)`
}

dropDownNav.style.display = "none";

const navBarToggle = () => {
	if (dropDownNav.style.display === "none") {
		dropDownNav.style.display = "block"
	} else {
		dropDownNav.style.display = "none"
	}
}