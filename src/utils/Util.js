import { DEFAULT_PROPERTIES_TOAST, TYPES } from "./constants";
import { toast } from "react-toastify";

export {
  informative,
  mostrarCargando,
  ocultarCargando,
  formatTitle
};

const informative = (message = '', type = 'info', properties = {}) => {
  if(!TYPES.includes(type)){
    throw new Error('Tipo de notificación inválido');
  }

  properties = { ...DEFAULT_PROPERTIES_TOAST, ...properties };

  toast[type](message, properties);
};

const mostrarCargando = () => {
  document.getElementById('spinner').classList.remove('hidden');
};

const ocultarCargando = () => {
  document.getElementById('spinner').classList.add('hidden');
}

// convierte un string en formato "snake_case" a "Camel Case"
const formatTitle = (str) => {
	return str
		.replace(/_/g, ' ')
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

// obtiene la fecha actual en formato "dd-mm-yyyy"
export const obtenerFechaActual = () => {
	const fecha = new Date();
	const dia = String(fecha.getDate()).padStart(2, '0');
	const mes = String(fecha.getMonth() + 1).padStart(2, '0');
	const anio = fecha.getFullYear();
	return `${dia}-${mes}-${anio}`;
};