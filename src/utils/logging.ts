import colors from "colors";
import config from "../config.js";

export function log(text: string) {
	const date = new Date().toTimeString().split(/ +/)[0];
	console.log(colors.green(`[${date}]: ${text}`));
}

export function error(err: any) {
	const date = new Date().toTimeString().split(/ +/)[0];
	let errorMessage = '';

	if (err instanceof Error) {
		errorMessage = err.stack || err.message;
	} else if (typeof err === 'object' && err !== null) {
		errorMessage = JSON.stringify(err);
	} else {
		errorMessage = String(err);
	}

	if (config.debugMode) {
		console.error(errorMessage);
	} else {
		console.log(colors.red(`[${date}]: ${errorMessage}`));
	}
}


