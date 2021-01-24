import {logger} from "../../configuration/logger";

export default function loggerHandler(req, res) {
	const {name, message, level} = req.body;

	logger[level](message, {name});

	res.status(201).end();
}
