let factura = class{
    #nroFactura
    #nitoCC
    #fecha
    #valor
    #formaPago

    constructor(nroFactura, nitoCC, fecha, valor, formaPago){
        this.#nroFactura = nroFactura;
        this.#nitoCC = nitoCC;
        this.#fecha = fecha;
        this.#valor = valor;
        this.#formaPago = formaPago;
    }
        
    getNroFact(){
        return this.nroFactura;
    }
    setNroFact(nroFactura){
        this.#nroFactura = nroFactura;
    }
    
    getnitocc(){
        return this.nitoCC;
    }
    setnitOCC(nitoCC){
        this.#nitoCC = nitoCC;
    }

    getFecha(){
        return this.fecha;
    }
    setFecha(fecha){
        this.#fecha = fecha;
    }

    getValor(){
        return this.valor;
    }
    setValor(valor){
        this.#valor = valor;
    }

    getformaPago(){
        return this.formaPago;
    }
    setformaPago(formaPago){
        this.#formaPago = formaPago;
    }

    metodoDescuento(valor, formaPago){
        if(valor > 6500000 && formaPago == 1){
           console.log(valor * 0.1);
        }else{
            console.log(0);
        }
        return 0;
    }




}


let factura1 = new factura("252525", "123124", "asas", 6500000000, 1);

factura1.metodoDescuento(6500001, 1);

let cliente = {

    nitocc: "",
    nombre:" ",
    telefono:" ",
    estado: true

}


// SEGUNDO PUNTO XD
let promesa;
let valorEnvio = 0;
let precioTotal;

let propiedades = [{
    descripcion:"Garbanzos 1lb",
    precio:2000,
    cantidad: 10},
    {descripcion:"Lentejas 1lb ",
    precio:1900,
    cantidad: 30},
    {descripcion:"Arroz 1lb",
    precio:2500,
    cantidad: 25}]


const seleccionProductos = document.getElementById("seleccionProductos");

const descripcionSeleccionado = document.getElementById("descripcionSelected");



seleccionProductos.addEventListener('change',(evento) =>{
    let valorSeleccionado = evento.target.value;


    let descripcionProducto = propiedades[valorSeleccionado].descripcion;
    let precioProducto = propiedades[valorSeleccionado].precio;
    let cantidadProducto = propiedades[valorSeleccionado].cantidad;

    let aviso = document.getElementById("avisoCantidad");

    const promesa = new Promise((exito,rechazo) =>{
        if(cantidadProducto > 20){
            exito(aviso.textContent = "La cantidad en stock supera las 20 unidades");
        }else{
            rechazo("");
        }
        
    })
    


    descripcionSeleccionado.textContent = `${descripcionProducto} con un precio de ${precioProducto} y una cantidad en stock de ${cantidadProducto}`;
    
    precioTotal = precioProducto * cantidadProducto;

    return precioTotal;
})


const tipoEnvio = document.getElementById("tipoEnvio");
const tipoEnvioSelected = document.getElementById("tipoEnvioSelected");

tipoEnvio.addEventListener('change',(evento) =>{
    let valorSeleccionado = evento.target.value;
    if(valorSeleccionado == 0){
        valorEnvio = 0;
        tipoEnvioSelected.textContent = `El envío tendrá un valor de ${valorEnvio} pesos` ;
    }else{
        valorEnvio = 20000;
        tipoEnvioSelected.textContent = `El envío tendrá un valor de ${valorEnvio} pesos`;
    }
    return valorEnvio;
})


const botonCalcular = document.getElementById("btnCalcular");

botonCalcular.addEventListener('click',(evento) =>{
    let infoFinal = document.getElementById("infoFinal");
    let costoTotal= precioTotal + valorEnvio;
    infoFinal.textContent = `El valor total de su pedido es de: ${costoTotal}`;
    if(valorEnvio == 20000){
        alerta(valorEnvio);
    }
})

function alerta(valorEnvio){
    alert(`Su envío es urgente y se estará realizando lo más pronto posible`);
}




