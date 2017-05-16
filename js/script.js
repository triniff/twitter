//CREANDO EL EVENTO ONCLICK DEL BOTON Y LLAMANDO A LA FUNCION AGREGAR
window.onload = function (){
		document.getElementById("boton").addEventListener("click", agregar)
	}

//FUNCION AGREGAR
function agregar(){
	var tareas = document.getElementById("tarea").value; // Recuperando el texto
	document.getElementById("tarea").value = "";	// Limpiando textarea

	var cont = document.getElementById("contenedor"); // Donde imprimiremos las tareas

	//Creando nuevos nodos
	var nuevasTareas = document.createElement("div");
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement("span");

	//Asignandole padres a los nodos
	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);

	//CheckBox
	var chck = document.createElement("input");
	chck.type = "checkbox";
	chck.setAttribute("class", "check");

	var eliminar = document.createElement("span");
	eliminar.classList.add("fa", "fa-trash-o");	//icono de basurero
	var corazon = document.createElement("span");
	corazon.classList.add("fa", "fa-heart"); 	//icono de corazon

	//Asignando los nodos creados
	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(eliminar);
	nuevasTareas.appendChild(corazon);

	//Agregando Eventos
	chck.addEventListener("click", function(){
		elementoContenedor.classList.toggle("tachado");	
	})
	eliminar.addEventListener("click", function(){
		cont.removeChild(nuevasTareas);
	})

	//Creando funcion click para likes del corazon
	corazon.addEventListener("click", function(){
		corazon.classList.toggle("red");
	})

	//Validando textarea
	if (tareas == null || tareas.length == 0) {
		alert("Error! debe ingresar tarea");
		return false;
	}

}







