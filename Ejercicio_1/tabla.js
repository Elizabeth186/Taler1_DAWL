function aleatorio(minimo, maximo){
    return Math.floor(Math.random() * (maximo - minimo + 1)+minimo);
} 
for (i = 0; i <=100 ; ++i) {
 
function generando() {   
    var i,j    
    
var F =  parseInt(document.getElementById('filas').value);
var c = parseInt(document.getElementById('columnas').value);
res = Math.floor((Math.random()*(99+1)));
document.write("<table border>");
for (i= 0; i< F; i++) {
    document.write("<tr>");
    for (j= 0; j < c; j++) {  
        document.write("<td>");
        document.write(aleatorio(1, 99));
        
        document.write("</td>");

    }
    document.write("</tr>");
}

document.write("</table>");
document.getElementById('dato').innerHTML = aleatorio;
}
} 

    


