import fs from 'node:fs/promises';
import path from 'node:path';
//import {appendFile} from 'node:appendFile/promises';
import chalk from 'chalk';

let elemento1 = process.argv[2];
let elemento2 = process.argv[3];
let elemento3 = process.argv[4];
let elemento4 = process.argv[5];

let archivo = 'incidencias.txt';

const rutaArchivo = '/home/mari/Desktop/ExamenNodeJS/examen RA1/examen-nodejs';
try{
	let rutaAbsoluta = path.join(rutaArchivo, archivo);
	
	//Agregar me funciona
	if(elemento1 == 'agregar'){
		let argumentos = process.argv.length;
		
		let unionElementos = elemento2 + ';' + elemento3 + ';' + elemento4 + '\n';
	
		const resultado = await fs.appendFile(rutaAbsoluta, unionElementos);
		
		console.log(chalk.green('Se ha podido añadir correctamente la siguiente línea: ' + resultado));
		
	//Listar me funciona
	}else if(elemento1 == 'listar'){
		const resultadoListar = await fs.readFile(rutaAbsoluta, 'utf-8');
		
		console.log(resultadoListar + '\n');
		
		console.log('Se ha podido listar correctamente el contenido del archivo');
		
	//Buscar me funciona
	}else if(elemento1 == 'buscar'){
		
		const resultadoListar = await fs.readFile(rutaAbsoluta, 'utf-8');
		
		console.log(resultadoListar + '\n');
		
		console.log('Se ha podido listar correctamente el contenido del archivo');
			
		let array = resultadoListar.split(';');
			
		if(array[0] == elemento2){
			console.log('Coincide la id del fichero con la posición 0');
		}else{
			console.log('No coincide la id del fichero con la posición');
		}
		

	}else if(elemento1 == 'filtrar'){
		
		const resultadoListar = await fs.readFile(rutaAbsoluta, 'utf-8');
		
		console.log(resultadoListar + '\n');
		
		console.log('Se ha podido listar correctamente el contenido del archivo');
		let resultado = resultadoListar;
		
		let array = resultado.split(';');
		
		// No entra en el bucle
		for(i= 0; i<= array.length; i++){
			if(array[i] == elemento2){
				console.log('Coincide el elemento con el filtro proporcionado');
			}else{
				console.log('No coincide el elemento con el filtro proporcionado');
			}
		}
		
		
	}else{
		console.log('Ha surgido un error al intentar acceder a la ejecución, quizás no has proporcionado el tipo de ejecución.');
	}
	
	
}catch{
	console.log('Ha surgido un error al realizar la operación seleccionada. Recuerda añadir argumentos en la ejecución');
}
