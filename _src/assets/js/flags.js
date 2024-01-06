
const flags = (function(){
	function hasTouchScreen() {
		const checkForTouchScreen = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
		return  checkForTouchScreen ? '--hasTouchScreen' : '';
	}

	function init(el) {
		const getFlags = hasTouchScreen();
		getFlags && el.classList.add(getFlags);
	}


	return {
		init
	}
})();


window.addEventListener('load', () => {
	const lemon = document.querySelector('.js__lemon');

	lemon && flags.init(lemon);
})
