function mostrarSave() {
  const btnContainer = document.getElementById('btnContainer-bef');
  const buttonSave = document.querySelector('.button-save');
  btnContainer.style.display = 'none';
  buttonSave.style.display = 'block';
  desbloquearForm()
  
  return false;
}


function desbloquearForm() {
  const elementosBloqueados = document.querySelectorAll('.bloqueado');

    // Método da net para desabilitar o pointerEvents. 
    elementosBloqueados.forEach(elemento => {
    elemento.style.pointerEvents = 'auto';
  });
}


function retornarDivCadastro() {
  // ao contrario da outra. 
  const btnContainer = document.getElementById('btnContainer-bef');
  const buttonSave = document.querySelector('.button-save');
  const elementosBloqueados = document.querySelectorAll('.bloqueado');
  const formulario = document.getElementById('formularioRegistros');


  // Método da net para desabilitar o pointerEvents. 
  elementosBloqueados.forEach(elemento => {
    elemento.style.pointerEvents = 'none';
  });


  btnContainer.style.display = 'block';
  buttonSave.style.display = 'none';

  formulario.reset();

  return false;
}



// Documentação https://getbootstrap.com/docs/5.0/components/toasts/
function MostrarAviso() {

  let usrLogado = document.getElementById('usuarioLogado').textContent;
  let shUser = document.getElementById('mostrarUsuarioLogado');
  let ntfEsconder = document.getElementById('notificacaoum')
  var toast = new bootstrap.Toast(document.getElementById('liveToast'));

  console.log(ntfEsconder.getAttribute("style"))

  if(ntfEsconder.getAttribute("style") == 'display: none;') {
      shUser.innerText = 'Ops. Sem notificação para visualizar.';
  } else {
    shUser.innerText = 'Seja Bem-vindo(a) ' + usrLogado;
    ntfEsconder.style.display =  'none';
  }

  toast.show();



}



// Documentação do SweetAlert2 https://sweetalert2.github.io/
function confirmSubmit(action) {
  Swal.fire({
    title: 'Você tem certeza?',
    text: "Essa ação é irreversível!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, confirmar!'
  }).then((result) => {
    if (result.isConfirmed) {
      // document.getElementById("seuFormId").action = action;
      // document.getElementById("seuFormId").submit();
      Swal.fire(
        'Sucesso!',
        'O Registro foi deletado com sucesso.!',
        'success'
      )
    }
  });
}

// https://bootstrap-menu.com/detail-sidebar-nav-collapse.html
document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.sidebar .nav-link').forEach(function(element){
    
    element.addEventListener('click', function (e) {

      let nextEl = element.nextElementSibling;
      let parentEl  = element.parentElement;	

        if(nextEl) {
            e.preventDefault();	
            let mycollapse = new bootstrap.Collapse(nextEl);
            
            if(nextEl.classList.contains('show')){
              mycollapse.hide();
            } else {
                mycollapse.show();
                // find other submenus with class=show
                var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                // if it exists, then close all of them
                if(opened_submenu){
                  new bootstrap.Collapse(opened_submenu);
                }
            }
        }
    }); // addEventListener
  }) // forEach
}); 
// DOMContentLoaded  end



// Função para exibir um alert ao clicar no ícone de menu
function menu() {

  var menu = document.querySelector('.barraLateral');

  var retorno =  menu.getAttribute('style'); 
 console.log(retorno);
  if(retorno == 'display: none;'){
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
}

// Adicione um evento de clique ao ícone de menu
// var menuIcon = document.getElementById('menuIcon');
// menuIcon.addEventListener('click', mostrarAlerta);

// Ação do meunu hamburger ( fechar e abrir e mobile fechado como padrão)

let hamburgerBtn = document.getElementById('menu')
let sideBar = document.getElementById('sideBar')

if (window.matchMedia("(max-width: 767px)").matches) {
  sideBar.classList.add('closeMenu')
  sideBar.classList.add('mobileDisplay')

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.contains('mobileMenuBtn') ? hamburgerBtn.classList.remove('mobileMenuBtn') : hamburgerBtn.classList.add('mobileMenuBtn')
  })
}


hamburgerBtn.addEventListener('click', () => {
  sideBar.classList.contains('closeMenu') ? sideBar.classList.remove('closeMenu') : sideBar.classList.add('closeMenu')
})