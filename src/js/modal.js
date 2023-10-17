let buttonOpenMenu = document.querySelector('.nav__block--flex--start > div')
let mobileMenu = document.querySelector('.menu')
let buttonCloseMenu = document.querySelector('.header__item:first-child')
let areaCloseMenu = document.querySelector('.menu__blur-area')
let menuIsOpened = false
let body =  document.querySelector('.wrapper')

buttonOpenMenu.onclick = function(){
  mobileMenu.classList.toggle('menu--hidden')
  menuIsOpened = !menuIsOpened
  // hideBody()
  trimBody(mobileMenu,'menu--hidden')

}

buttonCloseMenu.onclick = function(){
  mobileMenu.classList.toggle('menu--hidden')
  menuIsOpened = !menuIsOpened
  // hideBody()
  trimBody(mobileMenu,'menu--hidden')
}

areaCloseMenu.onclick = function(){
  mobileMenu.classList.toggle('menu--hidden')
  menuIsOpened = !menuIsOpened
  // hideBody()
  trimBody(mobileMenu,'menu--hidden')
}

// function hideBody(){
//   if(menuIsOpened){
//     body.style.height = mobileMenu.clientHeight + "px"
//     body.style.overflow = 'hidden'
//   }
//   else{
//     body.style.height = 'auto'
//     body.style.overflow = 'auto'
//   }
// }

let feedbackModal = document.querySelector('.feedback-modal')
let callModal = document.querySelector('.call-modal')

let feedbackModalCloseButton = document.querySelector('.feedback-modal .modal__close-button')
let callModalCloseButton = document.querySelector('.call-modal .modal__close-button')

let callOpenButton = document.querySelector('.contacts__icon:nth-child(1)')
let feedOpenButton = document.querySelector('.contacts__icon:nth-child(2)')



let callModalCloseArea = document.querySelector('.call-modal .modal__blur')
let feedbackModalCloseArea = document.querySelector('.feedback-modal .modal__blur')


callOpenButton.onclick = toggleCallModal;
feedOpenButton.onclick = toggleFeedbackModal;


callModalCloseButton.onclick = toggleCallModal;
feedbackModalCloseButton.onclick = toggleFeedbackModal;

callModalCloseArea.onclick = toggleCallModal;
feedbackModalCloseArea.onclick = toggleFeedbackModal;



function toggleCallModal(){
  callModal.classList.toggle('modal--hidden')
  trimBody(callModal,'modal--hidden')
}


function toggleFeedbackModal(){
  feedbackModal.classList.toggle('modal--hidden')
  trimBody(feedbackModal,'modal--hidden')
}

function trimBody(el, className){
  if(!el.classList.contains(className)){
    body.style.height = mobileMenu.clientHeight + "px"
    body.style.overflow = 'hidden'
  }
  else{
    if(!menuIsOpened)
    {
      body.style.height = 'auto'
      body.style.overflow = 'auto'
    }

  }
}


