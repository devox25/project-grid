const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const allNavLinks = document.querySelectorAll('.nav__link');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	allNavLinks.forEach((item) => {
		item.addEventListener('click', () => {
			navBtn.classList.remove('is-active');
			navMobile.classList.remove('nav-mobile--active');
		});
	});
};

navBtn.addEventListener('click', handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerHTML = year;
};
handleCurrentYear();
