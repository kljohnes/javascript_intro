// Let Const Var .... others
let x = 5 // Let will expose the variable to its scope and inner scopes
const favNum = 42 //const can't be reassigned
//favNum = 50

var z = 10 // For now these are =
y = 5 // and should I say equally bad

x = 9 // x is being reassigned <= This is fine

// Scope
if (true){ // This is a code block
    let x = 8 // x in here is not the x on line 2
    console.log(x)
}
console.log(x)

for (let i = 0; i < 10; i++){
    console.log(i)
}
// console.log(i) // I has been garbage collected

for (var j = 0; j < 10; j++){
    console.log(j)
}