// 1- Que al hacer submit en el form se genere un div con clase "mensaje" y se anexe dentro de #wall



// function generarDiv(){
//    let mensajeGrafiti = document.createElement('div');
//    mensajeGrafiti.classList.add('mensaje');
//    divGrafiti.appendChild(mensajeGrafiti);
// }




// 2- Si no existe, agregar un input de tipo texto al form y modificar el script para que ese texto se incluya en un párrafo adentro de cada nuevo .mensaje 

// function generarDiv(){
//     let tarjeta = document.createElement('div');
//     tarjeta.classList.add('mensaje');
//     let texto = document.getElementById('textBtn')
//     tarjeta.innerHTML = `
//         <p> ${texto.value} </p>
//     `
//     divGrafiti.appendChild(tarjeta);
//     texto.value = ""
//  }


// 2.1- Evitar que el input quede vacío.





// 3- Si no existe, agregar un input de tipo color al form y modificar el script para que el texto del nuevo .mensaje sea del color seleccionado 


// function generarDiv(){
//     let tarjeta = document.createElement('div');
//     tarjeta.classList.add('mensaje');
//     let texto = document.getElementById('textBtn')
//     let color = document.getElementById('colorBtn')
//     tarjeta.style.color = color.value;
//     tarjeta.innerHTML = `
//         <p> ${texto.value} </p>
//     `
//     divGrafiti.appendChild(tarjeta);
//     texto.value = ""
//  }



// 4- Agregar una X dentro de un span con clase "close" en cada .mensaje nuevo para agregar la funcionalidad de eliminar ese graffiti


// function generarDiv(){
//     let tarjeta = document.createElement('div');
//     tarjeta.classList.add('mensaje');

//     let texto = document.getElementById('textBtn')
    
//     let color = document.getElementById('colorBtn')
//     tarjeta.style.color = color.value;
//      tarjeta.innerHTML = `
//          <span class="close"> &times </span>
//          <p> ${texto.value} </p>        
//         `
//     divGrafiti.appendChild(tarjeta);
//     texto.value = ""
// }

// const targetDelete = document.querySelector('#wall');
// targetDelete.addEventListener('click', (event)=>{
//     if(event.target.nodeName === "SPAN"){
//         let objAEliminar = event.target.parentNode;
//         divGrafiti.removeChild(objAEliminar)
//     }
   
// })


// 5- Agregar un input de tipo checkbox al form y modificar el script para que el .mensaje tenga la clase .poster en lugar de .graffiti 


const formulario = document.querySelector('form');
const divGrafiti = document.querySelector('#wall');


const deleteAll = () => divGrafiti.innerHTML = "";
divGrafiti.addEventListener('click',(e)=>e.target.nodeName==="SPAN"?divGrafiti.removeChild(e.target.parentNode):"")


formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    generarDiv();
})

function generarDiv(){
    let tarjeta = document.createElement('div');
    let claseImpresion = document.getElementById('is-poster')
    tarjeta.classList.add(`mensaje`);
    claseImpresion.checked ? tarjeta.classList.add(`poster`) : tarjeta.classList.add(`graffiti`)
    
    
    let colorback = document.getElementById('colorBtnBack')
    claseImpresion.checked ? tarjeta.style.backgroundColor = `${colorback.value}` : "" 
  
    let texto = document.getElementById('textBtn')
    
    let color = document.getElementById('colorBtn')
    tarjeta.style.color = color.value;
    
     tarjeta.innerHTML = `
         <span class="close"> &times </span>
         <p> ${texto.value} </p>        
        `
    divGrafiti.appendChild(tarjeta);
    texto.value = ""
}









// BONUS- Al hacer submit, los inputs del formulario deben volver a los valores iniciales

