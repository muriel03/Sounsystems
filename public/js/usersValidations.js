window.addEventListener('load', (e)=>{

    let form = document.querySelector('form');

    //Captura de eventos del form
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let password = document.querySelector('#password');
    let category = document.querySelector('#category');
    let avatar = document.querySelector('#avatar');

    //Ul de los errores 
    let ulErrors = document.querySelector('ul.is-invalid');

    form.addEventListener('submit', (e)=>{
        let errors = []

        if(name.value == ''){
            errors.push('Debe ingresar un nombre');
            name.classList.add('is-invalid');
        };
        if(email.value == ''){
            errors.push('Debes ingresar un email valido');
            email.classList.add('is-invalid');
        };
        if(password.value.length < 8){
            errors.push('Debes escribir con mas de 8 caracteres');
            password.classList.add('is-invalid');
        };
        if(password.match(/\d/) ){
            errors.push('Debes escribir una contraseña con al menos un numero');
            password.classList.add('is-invalid');
        }
        if(category.value == 'Elija una opcion'){
            errors.push('Debes seleccionar una categoria');
            category.classList.add('is-invalid');
        }
        if(avatar.value == ''){
            errors.push('Debes ingresar una imagen de perfil');
            avatar.classList.add('is-invalid');
        };

        if(errors.length > 0){
            e.preventDefault();

            ulErrors.innerHTML = '';

            errors.forEach(error => {
                ulErrors.innerHTML += '<li>' + error + '</li>'
            })
        }else{
            alert('Usuario registrado satisfactoriamente');
        }
    })


})