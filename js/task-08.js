const formEl = document.querySelector(".login-form");

const handleFormSubmit = (event) => {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    alert("Внимание! Все поля формы должны быть заполнены!");
  } else {
    const userData = {
      email,
      password,
    };
    console.log(userData);
    formEl.reset();
  }
};

formEl.addEventListener("submit", handleFormSubmit);
