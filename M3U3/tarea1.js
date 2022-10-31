let distancia = parseInt(prompt('¿A qué distancia estás?'))
if (distancia < 1000) {
	alert('podés ir caminando')
} else if (distancia < 10000) {
	alert('podrías ir en bici')
} else if (distancia < 30000) {
	alert('mejor tomate un bondi')
} else if (distancia < 100000) {
	alert(' acá te conviene ir en auto')
} else {
	alert('es muy lejos, hay que ir en avión')
}
