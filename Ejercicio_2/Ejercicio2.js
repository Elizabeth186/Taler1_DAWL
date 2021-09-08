var registro = new Array();

function registrar_libro(){

    var libro = new Object();

    libro.id=document.getElementById('txtid').value;
    libro.titulo=document.getElementById('txttitulo').value;
    libro.nombre=document.getElementById('txtnombre').value;
    libro.apellido=document.getElementById('txtapellido').value;
    libro.categoria=document.getElementById('txtcategoria').value;
    libro.precio=document.getElementById('txtprecio').value;
    libro.imagen=document.getElementById('imagen').value;
    registro.push(libro);
    datoslibros();   
}
function datoslibros(){
    fila = "";
    for (var casilla in registro){
        
        fila+="<tr><td>"
        document.getElementById("imagen").onchange = function(e){
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function(){
                let preview = document.getElementById('preview'),
                image = document.createElement('img');
                image.src = reader.result;
                preview.innerHTML = '';
                preview.append(image);
            };
        }
        fila+="<br>"+registro[casilla].imagen;
        fila+="<tr><td>"+"Titulo: "+"<b>"+registro[casilla].titulo+"<b>"+"</td>"
        fila+="<tr><td>"+"Autor: "+registro[casilla].nombre+" "+registro[casilla].apellido+"</td>"
        fila+="<tr><td>"+"Precio: "+"$"+registro[casilla].precio+"</td><td>"
        fila+="<br></td><td>"
    }
    document.getElementById('libros').innerHTML=fila;
}