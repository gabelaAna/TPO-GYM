var apellido = document.getElementById('validationCustom01');
var nombre = document.getElementById('validationCustom02');
var email = document.getElementById('validationCustomUsername');
var funcional=document.getElementById('inlineCheckbox1');
var stretching=document.getElementById('inlineCheckbox2');
var musculacion=document.getElementById('inlineCheckbox3')

function enviarFormulario (){
    
    if(apellido.value === null || apellido.value==='') {
        
        alert('Ingrese el apellido')
    }

    if(nombre.value=== null || nombre.value===''){
        
        alert('Ingrese el nombre')
    }
    
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.test(email.value)){
		alert('E - mail invalido');
	}
	
	if(!funcional.checked && !stretching.checked && !musculacion.checked ){
        alert('Por favor ingresa alguna actividad que te pareció interesante...')
    }
  
    
    return false;
}