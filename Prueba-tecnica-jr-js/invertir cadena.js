//Invertir una cadena de arrays

let text = 'fran'
let textResult = []

//lo primero que se me ocurre

// for (let i = text.length-1; i>=0; i--){

//     textResult += text[i]; 

// }

// otra forma 

text = Array.from(text)
textResult = text.reverse()
