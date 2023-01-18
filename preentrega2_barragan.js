//PRE-ENTREGA 2: Proyecto de tienda de e-commerce de artículos de decoración. Todavía los artículos tienen un nombre genérico.
//Hecho por Gonzalo Matías Barragan de la comisión JS45360.

alert(`Bienvenido a DecoManiax!\nLa tienda virtual con las mejores opciones para decorar tu casa.`)

let lista_productos = [];
let cantidad_total = 0;
let venta_total = 0;
let cantidad = 0;
let carrito;

//Clase para crear los Productos como OBJETOS
class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.cantidad = 0;
        this.monto = 0;
        this.cantidad_restart = this.stock;
    }

    product_added(cantidad){
        if(this.stock < cantidad){
            alert(`No hay stock suficiente de ${this.nombre}`);
        }
        else{
            this.cantidad = this.cantidad + cantidad;
            this.stock = this.stock - cantidad;
            alert(`Se ha agregado ${this.nombre} al carrito!\nCantidad agregada: ${this.cantidad}\nStock remanente: ${this.stock}`);
            venta_total = lista_productos.reduce(calcular_monto_total, 0);
            cantidad_total = lista_productos.reduce(calcular_cantidad_total, 0);
        }
    }
}

//Declaro los productos como objetos y les hago push al ARRAY
let producto_a = new Producto("Producto A", 1000, 25);
let producto_b = new Producto("Producto B", 1200, 30);
let producto_c = new Producto("Producto C", 1500, 35);
let producto_d = new Producto("Producto D", 1800, 40);
let producto_e = new Producto("Producto E", 2100, 45);
lista_productos.push(producto_a, producto_b, producto_c, producto_d, producto_e);

//Esta funcion borra todos los datos del carrito y vuelve todos los valores al inicio de la compra.
function restart(){

    for(let cantidad_cero of lista_productos){
        cantidad_cero.cantidad = 0;
        cantidad_cero.stock = cantidad_cero.cantidad_restart;
    }
    venta_total = lista_productos.reduce(calcular_monto_total, 0);
    cantidad_total = lista_productos.reduce(calcular_cantidad_total, 0);
}

//FUNCIONES REDUCE PARA CALCULAR CANTIDAD Y MONTO TOTAL
function calcular_monto_total (acu_monto, producto){

    acu_monto = acu_monto + (producto.cantidad * producto.precio);
    return acu_monto
}

function calcular_cantidad_total (acu_cantidad, producto){

    acu_cantidad = acu_cantidad + producto.cantidad;
    return acu_cantidad
}

//Esta función calcula el monto de cada cuota con recargo en base a la selección de las cuotas a pagar.
function pago_cuotas(total, cuotas){
    const recargo_3 = 1.05;
    const recargo_6 = 1.1;
    const recargo_12 = 1.15;
    while(cuotas != 1 && cuotas != 3 && cuotas != 6 && cuotas != 12){
        alert(`Seleccion errónea. Verifique su selección.`);
        cuotas = parseInt(prompt(`Seleccione la cantidad de cuotas:\n1. Un pago (sin recargo)\n3. 3 cuotas (5% de recargo)\n6. 6 cuotas (10% de recargo)\n12. 12 cuotas (15% de recargo)`));
    }

    switch(cuotas){
        case 1:
            alert(`Diríjase a la caja para realizar el pago de $${total.toFixed(2)}.\nGracias por su compra!`);
            break;
        case 3:
            alert(`Diríjase a la caja para realizar el pago de la cuota 1/${cuotas} de $${((total*recargo_3) / cuotas).toFixed(2)}.\nGracias por su compra!`);
            break;
        case 6:
            alert(`Diríjase a la caja para realizar el pago de la cuota 1/${cuotas} de $${((total*recargo_6) / cuotas).toFixed(2)}.\nGracias por su compra!`);
            break;  
        case 12:
            alert(`Diríjase a la caja para realizar el pago de la cuota 1/${cuotas} de $${((total*recargo_12) / cuotas).toFixed(2)}.\nGracias por su compra!`);
            break;  
    }
}


