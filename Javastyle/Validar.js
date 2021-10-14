function Ingresar()
{
    var usuario="david";
    var contraseña="examen";

    if (document.frmingreso.txtusuario.value==usuario &&
        document.frmingreso.txtcontraseña.value==contraseña)
        {
            document.location="Html/Inicio.html"

        }
        else
        {
            alert("Ingrese el usuario y contraseña correctamente")
        }
}
