
		let DeviceWidth = window.screen.width;
		let DeviceHeight = window.screen.height;
		let headerMarginTop = (String(DeviceWidth/22)) + "px";
		let headImageNegativeMargin = "-" + (String(1920 - DeviceWidth)/6) + "px";
		document.getElementsByClassName("head-img")[0].style.marginTop = headImageNegativeMargin;
		document.getElementsByTagName("header")[0].style.marginTop = headerMarginTop;

// категории

		// for (let index = 0; index < $(".category-container").length; index++) {
		// 	$(".category-container")[index].style.display = "none";
		// }
		
		for (let index = 0; index < $(".categories").length; index++) {
			$(".categories")[index].style.filter = localStorage.getItem("bright" + String(index));
			$(".category-container")[index].style.display = localStorage.getItem("displ" + String(index));
			$(".categories")[index].addEventListener('click', function() {
				if ($(".category-container")[index].style.display == "none" || $(".category-container")[index].style.display == '') {
					localStorage.setItem("displ" + String(index), "block");
					localStorage.setItem("bright" + String(index), "brightness(110%)");

					$(".categories")[index].style.filter = localStorage.getItem("bright" + String(index));
					$(".category-container")[index].style.display = localStorage.getItem("displ" + String(index));

				} else {
					localStorage.setItem("displ" + String(index), "none");
					localStorage.setItem("bright" + String(index), "brightness(100%)");

					$(".categories")[index].style.filter = localStorage.getItem("bright" + String(index));
					$(".category-container")[index].style.display = localStorage.getItem("displ" + String(index));
				}
			});
			
		}


// добавление товара в корзину

		// Получаем все кнопки добавления товара по классу "add-good-button"
const addButtons = document.getElementsByClassName("add-good-button");

// Заводим переменную для хранения артикулов товаров в корзине
let cartItems = [];

for (let index = 0; index < $(".add-good-button").length; index++) {
	$(".add-good-button")[index].addEventListener('click', function() {
		let itemArticle = $(".add-good-button")[index].getAttribute("data-article");
		if (localStorage.getItem("cartItems") == null) {
			cartItems = [];
		} else {
			cartItems = (localStorage.getItem("cartItems")).split(',');
		};
		if (jQuery.inArray(itemArticle, cartItems) == -1) {
			cartItems.push(itemArticle);
			localStorage.setItem("cartItems", cartItems);
		}
		location.reload();
	});
}

// articList и button close 

if (localStorage.getItem("cartItems") == null) {
	var articList = [];
} else {
	var articList = localStorage.getItem("cartItems").split(',');
};

if (articList[0] == "") {
	articList = articList.filter(function (letter) {
		return letter !== "";
});
}
	$(".basket-index")[0].getElementsByTagName("span")[0].textContent = articList.length;

for (let index = 0; index < $(".button-close").length; index++) {
	$(".button-close")[index].parentElement.style.display = "none";
}

$(".basket-button")[0].addEventListener('click', function() {
	document.getElementsByClassName("basket-cont")[0].style.display = "flex";
	document.body.style.overflow = "hidden";
});
$(".register-button")[0].addEventListener('click', function() {
	document.getElementsByClassName("register-cont")[0].style.display = "flex";
	document.body.style.overflow = "hidden";
});
$(".login-button")[0].addEventListener('click', function() {
	document.getElementsByClassName("login-cont")[0].style.display = "flex";
	document.body.style.overflow = "hidden";
});

for (let index = 0; index < $(".button-close").length; index++) {
	$(".button-close")[index].addEventListener('click', function() {
		$(".button-close")[index].parentElement.style.display = "none";
		document.body.style.overflow = "auto";
	});
}

if (articList.length==0) {
	document.getElementsByClassName("basket-goods-cont")[0].textContent = "Корзина пуста";
} else {
	document.getElementsByClassName("basket-goods-cont")[0].textContent = " ";
}


// создание контента корзины

var basketClearButton = document.createElement("button");
basketClearButton.className = "basket-clear";
basketClearButton.textContent = "Очистить корзину";


