console.log("we live boys");

window.onscroll = () => {
	navBarFade();
	cookiePFade();
	headlineScroll();
}

const navBar = document.querySelector(".navigation-2");

const cookieP = document.querySelector(".cookie-p");

const cookieHead = document.querySelector(".cookie-head");

let scrollBarPosition;

const navBarFade = () => {
	scrollBarPosition = window.pageYOffset;
	if (scrollBarPosition > 700) {
		navBar.classList.remove("hidden")
	} else {
		navBar.classList.add("hidden")
	}
}

const cookiePFade = () => {
	if (scrollBarPosition > 450) {
		cookieP.classList.add("animate-right")
		cookieP.classList.add("visible")
		cookieHead.classList.add("animate-right")
		cookieHead.classList.add("visible")
	}
}

const headlineScroll = () => {
	document.querySelector(".headline").style.transform = `translate(0px, ${scrollBarPosition / 1.55}%)`
}