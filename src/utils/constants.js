import { Bounce } from "react-toastify";

export const TYPES = ["info", "warn", "error", "success"];
export const DEFAULT_PROPERTIES_TOAST = {
	position: "top-right",
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "light",
	transition: Bounce,
};