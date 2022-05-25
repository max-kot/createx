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

/*--- IMG to SVG ---*/
$('img.img-svg').each(function () {
	var $img = $(this);
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');
	$.get(imgURL, function (data) {
		var $svg = $(data).find('svg');
		if (typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass + ' replaced-svg');
		}
		$svg = $svg.removeAttr('xmlns:a');
		if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
			$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
		}
		$img.replaceWith($svg);
	}, 'xml');
});

