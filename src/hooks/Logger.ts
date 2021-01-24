import ky from "ky-universal";

type LogLevel = "debug" | "info" | "warn" | "error";

function useLogger(name: string) {
	if (!name) {
		throw Error("Please provide a name for this instance");
	}

	function write(message: string, level: LogLevel) {
		ky.post(
			"/api/logger",
			{
				json: {
					message,
					level,
					name,
				},
			},
		);
	}

	function debug(message: string) {
		return write(message, "debug");
	}

	function info(message: string) {
		return write(message, "info");
	}

	function warn(message: string) {
		return write(message, "warn");
	}

	function error(message: string) {
		return write(message, "error");
	}

	return {debug, info, warn, error};
}

export {useLogger};
