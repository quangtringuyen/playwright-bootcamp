import { createLogger, format, log, transports } from "winston";

const console = new transports.Console();
const logger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp({
            format: "HH-MM:ss YYYY-MM-DD",
        }),
        format.prettyPrint(),
        format.colorize(),
        format.align(),
        format.printf((info) => {
            return `[${info.timestamp}] [${info.level}]: ${info.message}`;
        })
    ),
    transports: [new transports.File({ filename: "logs/out.log" }), console],
});

export default logger;
