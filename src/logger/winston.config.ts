import * as winston from 'winston';
import 'winston-daily-rotate-file';

const consoleTransport = new winston.transports.Console({
  format: winston.format.combine(
    // Add a timestamp to the console logs
    winston.format.timestamp(),
    // Add colors to you logs
    winston.format.colorize(),
    // What the details you need as logs
    winston.format.printf(({ timestamp, level, message, context, trace }) => {
      return `${timestamp} ${context} ${level}: ${message}${trace ? `\n${trace}` : ''}`;
    }),
  ),
});

const fileTransport = new winston.transports.DailyRotateFile({
  filename: 'logs/application-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
});

// const telegramTransport = new winstonTelegram({
//   chatId: 0,
//   level: 'info', // Log level
//   token: 'YOUR_TELEGRAM_BOT_TOKEN', // Your Telegram Bot Token
// });

// Create transport instance
const transports = [consoleTransport, fileTransport];

export const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports,
});
