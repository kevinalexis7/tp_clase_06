let electrodomesticos = ['lavarropas', 'secarropas', 'heladera', 'microondas', 'pava electrica', 'aspiradora']

function punto1(indice){
    return electrodomesticos[indice]
}console.log(punto1(1))

function punto2(){
    let primerProducto = electrodomesticos.shift()
    electrodomesticos.push(primerProducto)
    return electrodomesticos
}//console.log(punto2());

function punto3() {
    electrodomesticos.push('cafetera', 'licuadora')
    return electrodomesticos
}//console.log(punto3())

function punto4(){
   let cuantosElementos = electrodomesticos.length 
   return cuantosElementos
}//console.log(punto4())

function punto5(elementoBuscado){
    return electrodomesticos.includes(elementoBuscado) ? '"Producto encontrado"' : '"El producto buscado no existe"'
}//console.log(punto5())

function punto6(){
    let lista = electrodomesticos.join(" ")
    return lista
}//console.log(punto6())

function punto7(callback) {
    let Lista = callback.length
    return Lista    
}//console.log(punto7(punto6()));

function punto8(callback) {
    let reemplazado = 'pava electrica';
    let reemplazo = 'cafetera';
    return callback.replace(reemplazado, reemplazo)
}//console.log(punto8(punto6()));

function punto9(callback){
    return callback.split(' ');
}//console.log(punto9(punto8(punto6())));