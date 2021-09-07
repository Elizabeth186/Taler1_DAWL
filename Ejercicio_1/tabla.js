  
function mostrar(minimo, maximo){
    return Math.floor(Math.random() * (maximo - minimo + 1)+minimo);    
} 

    
function crear_matriz() {   
        var i,j    
        
    var f = parseInt(document.getElementById('filas').value);
    var c = parseInt(document.getElementById('columnas').value);
    document.write("<table border id='write'>");
    for (i= 0; i< f; i++) {
        document.write("<tr>");
        for (j= 0; j < c; j++) {  
            document.write("<td>");
            document.write(mostrar(1, 99));
            
            document.write("</td>");
        }
        document.write("</tr>");   
    }
    document.write("</table>");
    document.getElementById("aqui");
    document.write("<button onclick='recorrer()'>Mostrar</button>")
}

function recorrer() {   
    var resume_table = document.getElementById("write");
    
    var min = 100;
    var max = 0;
    for (var i = 0, row; row = resume_table.rows[i]; i++) {
    
        for (var j = 0, col; col = row.cells[j]; j++) {
            if (parseInt(col.innerText) > max) {
                max = parseInt(col.innerText);
            }
            if (parseInt(col.innerText) < min) {
                min = parseInt(col.innerText);
            }
        }
    }

    document.write("<h5>" , 'Numero mayor: ', max , "</h5>");
    document.write("<h5>" , 'Numero menor: ', min , "</h5>");
}