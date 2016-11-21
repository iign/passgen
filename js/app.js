/* global localStorage */

var PASS = {}
if (localStorage.getItem('length')) {
  PASS.length = localStorage.getItem('length')
} else {
  PASS.length = 32
}

document.title = generatePassword()

var range = document.getElementById('range')
range.value = PASS.length
document.getElementById('length').textContent = PASS.length

range.oninput = function (event) {
  document.getElementById('length').textContent = event.target.value
  PASS.length = event.target.value
  localStorage.setItem('length', PASS.length)
}

function generatePassword () {
  var length = PASS.length
  var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  var retVal = ''

  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n))
  }

  return retVal
}

var btn = document.getElementById('btn-generate')
btn.onclick = function () {
  var pass = generatePassword()
  var input = document.getElementById('input')
  input.value = pass
  input.focus()
  input.select()
}

var btnOptions = document.getElementById('btn-options')
btnOptions.onclick = function () {
  var panel = document.getElementById('panel-options')
  panel.classList.toggle('active')
}

var btnModal = document.getElementById('js-btn-modal')
btnModal.onclick = function () {
  document.getElementById('body').classList.toggle('modal--active')
}
