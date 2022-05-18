const menuButton = document.querySelector('#menu-btn');
const menuList = document.querySelector('#menu-list')
const menuElements = document.querySelectorAll('.header__menu-list li')
menuButton.addEventListener('click', function () {
	if (menuList.classList.toggle('active') && menuButton.classList.toggle('active-btn')) {
		menuElements.forEach(function (item) {
			item.addEventListener('click', function () {
				menuList.classList.remove('active')
				menuButton.classList.remove('active-btn')
			})
		})
	}
})
