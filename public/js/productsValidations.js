window.addEventListener("load", (e)=>{

    let form = document.querySelector('form');

    //Capturamos los eventos de los formularios
    let name = document.querySelector('#name');
    let description = document.querySelector('#description');
    let image = document.querySelector('#productImg');
    let brand = document.querySelector('#brand');
    let category = document.querySelector('#category');
    let price = document.querySelector('#price');

    //Errores de cada evento
    let nameError = document.querySelector('#nameError');
    let priceError = document.querySelector('#priceError');
    let descriptionError = document.querySelector('#descriptionError');

    //Ul para guardar los errores
    let ulErrors = document.querySelector('ul.is-invalid');

    
    //Eventos on Time
    name.addEventListener('blur', (e)=>{
        nameError.innerHTML = '';
        if(name.value == ''){
            nameError.innerHTML += "Ingresa el nombre del producto"
        }else{
            nameError.innerHTML = '';
        }
    });

    description.addEventListener('blur', (e)=>{
        descriptionError.innerHTML = '';
        if(description.value == ''){
            descriptionError.innerHTML += "Ingresa una descripcion de tu producto"
        }else{
            descriptionError.innerHTML = ''
        }
    });

    price.addEventListener('blur', (e)=>{
        priceError.innerHTML = ''
        if(price.value == ''){
            priceError.innerHTML += 'Debes ingresar el precio del producto';
        }else{
            priceError.innerHTML = '';
        }
    });

    image.addEventListener('change', ()=>{
        let filename = image.value;
        let fileExtension = filename.split('.');
        let extension = fileExtension[fileExtension.length - 1];
        let acceptedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

        

    })
    
    //Errors Submit
    form.addEventListener('submit', (e)=>{
        let errors = [];

        if(name.value == ''){
            errors.push('Ingresa el nombre del producto');
            name.classList.add('is-invalid');
        };
        if(description.value == ''){
            errors.push('Ingresa una descripcion con minimo 20 caracteres');
            description.classList.add('is-invalid');
        };
        if(image.value == ''){
            errors.push('Ingresa una imagen con una extension valida');
            image.classList.add('is-invalid');
        }
        if(brand.value == ''){
            errors.push('Debes seleccionar una marca');
            brand.classList.add('is-invalid');
        }
        if(category.value == ''){
            errors.push('Debes seleccionar una categoria para el producto');
            brand.classList.add('is-invalid');
        }
        if(price.value == ''){
            errors.push('Ingresa un precio');
            price.classList.add('is-invalid');
        }

        if(errors.length > 0){
            e.preventDefault();

            ulErrors.innerHTML = '';

            errors.forEach(error => {
                ulErrors.innerHTML += '<li>' + error + '</li>'
            })
        }else{
            alert('Se guardo el producto satisfactoriamente');
        }

    })

})