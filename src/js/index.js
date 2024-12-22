import '../scss/style.scss'

if (window.innerWidth < 768) {
  const swiper = new Swiper('.swiper', {
    //! Основные настройки
    direction: 'horizontal', // 'vertical', 'horizontal'
    loop: false, // true - круговой слайдер, false - слайдер с конечными положениями
    speed: 900, // скорость переключения слайдов
    effect: 'slider', // cards, coverflow, flip, fade, cube
    // initialSlide: 2, // Начинаем со 2 слайдера
    // freeMode: true, // можно перетаскивать как ленту

    slidesPerView: 'auto', // кол-во активных слайдов
    // centeredSlides: true, // центрирование слайдов

    //! Пагинация (точки)
    pagination: {
      el: '.swiper-pagination',
      clickable: true // true - Пагинация становится кликабельной
      // dynamicBullets: true, // динамические буллеты
    },

    spaceBetween: 20

    //! Автоматическое перелистывание
    // autoplay: {
    //     delay: 1000, //Задержка перед перелистыванием 1с = 1000мл/с
    // },

    // simulateTouch: true, // вкл откл перетаскивание на ПК

    // touchRadio: 1, // чувствительность свайпа

    // touchAngle: 45, // угол срабаывания свайпа/перетаскивания

    // grabCursor: true, // курсор перетаскивания
  })
}

let item = document.querySelector('.item') //блок статьи с фото
let itemText = document.querySelector('.item__text') //блок статьи
let text = itemText.querySelector('p') //текст статьии
let textButton = itemText.querySelector('.item-button') //блок кнопки читать более
let textButtonIcon = itemText.querySelector('.item-button--icon') // иконка
let textButtonText = itemText.querySelector('.item-button--text') // текст
let readMoreText = false

textButton.addEventListener('click', () => {
  if (readMoreText) {
    if (window.innerWidth < 768) {
      text.style.maxHeight = '92px'
    } else if (window.innerWidth < 1366) {
      text.style.maxHeight = '130px'
    } else {
      text.style.maxHeight = '150px'
    }
    item.style.maxHeight = '100%'
    textButtonIcon.style.transform = 'rotate(0deg)'
    textButtonText.textContent = 'Читать далее'
  } else {
    item.style.maxHeight = '100%'
    text.style.maxHeight = '100%'
    textButtonIcon.style.transform = 'rotate(-180deg)'
    textButtonText.textContent = 'Скрыть'
  }

  readMoreText = !readMoreText
})

const sliderItemsBrands = document.querySelector('.brands') // контейнер с брендами

let buttonBrands = document.querySelector('.read-more-brands') //блок кнопки
let buttonIconBrands = buttonBrands.querySelector('.read-more-button--icon') // иконка
let buttonTextBrands = buttonBrands.querySelector('.read-more-button--text') // текст
let readMoreBrands = false

buttonBrands.addEventListener('click', () => {
  if (readMoreBrands) {
    sliderItemsBrands.style.maxHeight = '162px'
    buttonIconBrands.style.transform = 'rotate(0deg)'
    buttonTextBrands.textContent = 'Показать все'
  } else {
    sliderItemsBrands.style.maxHeight = '335px'
    buttonIconBrands.style.transform = 'rotate(-180deg)'
    buttonTextBrands.textContent = 'Скрыть'
  }

  readMoreBrands = !readMoreBrands
})

const sliderItemsServices = document.querySelector('.services') // контейнер с услугами

let buttonServices = document.querySelector('.read-more-services') //блок кнопки
let buttonIconServices = buttonServices.querySelector('.read-more-button--icon') // иконка
let buttonTextServices = buttonServices.querySelector('.read-more-button--text') // текст
let readMoreServices = false

buttonServices.addEventListener('click', () => {
  if (readMoreServices) {
    sliderItemsServices.style.maxHeight = '162px'
    buttonIconServices.style.transform = 'rotate(0deg)'
    buttonTextServices.textContent = 'Показать все'
  } else {
    sliderItemsServices.style.maxHeight = '500px'
    buttonIconServices.style.transform = 'rotate(-180deg)'
    buttonTextServices.textContent = 'Скрыть'
  }

  readMoreServices = !readMoreServices
})

const contentContainer = document.querySelector('.content-container') // контейнер содержания
const menuContainer = document.querySelector('.mobile-menu-container') // контейнер меню

let buttonsBurger = document.querySelector('.icon--burger') //кнопка бергер
let burger = true
let closeMenuOutside = !!!menuContainer

buttonsBurger.addEventListener('click', () => {
  if (burger && window.innerWidth < 768) {
    contentContainer.style.opacity = '0.25'
    menuContainer.style.left = '0'
  } else if (burger && window.innerWidth < 1366) {
    contentContainer.style.opacity = '0.25'
    contentContainer.style.position = 'fixed'
    contentContainer.style.maxWidth = '100%'
    menuContainer.style.left = '0'
    closeMenuOutside = !closeMenuOutside
  }
})

let buttonsBurgerX = document.querySelector('.icon--close-burger') //кнопка бергер
let burgerX = true

