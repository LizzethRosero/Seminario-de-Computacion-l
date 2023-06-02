function operaciones() {
let valorproducto,valorporcentaje,iva;
valorproducto=parseInt(document.getElementById('valorproducto').value);
valorporcentaje= parseInt( document.getElementById('valorporcentaje').value);
iva=(valorproducto*valorporcentaje)/100;


alert("El resultdo es : "+ iva )


}