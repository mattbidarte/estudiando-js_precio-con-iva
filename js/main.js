let precio = Number(prompt("Ingresá el precio sin IVA")); 

let iva = precio * 0.22;
let resultado = iva + precio;

// alert(`El precio con IVA es de: ${resultado} Y el IVA es: ${iva}`)
console.log(`El precio con IVA es de: ${resultado} Y el IVA es: ${iva}`);

document.write(`<h2 class="resultado">El precio con IVA es de: <strong>${resultado}</strong> Y el IVA es: ${iva}</h2>`);