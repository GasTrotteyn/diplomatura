let lista = [];

let num1 = parseInt(prompt('ingrese el primer número'));
let num2 = parseInt(prompt('ingrese el segundo número'));
let num3 = parseInt(prompt('ingrese el tercer número'));
let num4 = parseInt(prompt('ingrese el cuarto número'));
let num5 = parseInt(prompt('ingrese el quinto número'));

lista.push(num1);
lista.push(num2);
lista.push(num3);
lista.push(num4);
lista.push(num5);

let actual = 0;
let mayor = lista[0];

for (let num of lista) {
	if (num > mayor) {
		mayor = num;
	}
}

alert('el más grande es ' + mayor);
