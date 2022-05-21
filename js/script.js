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
const tabs = document.querySelectorAll('.benefits__tab-item');

tabLinks.forEach(function (item) {
	const link = item;
	item.addEventListener('click', function () {

		tabs.forEach(function (item) {
			item.classList.add('hidden')

		})
		const tabId = this.dataset.tab;
		const tab = document.querySelector('#' + tabId);
		if (tab.classList.remove('hidden')) {
			link.classList.add('active')
		}
	})
})


