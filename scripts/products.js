console.log("we live boys");

window.onscroll = () => {
	navBarFixed();
	headlineScroll();
	headerFixed();
}

const navBar = document.querySelector(".navigation");
const headline = document.querySelector(".headline");
const header = document.querySelector(".header");


let scrollBarPosition;

// const navBarFade = () => {
// 	scrollBarPosition = window.pageYOffset;
// 	if (scrollBarPosition > 30) {
// 		navBar.classList.remove("hidden")
// 	} else {
// 		navBar.classList.add("hidden")
// 	}
// }

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