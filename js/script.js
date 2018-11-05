// Nav
let navMenu = document.querySelector('.nav-menu');
let selectElement;

window.onclick = function(event) {
  var target   = event.target;

  if (!target.parentNode.classList.contains('nav-menu_item')) {
    document.querySelectorAll('.show').forEach( element => {
      element.classList.remove('show');
    })
    return
  };

  highlight(target);
};

function highlight(node) {
  if (selectElement) {
    selectElement.parentNode.classList.remove('show');
  }
  selectElement = node;
  selectElement.parentNode.classList.add('show');
}

// Modal

let closeModal      = document.querySelector('.modal-close');
let showModal       = document.querySelector('.modal-show');
let showModalMobile = document.querySelector('.modal-show_mob');
var modal           = document.querySelector('.modal');

showModal.onclick = function() {
  modal.classList.add('active');
}
showModalMobile.onclick = function() {
  modal.classList.add('active');
}

closeModal.onclick = function() {
  modal.classList.remove('active');
}


