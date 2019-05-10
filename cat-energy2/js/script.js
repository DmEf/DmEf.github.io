
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');

navToggle.addEventListener('click', function() {
	if (navToggle.classList.contains('page-header__toggle--open')) {
		navToggle.classList.remove('page-header__toggle--open');
		navToggle.classList.add('page-header__toggle--close');
		navMain.classList.add('main-nav--open');
	} else {
			navToggle.classList.add('page-header__toggle--open');
			navToggle.classList.remove('page-header__toggle--close');
			navMain.classList.remove('main-nav--open');
		}
				});
			
		