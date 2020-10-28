// @ts-nocheck
console.log('connected');

if (window.innerWidth < 800) {
  let temp = document.querySelectorAll('#card');
  for (let i = 0; i < 4; i++) {
    temp[i].setAttribute('class', 'row card');
    temp[i].id = '';
  }
}

// materialize
$(document).ready(function () {
  $('.dropdown-trigger').dropdown();
  $('input#input_text, textarea#textarea1').characterCounter();
  $('.sidenav').sidenav();
  $('#modal1').modal('', { dismissible: false });
  $('#login-modal').modal('', { dismissible: true });
});