buttonsBurgerX.addEventListener('click', () => {
  if (burgerX && window.innerWidth < 768) {
    contentContainer.style.opacity = '1'
    menuContainer.style.left = '-768px'
  } else if (burgerX && window.innerWidth < 1366) {
    contentContainer.style.opacity = '1'
    contentContainer.style.position = 'static'
    contentContainer.style.maxWidth = '1366px'
    menuContainer.style.left = '-768px'
    closeMenuOutside = !closeMenuOutside
  }
})

contentContainer.addEventListener(
  'click',
  () => {
    if (closeMenuOutside && window.innerWidth < 1366) {
      contentContainer.style.opacity = '1'
      contentContainer.style.position = 'static'
      contentContainer.style.maxWidth = '1366px'
      menuContainer.style.left = '-768px'
      closeMenuOutside = !closeMenuOutside
    }
  },
  true
)

const feedbackContainer = document.querySelector('.feedback-container') // контейнер фидбэк

let buttonFeedbackMenu = document.querySelector('.icon--chat-menu')
let buttonFeedback = document.querySelector('.icon--chat')
let buttonFeedbackClose = document.querySelector('.icon--close')

let buttonCallMenu = document.querySelector('.icon--call-menu')
let buttonCall = document.querySelector('.icon--call')

let feedbackTitle = document.querySelector('.feedback-header__title')
let feedbackInput = document.querySelector('.feedback-form').children

let closeFeedbackOutside = !!!feedbackContainer

buttonFeedbackMenu.addEventListener('click', () => {
  closeFeedbackOutside = !closeFeedbackOutside
  feedbackTitle.textContent = 'Обратная связь'
  feedbackInput[0].classList.remove('display-none')
  feedbackInput[2].classList.remove('display-none')
  feedbackInput[3].classList.remove('display-none')
  if (window.innerWidth < 768) {
    menuContainer.style.left = '-768px'
    feedbackContainer.style.right = '0'
  } else if (window.innerWidth < 1366) {
    contentContainer.style.position = 'fixed'
    contentContainer.style.maxWidth = '100%'
    menuContainer.style.left = '-768px'
    feedbackContainer.style.right = '0'
  } else {
    contentContainer.style.opacity = '0.25'
    menuContainer.style.opacity = '0.25'
    feedbackContainer.style.right = '0'
  }
})

buttonFeedback.addEventListener('click', () => {
  closeFeedbackOutside = !closeFeedbackOutside
  feedbackTitle.textContent = 'Обратная связь'
  feedbackInput[0].classList.remove('display-none')
  feedbackInput[2].classList.remove('display-none')
  feedbackInput[3].classList.remove('display-none')
  if (window.innerWidth < 1366) {
    contentContainer.style.opacity = '0.25'
    contentContainer.style.position = 'fixed'
    contentContainer.style.maxWidth = '100%'
    feedbackContainer.style.right = '0'
  }
})

buttonFeedbackClose.addEventListener('click', () => {
  closeFeedbackOutside = !closeFeedbackOutside
  if (window.innerWidth < 768) {
    contentContainer.style.opacity = '1'
    feedbackContainer.style.right = '-768px'
  } else if (window.innerWidth < 1366) {
    contentContainer.style.opacity = '1'
    contentContainer.style.position = 'static'
    contentContainer.style.maxWidth = '1366px'
    feedbackContainer.style.right = '-768px'
  } else {
    contentContainer.style.opacity = '1'
    menuContainer.style.opacity = '1'
    feedbackContainer.style.right = '-768px'
  }
})

buttonCallMenu.addEventListener('click', () => {
  closeFeedbackOutside = !closeFeedbackOutside
  feedbackTitle.textContent = 'Заказать звонок'
  feedbackInput[0].classList.add('display-none')
  feedbackInput[2].classList.add('display-none')
  feedbackInput[3].classList.add('display-none')
  if (window.innerWidth < 768) {
    menuContainer.style.left = '-768px'
    feedbackContainer.style.right = '0'
  } else if (window.innerWidth < 1366) {
    contentContainer.style.position = 'fixed'
    contentContainer.style.maxWidth = '100%'
    menuContainer.style.left = '-768px'
    feedbackContainer.style.right = '0'
  } else {
    contentContainer.style.opacity = '0.25'
    menuContainer.style.opacity = '0.25'
    // if (window.innerWidth > 1440) {
    //   let width = (window.innerWidth - 1440) / 2
    //   feedbackContainer.style.right = width + 'px'
    // }
    feedbackContainer.style.right = '0'
  }
})

buttonCall.addEventListener('click', () => {
  closeFeedbackOutside = !closeFeedbackOutside
  feedbackTitle.textContent = 'Заказать звонок'
  feedbackInput[0].classList.add('display-none')
  feedbackInput[2].classList.add('display-none')
  feedbackInput[3].classList.add('display-none')
  if (window.innerWidth < 1366) {
    contentContainer.style.opacity = '0.25'
    contentContainer.style.position = 'fixed'
    contentContainer.style.maxWidth = '100%'
    feedbackContainer.style.right = '0'
  }
})

contentContainer.addEventListener(
  'click',
  () => {
    if (closeFeedbackOutside && window.innerWidth > 767) {
      contentContainer.style.opacity = '1'
      menuContainer.style.opacity = '1'
      contentContainer.style.position = 'static'
      contentContainer.style.maxWidth = '1366px'
      feedbackContainer.style.right = '-768px'
      closeFeedbackOutside = !closeFeedbackOutside
    }
  },
  true
)
