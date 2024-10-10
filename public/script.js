const form = document.getElementById('loginForm')

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const formData = new FormData(form)
    const formObject = {}
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    const { user, password,  rememberMe } = formObject;

    console.log({user,  password, rememberMe})

    console.log(`Usuario: ${user}, Contraseña: ${password}, Recordarme: ${rememberMe}`)
})