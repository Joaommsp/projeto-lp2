
let bannerImg = document.getElementById('bannerImg')
bannerImg.addEventListener('animationend', () => {
  bannerImg.classList.remove('bannerImgAnimation')
})

$(document).ready(function(){
  $(".slider").bxSlider({
    auto: true,
    mode: "horizontal",
    touchEnabled: false,
    controls: false,
    speed: 1000,
    pause: 5000
  });
});
$(document).ready(function(){
  $(".showroom").bxSlider({
    auto: true,
    mode: "horizontal",
    touchEnabled: false,
    controls: false,
    speed: 450
  });
});

let banner = document.getElementById('secundaryBanner')
let sliderToRemove = document.querySelector('.slider')
let divSilder = document.createElement('div')
divSilder.classList.add('slider')
let sliderImages = '<div><img src="img/banner2Mobile2.png" alt="Banner Image"  class="img-fluid"></div>' + '<div>I am another slide.</div>'
divSilder.innerHTML = sliderImages

if (window.innerWidth < 768) {
  banner.removeChild(sliderToRemove)
  banner.appendChild(divSilder)
}

// BOTÕES PARA ABRI A PÁGINA COM OS VEÍCULOS DA CATEGORIA 

let sedanBtn = document.getElementById('sedanBtn')
let mediumSedanBtn = document.getElementById('mediumSedanBtn')
let compactBtn = document.getElementById('compactBtn')
let hatchBtn = document.getElementById('hatchBtn')
let pickUpBtn = document.getElementById('pickUpBtn')
let suvBtn = document.getElementById('suvBtn')

// sedanBtn.addEventListener('click', sedanPage)
// mediumSedanBtn.addEventListener('click', mediumSedanPage)
// compactBtn.addEventListener('click', compactPage)
// hatchBtn.addEventListener('click', hatchPage)
// pickUpBtn.addEventListener('click', pickUpPage)
// suvBtn.addEventListener('click', suvPage)

//Controle POPUOP de login

let main = document.querySelector('main')
let navBar = document.getElementById('navBar')
let loginbtn = document.getElementById('loginBnt')
let popUp = document.getElementById('loginPopup')
loginbtn.addEventListener('click', () => {
  popUp.classList.remove('displayNone')
  main.classList.add('blur')
  navBar.classList.add('blur')
  main.classList.add('noPointerEvents')
  navBar.classList.add('noPointerEvents')
  blockRow()
})

let closeLogin = document.getElementById('closeLogin')
closeLogin.addEventListener('click', () => {
  popUp.classList.add('displayNone')
  main.classList.remove('blur')
  navBar.classList.remove('blur')
  main.classList.remove('noPointerEvents')
  navBar.classList.remove('noPointerEvents')
  unBlockRow()
})

function blockRow() {
  document.body.style.overflow = 'hidden'
}

function unBlockRow() {
  document.body.style.overflow = 'auto'
}

// LOGIN COM GOOGLE PARA USUARIO 

function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential)
  console.log(data)

}
window.onload = function () {
  
  google.accounts.id.initialize({
    client_id: "119707003559-1u7c4dlec2s9f34q5dlo476vkejhmdc7.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "filled_blue",
     size: "large" ,
     type:"standard",
     shape:"rectangular",
     text:"signin_with",
     size:"large",
     locale:"pt-PT",
     logo_alignment:"left"
    }  // customization attributes
  );

  google.accounts.id.prompt(); // also display the One Tap dialog
}