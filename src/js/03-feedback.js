import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(formState));
}, 500);

const loadFormState = () => {
  console.log('Load form state')
  const savedState = localStorage.getItem("feedback-form-state");
  if (savedState) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

const clearFormState = () => {
  localStorage.removeItem("feedback-form-state");
  emailInput.value = "";
  messageInput.value = "";
};

form.addEventListener("input", saveFormState);
window.addEventListener("DOMContentLoaded", loadFormState);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearFormState();
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formState);
});

