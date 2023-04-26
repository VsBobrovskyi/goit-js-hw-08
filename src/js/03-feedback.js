
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('textarea');

const TEXT_FORM = 'feedback-form-state';


let formData = {};

formEl.addEventListener('input', throttle(onEmailMessageSave, 500));
formEl.addEventListener('submit', onSubmit);

populateInput();

function onEmailMessageSave(evt) {

  const emailInput = formEl.elements.email.value;
  const messageInput = textareaEl.value.trim();

  formData = { email: emailInput, message: messageInput };

  localStorage.setItem(TEXT_FORM, JSON.stringify(formData));
}


function populateInput() {
  const saveInput = localStorage.getItem(TEXT_FORM);

  if (saveInput) {
    const parsSaveInput = JSON.parse(saveInput);
    textareaEl.value = parsSaveInput.message || '';
    formEl.elements.email.value = parsSaveInput.email || '';
  }
}

function onSubmit(evt) {
  evt.preventDefault();

  const saveInput = localStorage.getItem(TEXT_FORM);

  if (saveInput) {
    console.log(JSON.parse(saveInput));
  }

  localStorage.removeItem(TEXT_FORM);

  evt.currentTarget.reset();
}