//Aquí comienza el proceso de compra seleccionando los artículos, en los cuales se va sumando tanto la cantidad como el precio total.
let entrada = Number(prompt(`Seleccione los productos para ir agregando al carrito: \n 1. ${producto_a.nombre}: $${producto_a.precio} - Stock remanente: ${producto_a.stock}\n 2. ${producto_b.nombre}: $${producto_b.precio} - Stock remanente: ${producto_b.stock}\n 3. ${producto_c.nombre}: $${producto_c.precio} - Stock remanente: ${producto_c.stock}\n 4. ${producto_d.nombre}: $${producto_d.precio} - Stock remanente: ${producto_d.stock}\n 5. ${producto_e.nombre}: $${producto_e.precio} - Stock remanente: ${producto_e.stock}\n 0. Salir`));

while(entrada != 0){
 switch(entrada){
    case 1:
        cantidad = Number(prompt(`Ingrese la cantidad de ${producto_a.nombre} a ingresar en el carrito:`));
        producto_a.product_added(cantidad);
        alert(`Vista previa del carrito:\nCantidad de productos agregados: ${cantidad_total} \nSubtotal: $${venta_total}`);
        break;
    case 2:
        cantidad = Number(prompt(`Ingrese la cantidad de ${producto_b.nombre} a ingresar en el carrito:`));
        producto_b.product_added(cantidad);
        alert(`Vista previa del carrito:\nCantidad de productos agregados: ${cantidad_total} \nSubtotal: $${venta_total}`);
        break;
    case 3:
        cantidad = Number(prompt(`Ingrese la cantidad de ${producto_c.nombre} a ingresar en el carrito:`));
        producto_c.product_added(cantidad);
        alert(`Vista previa del carrito:\nCantidad de productos agregados: ${cantidad_total} \nSubtotal: $${venta_total}`);
        break;
    case 4:
        cantidad = Number(prompt(`Ingrese la cantidad de ${producto_d.nombre} a ingresar en el carrito:`));
        producto_d.product_added(cantidad);
        alert(`Vista previa del carrito:\nCantidad de productos agregados: ${cantidad_total} \nSubtotal: $${venta_total}`);
        break;
    case 5:
        cantidad = Number(prompt(`Ingrese la cantidad de ${producto_e.nombre} a ingresar en el carrito:`));
        producto_e.product_added(cantidad);
        alert(`Vista previa del carrito:\nCantidad de productos agregados: ${cantidad_total} \nSubtotal: $${venta_total}`);
        break;
    case 9:
        restart();
        alert(`Se ha eliminado su selección. Ya puede comenzar de nuevo con el proceso de compra.\nCantidad de productos agregados: ${cantidad_total}\nSubtotal: $${venta_total}`);
        break;     
    default:
        alert("Selección errónea");
        break;
    }
    entrada = Number(prompt(`Seleccione los productos para ir agregando al carrito: \n 1. ${producto_a.nombre}: $${producto_a.precio} - Stock remanente: ${producto_a.stock}\n 2. ${producto_b.nombre}: $${producto_b.precio} - Stock remanente: ${producto_b.stock}\n 3. ${producto_c.nombre}: $${producto_c.precio} - Stock remanente: ${producto_c.stock}\n 4. ${producto_d.nombre}: $${producto_d.precio} - Stock remanente: ${producto_d.stock}\n 5. ${producto_e.nombre}: $${producto_e.precio} - Stock remanente: ${producto_e.stock}\n 9. Volver a comenzar \n 0. Proceder al pago`));
}

//Aquí comienza el proceso de pago.

if(venta_total == 0){
alert(`Usted no ha seleccionado ningún producto. Hasta la próxima!`);
}

else if(venta_total > 0){
    alert(`Resumen de su compra:\nTotal de productos: ${cantidad_total}\n\nDetalle:\n${producto_a.nombre}: ${producto_a.cantidad}\n${producto_b.nombre}: ${producto_b.cantidad}\n${producto_c.nombre}: ${producto_c.cantidad}\n${producto_d.nombre}: ${producto_d.cantidad}\n${producto_e.nombre}: ${producto_e.cantidad}\n\nTotal a pagar: $${venta_total}`);
    let cuotas = parseInt(prompt(`Seleccione la modalidad de pago:\n1. Un pago (sin recargo)\n3. 3 cuotas (5% de recargo)\n6. 6 cuotas (10% de recargo)\n12. 12 cuotas (15% de recargo)`))
    pago_cuotas(venta_total, cuotas);
}

//Le agregué un último else, por las dudas, aunque según mi lógica no se puede llegar hasta esta condición:
else{
    alert(`Ha ocurrido un error! Lo que demuestra que somos humanos :) \n Intente refrescar la página, lo sentimos!`);
}
