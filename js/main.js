// onload - событие загрузки страницы
window.onload = function () {

    // Прелоадер 
    setTimeout(function () {
        var preloader = document.getElementById('page-preloader');

        if (!preloader.classList.contains("done")) {
            preloader.classList.add("done"); // Если нету класса "done" у элемента, то мы его добавляем
        }
    }, 1000)

    // Кнопка прокрутки страницы вверх
    var btn = document.querySelector(".to-top");
    var wrap = document.querySelector(".wrapper");

    wrap.addEventListener('scroll', function showScroll() {
        var scroll = (wrap.scrollTop);
        if (scroll > 300) {
            btn.classList.add("top") //Добавление класса к элементу 
        } else {
            btn.classList.remove("top") //Удаление класса с элемента 
        }

    });

    // Плавная прокрутка
    document.querySelectorAll('.to-top').forEach(top => {

        top.addEventListener('click', function () {
            wrap.scroll({
                top: wrap.scrollToTop = 0,
                behavior: 'smooth'
            });
        });
    });

    //Навигация по сайту

    document.querySelectorAll('a.header__link').forEach(link => {
        link.addEventListener('click', function (ev) {
            ev.preventDefault();
            var href = link.getAttribute('href');
            burger.classList.remove('active');      //Удаление класса при нажатии на крестик
            headerMenu.classList.remove('active');
            wrap.classList.remove('no__scroll');

            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',                         //плавная прокрутка к элементу 
                block: 'start'
            })
        })
    });


    //burger menu 
    var burger = document.querySelector('.burger');
    var headerMenu = document.querySelector('.header__menu');
    var cross = document.querySelector('.cross');

    burger.onclick = function () {
        burger.classList.add('active');        //Добавление класса при нажатии на бургер меню 
        headerMenu.classList.add('active');
        wrap.classList.add('no__scroll');
    };

    cross.onclick = function () {
        burger.classList.remove('active');      //Удаление класса при нажатии на крестик
        headerMenu.classList.remove('active');
        wrap.classList.remove('no__scroll');
    };


    var linksItemTitleProduct = document.querySelector('.links-item__title-product');
    var linksItemTitleService = document.querySelector('.links-item__title-service');
    var linksItemTitleCompany = document.querySelector('.links-item__title-company');

    var linksBoxProduct = document.querySelector('.links-box-product');
    var linksBoxService = document.querySelector('.links-box-service');
    var linksBoxCompany = document.querySelector('.links-box-company');

    linksItemTitleProduct.onclick = function () {
        linksItemTitleProduct.classList.toggle('drop');
        linksBoxProduct.classList.toggle('drop');
    };

    linksItemTitleService.onclick = function () {
        linksItemTitleService.classList.toggle('drop');
        linksBoxService.classList.toggle('drop');
    };

    linksItemTitleCompany.onclick = function () {
        linksItemTitleCompany.classList.toggle('drop');
        linksBoxCompany.classList.toggle('drop');
    };

    var popup = document.querySelector('.popup');
    var popupMoreDetails = document.querySelector('.popup__more__details');
    var popupClose = document.querySelector('.popup__close');
    var popupMoreDetailsClose = document.querySelector('.popup-more-details__close');

    document.querySelectorAll('.btn__popup').forEach(popupBtn => {
        popupBtn.addEventListener('click', function () {
            popup.classList.add('popup-on');
        });
    });
    popupClose.addEventListener('click', function () {
        popup.classList.remove('popup-on');
        var fieldForm = document.querySelectorAll('.form-control');
        fieldForm.forEach(element => {
            element.value = "";
        });
    });

    document.querySelectorAll('.btn__popup__two').forEach(popupBtnTwo => {
        popupBtnTwo.addEventListener('click', function () {
            popupMoreDetails.classList.add('popup-on');
        });
    });
    popupMoreDetailsClose.addEventListener('click', function () {
        popupMoreDetails.classList.remove('popup-on');
    });

};


function clickInput(event) {
    event.style.color = '#212B31';
    event.style.borderColor = '#212B31';
    event.style.transition = '0.5s';

};
function noFocus(event) {
    event.style.color = '#72787D';
    event.style.borderColor = '#00000033';
    event.style.transition = '0.5s';

}

