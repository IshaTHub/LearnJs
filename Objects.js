let menu = {
	width: 200,
	height: 300,
	title: "My menu",
};

function multiplyNumeric(menu) {
	for (let key in menu) {
		if (typeof menu[key] === "number") {
			menu[key] = menu[key] * 2;
		}
	}
	return menu;
}
let newMenu = multiplyNumeric(menu);
console.log(newMenu);