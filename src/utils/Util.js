import { message } from "antd";
import { TYPES } from "./constants";

export {
  informative,
  mostrarCargando,
  ocultarCargando
};

const informative = (text = '', type = 'info') => {
  if (!TYPES.includes(type)) {
    message.error(`El tipo ingresado ${type} no es válido, consulte con el administrador.`);
    throw new Error(`El tipo ingresado ${type} no es válido, consulte con el administrador.`);
  }

  message[type](text);
};

const mostrarCargando = () => {
  document.getElementById('spinner').classList.remove('hidden');
};

const ocultarCargando = () => {
  document.getElementById('spinner').classList.add('hidden');
}