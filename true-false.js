// Falsy
// 0
// ""
// undefined
// null
// NaN
// false

// Truthy
// "0", " ", [], "false"

let name = NaN;
if(name){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}