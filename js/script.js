const menuButton = document.querySelector('#menu-btn');
const menuList = document.querySelector('#menu-list')
const menuElements = document.querySelectorAll('.header__menu-list li')

function getActiveMenu() {
	menuList.classList.toggle('active');
	menuButton.classList.toggle('active-btn');
	closeMenuByElement(getActiveMenu)
}

function closeMenuByElement(func) {
	if (func) {
		menuElements.forEach(function (item) {
			item.addEventListener('click', function () {
				menuList.classList.remove('active')
				menuButton.classList.remove('active-btn')
			})
		})
	}
}
menuButton.addEventListener('click', getActiveMenu);

/*--- Табы ---*/
const tabLinks = document.querySelectorAll('[data-tab]');
const tabBoxes = document.querySelectorAll('.benefits__tab-item');

const index = 0;

const activeLink = (num) => {
	for (let link of tabLinks) {
		link.classList.remove('active');
	}
	tabLinks[num].classList.add('active');
}
const activeTab = (num) => {
	for (let tab of tabBoxes) {
		tab.classList.remove('active');
	}
	tabBoxes[num].classList.add('active');
}

tabLinks.forEach(function (item, index) {
	item.addEventListener('click', function () {
		activeLink(index);
		activeTab(index);
	})
})

// Swiper
const sliderTeam = new Swiper('.team__slider', {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.team__slide-btn-next',
		prevEl: '.team__slide-btn-prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		425: {
			slidesPerView: 2,
		},
		769: {
			slidesPerView: 3,
		},
		1025: {
			slidesPerView: 4,
		},
	},
})

const sliderTestimonials = new Swiper('.testimonials__slider', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.testimonials__slider-btn-next',
		prevEl: '.testimonials__slider-btn-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		// буллеты
		clickable: true, // можно жать на точки
		// динамические буллеты
	},

})