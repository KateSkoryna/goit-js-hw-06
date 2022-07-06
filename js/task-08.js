const form = document.querySelector('.login-form');

const sendTheForm = event => {
    event.preventDefault();
    const { email, password } = event.currentTarget;
    
    email.value === "" || password.value === "" ? alert("Please fill in all the fields!") :
    console.log({ email: `${email.value}`, password: `${password.value}` })
    
    event.currentTarget.reset();
}

form.addEventListener("submit", sendTheForm);