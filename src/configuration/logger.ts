import {createLogger, format, transports} from "winston";

const removeTimestamp = format((info) => {
	if (info.timestamp) {
		info.timestamp = undefined;
	}
	return info;
});

const applyLevelNameAlias = format((info) => {
	Object.defineProperty(
		info,
		"levelname",
		Object.getOwnPropertyDescriptor(info, "level"),
	);

	info.level = undefined;

	return info;
});

const upperCaseLevelName = format((info) => {
	info.levelname = info.levelname.toUpperCase();
	return info;
});

const logger = createLogger({
	level: "debug",
	format: format.combine(
		format.timestamp({
			format: "YYYY-MM-DD HH:mm:ss",
			alias: "asctime",
		}),
		removeTimestamp(),
		applyLevelNameAlias(),
		upperCaseLevelName(),
		format.json(),
	),
	transports: [new transports.Console()],
});

export {logger};
