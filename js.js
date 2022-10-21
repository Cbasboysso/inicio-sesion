var usuario;
var password;
var busuario=["seba","mati"]
var bpassword=["1234","4321"]
var busquedau;
var busquedap;
var newu;



function capturar() {
    usuario=document.getElementById("Usuario1").value;
    password=document.getElementById("password1").value;
    


if(usuario!=null)
{
    var busquedau=busuario.includes(usuario);
    var busquedap=bpassword.includes(password);
    if(busquedau==true || busquedap==true)
    {
    alert("Usuario ya registrado, intente otro por favor");
    
    } else {
        alert("Usuario no enontrado, desea Agregar uno Nuevo?");
        location.href="cargausuario.html"
            }
}
}
function cargar(){
    var busquedau=busuario.includes(usuario);
    var busquedap=bpassword.includes(password);
    if(busquedau==true && busquedap==true)
    {
    alert("Usuario ya registrado, intente otro por favor");
    
    } else {
        
    newu=document.getElementById("Nombre1").value;

    var cargaru;
    var cargarp;
cargaru=busuario.push(newu)
    alert("Usuarios Cargados " +" "+ busuario);
    alert("Seras Redirigido al index Ahora.");
    location.href="index.html"

}
}