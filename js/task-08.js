const form = document.querySelector('.login-form');

const sendTheForm = event => {
    event.preventDefault();
  
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    email === "" || password === "" ? alert("Please fill in all the fields!") :
    console.log({ email, password })
    
    event.currentTarget.reset();
}

form.addEventListener("submit", sendTheForm);

// const ref = {
//     form: document.querySelector(".login-form")
// }
// ref.form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     const email = evt.target.email.value;
//     const password = evt.target.password.value;
//     console.log(email === "" || password === "" ? alert("Заполните все поля!") : { email, password });
//     ref.form.reset()
// }

