import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('input', throttle(formInput, 500));
form.addEventListener('submit', formSubmit);

downloadPage();
getLocalStorageValue();


function formInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function formSubmit(event) {
  event.preventDefault();
  getLocalStorageValue();
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

function getLocalStorageValue() {
  const storage = localStorage.getItem(STORAGE_KEY)
  const parseStorage = JSON.parse(storage);
  const { email, message } = form.elements;
  if (storage) {
    console.log(parseStorage)
  }
  email.value = parseStorage.email
  message.value = parseStorage.message
}

function downloadPage() {
  const { email, message } = form.elements
  if (formData) {
    email.value = formData.email || ''
    message.value = formData.message || ''
  }
}