for (let index = 0; index < articList.length; index++) {
	if (articList[0] != "") {
		var baskOneGDCont = document.createElement("div");
		baskOneGDCont.className = "one-good-basket-cont";
		var baskOneGDCheckbox = document.createElement("div");
		baskOneGDCheckbox.appendChild(document.createElement("input"));
		baskOneGDCheckbox.appendChild(document.createElement("label"));
		baskOneGDCheckbox.getElementsByTagName("input")[0].setAttribute("type", "checkbox");
		baskOneGDCheckbox.getElementsByTagName("input")[0].setAttribute("name", String(index));
		baskOneGDCheckbox.getElementsByTagName("label")[0].setAttribute("for", String(index));
		baskOneGDCheckbox.getElementsByTagName("input")[0].className = "custom-checkbox";
	
	
	
	
		var baskOneGDName = document.createElement("div");
		baskOneGDName.textContent = "Название товара";
		var baskOneGDPhoto = (document.querySelector(`[data-article='${articList[index]}']`).parentElement.getElementsByClassName("good-photo")[0]).cloneNode();
		var baskOneGDPrice = (document.querySelector(`[data-article='${articList[index]}']`).parentElement.getElementsByClassName("good-price")[0]).cloneNode();
		baskOneGDPrice.textContent = $(".good-price")[index].textContent
		baskOneGDPhoto.style.height = "79px";
		baskOneGDPhoto.style.width = "63px";
		baskOneGDPhoto.style.borderRadius = "16px";
		var goodsAmountCont = document.createElement("div");
		goodsAmountCont.className = "cont-goods-amount";
		var goodsAmount = document.createElement("div");
		goodsAmount.className = "goods-amount";
		goodsAmount.appendChild(document.createElement("div"));
		

		goodsAmount.getElementsByTagName("div")[0].textContent = localStorage.getItem("gdsAmount" + String(articList[index]));
		var amountPlus = document.createElement("div");
		amountPlus.className = "goods-amount-plus";
		amountPlus.appendChild(document.createElement("div"));
		amountPlus.getElementsByTagName("div")[0].textContent = "+";
		var amountMinus = document.createElement("div");
		amountMinus.className = "goods-amount-minus";
		amountMinus.appendChild(document.createElement("div"));
		amountMinus.getElementsByTagName("div")[0].textContent = "-";
		
		goodsAmountCont.appendChild(amountMinus);
		goodsAmountCont.appendChild(goodsAmount);
		goodsAmountCont.appendChild(amountPlus);
	
		baskOneGDCont.appendChild(baskOneGDCheckbox);
		baskOneGDCont.appendChild(baskOneGDName);
		baskOneGDCont.appendChild(goodsAmountCont);
		baskOneGDCont.appendChild(baskOneGDPhoto);
		baskOneGDCont.appendChild(baskOneGDPrice);
	
		baskOneGDCont.setAttribute("data-bask-article", String(articList[index]));
	
		document.getElementsByClassName("basket-goods-cont")[0].appendChild(baskOneGDCont);
		document.getElementsByClassName("basket-goods-cont")[0].appendChild(basketClearButton);
	};
};

// кол-во товаров localstorage 

for (let index = 0; index < $(".goods-amount").length; index++) {
	if (	$(".goods-amount")[index].getElementsByTagName("div")[0].textContent == "") {
		$(".goods-amount")[index].getElementsByTagName("div")[0].textContent = "1";
	}
	
}

// goodsAmount.getElementsByTagName("div")[0].textContent = localStorage.getItem();
for (let index = 0; index < $(".goods-amount-plus").length; index++) {
	$(".goods-amount-plus")[index].addEventListener('click', function() {
		$(".goods-amount")[index].getElementsByTagName("div")[0].textContent = localStorage.setItem("gdsAmount" + String($(".one-good-basket-cont")[index].getAttribute("data-bask-article")), Number($(".goods-amount")[index].getElementsByTagName("div")[0].textContent)+1);
		$(".goods-amount")[index].getElementsByTagName("div")[0].textContent = localStorage.getItem("gdsAmount" + String($(".one-good-basket-cont")[index].getAttribute("data-bask-article")));
	});
}

for (let index = 0; index < $(".goods-amount-minus").length; index++) {
	$(".goods-amount-minus")[index].addEventListener('click', function() {
		if (Number($(".goods-amount")[index].getElementsByTagName("div")[0].textContent) > 1) {
			$(".goods-amount")[index].getElementsByTagName("div")[0].textContent = localStorage.setItem("gdsAmount" + String($(".one-good-basket-cont")[index].getAttribute("data-bask-article")), Number($(".goods-amount")[index].getElementsByTagName("div")[0].textContent)-1);
			$(".goods-amount")[index].getElementsByTagName("div")[0].textContent = localStorage.getItem("gdsAmount" + String($(".one-good-basket-cont")[index].getAttribute("data-bask-article")));
		}
	});
}

// удаление из корзиныч

let bsktItem = document.getElementsByClassName("basket-goods-cont")[0].getElementsByTagName("input");
let bsktItemsToDelete = [];

for (let index = 0; index < bsktItem.length; index++) {
	bsktItem[index].addEventListener('click', function() {
		if (bsktItem[index].checked == true) {
			bsktItemsToDelete.push(bsktItem[index].parentElement.parentElement.getAttribute("data-bask-article"));
		} else {
			bsktItemsToDelete = bsktItemsToDelete.filter(function (letter) {
    return letter !== bsktItem[index].parentElement.parentElement.getAttribute("data-bask-article");
		});
		}
	});
}

basketClearButton.addEventListener('click', function() {
	// localStorage.clear();
		for (let i = 0; i < bsktItemsToDelete.length; i++) {
			let r = bsktItemsToDelete[i];
			articList = articList.filter(function (letter) {
    return letter !== r;
		});
		localStorage.setItem("gdsAmount" + bsktItemsToDelete[i], 1);
		}
	localStorage.setItem("cartItems", articList);
	location.reload();
});


// for (let i = 0; i < window.localStorage.length; i++) {
// 	  console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
// }