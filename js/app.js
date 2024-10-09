const data = [
    {
        id: 1,
        image: "./assets/images/korzinka.svg",
        brand: "korzinka.uz",
        title: "В четверг скидки на рыбу",
        discounts: "Скидки",
        brandUrl: "https://korzinka.uz",
        cashBack: {
            label: "Кешбэк",
            value: "3%"
        },
        category: "Супермаркеты"
    },
    {
        id: 2,
        image: "./assets/images/texnomart.svg",
        brand: "TEXNOMART",
        brandUrl: "https://texnomart.uz",
        title: "До — 60% на бытовую технику в ТЦ «Samarkand Darvoza»",
        discounts: "Скидки",
        cashBack: {
            label: "Кешбэк",
            value: "3%"
        },
        category: "Магазины электроники и бытовой техники"
    },
    {
        id: 3,
        image: "./assets/images/mango.png",
        brand: "MANGo",
        brandUrl: "https://shop.mango.com/",
        title: "Акция 1+1",
        discounts: "Акции",
        cashBack: {
            label: "Кешбэк",
            value: "3%"
        },
        category: "Магазины брендовой одежды"
    },
    {
        id: 4,
        image: "./assets/images/makro.svg",
        brand: "makro",
        brandUrl: "https://makromarket.uz/",
        title: "При покупке CIF пачка губок Salixan БЕСПЛАТНО",
        discounts: "Акции",
        cashBack: {
            label: "Кешбэк",
            value: "3%"
        },
        category: "Супермаркеты"
    },
];

function renderCards() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
    data.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('aside_card');
        cardElement.innerHTML = `
            <a href="${card.brandUrl}" target="_blank">
            <img src="${card.image}" alt="${card.brand}" class="aside_card_img">
            </a>
            <div class="aside_card_brand">
             <a href="${card.brandUrl}" target="_blank">${card.brand}</a>
             </div>
            <div class="aside_card_title title">
             <a href="${card.brandUrl}" target="_blank">${card.title}</a>
            </div>
            <div class="d-center">
                <div class="text aside_card_text">${card.discounts}</div>
                <div class="cash-back">
                    <div>${card.cashBack.label}</div>
                    <div>${card.cashBack.value}</div>
                </div>
            </div>
            <div class="text card_text">${card.category}</div>
        `;
        cardContainer.appendChild(cardElement);
    });
}
renderCards()

const buttons = document.querySelectorAll('.bredcrams button')
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'))
        this.classList.add('active')
    });
});




const mainData = [
    {
        id: 1,
        image: "./assets/images/gosty.png",
        brand: "Gosty",
        title: "Каждый вторник — 20% на все меню",
        discounts: "Скидки",
        brandUrl: "https://korzinka.uz",
        cashBack: {
            label: "Кешбэк",
            value: "3%"
        },
        category: "Рестораны"
    },
    {
        id: 2,
        image: "./assets/images/shosh.svg",
        brand: "Shosh",
        brandUrl: "https://texnomart.uz",
        title: "Скидки на еду и напитки",
        discounts: "Скидки",
        cashBack: {
            label: "Кешбэк",
            value: "3%"
        },
        category:"Кафе"
    },
    {
        id: 3,
        image: "./assets/images/petro.svg",
        brand: "Petrovich",
        brandUrl: "https://makromarket.uz/",
        title: "Ланч по выгодной цене и 2% кешбэк по промокоду",
        discounts: "Скидки",
        cashBack: {
            label: "Кешбэк",
            value: "3%"
        },
        category: "Рестораны"
    },

    {
        id: 4,
        image: "./assets/images/shosh.svg",
        brand: "Shosh",
        brandUrl: "https://texnomart.uz",
        title: "Скидки на еду и напитки",
        discounts: "Скидки",
        cashBack: {
            label: "Кешбэк",
            value: "3%"
        },
        category:"Кафе"
    },
    {
        id: 5,
        image: "./assets/images/petro.svg",
        brand: "Petrovich",
        brandUrl: "https://makromarket.uz/",
        title: "Ланч по выгодной цене и 2% кешбэк по промокоду",
        discounts: "Скидки",
        cashBack: {
            label: "Кешбэк",
            value: "3%"
        },
        category: "Рестораны"
    },
]


function renderMain() {
    const cardContainer = document.querySelector('.splide__list');
    cardContainer.innerHTML = '';
    mainData.forEach(card => {
        const cardElement = document.createElement('li');
        cardElement.classList.add('splide__slide');
        cardElement.innerHTML = `
            <div class="aside_card main_cards">
                <a href="${card.brandUrl}" target="_blank">
                    <img src="${card.image}" alt="${card.brand}" class="aside_card_img">
                </a>
                <div class="aside_card_brand">
                    <a href="${card.brandUrl}" target="_blank">${card.brand}</a>
                </div>
                <div class="aside_card_title title">
                    <a href="${card.brandUrl}" target="_blank">${card.title}</a>
                </div>
                <div class="d-center mt-a">
                    <div class="text aside_card_text">${card.discounts}</div>
                    <div class="cash-back">
                        <div>${card.cashBack.label}</div>
                        <div>${card.cashBack.value}</div>
                    </div>
                </div>
                <div class="text card_text">${card.category}</div>
            </div>
        `;
        cardContainer.appendChild(cardElement);
    })
    new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        pagination: true,
        autoplay: true,
        interval: 2000,
        arrows: true,
        breakpoints: {
        640: {
            perPage: 1.3,
        },
        460: {
            perPage: 1,
        },
    },
    }).mount()
}

renderMain();




const faqBoxes = document.querySelectorAll('.faq_box')
faqBoxes.forEach(faqBox => {
    const clickableArea = faqBox.querySelector('#faq_box')
    clickableArea.addEventListener('click', () => {
        if (faqBox.classList.contains('active')) {
            faqBox.classList.remove('active');
        } else {
            faqBoxes.forEach(box => box.classList.remove('active'))
            faqBox.classList.add('active')
        }
    })
})


const toggleNav = document.getElementById('toggle-nav');
const mobileNav = document.getElementById('mobile-nav');
const closeNav = document.getElementById('close-nav');

toggleNav.addEventListener('click', () => {
    mobileNav.classList.toggle('active'); // "active" klassini o'zgartirish
});

closeNav.addEventListener('click', () => {
    mobileNav.classList.remove('active'); // Oynani yopish
});
