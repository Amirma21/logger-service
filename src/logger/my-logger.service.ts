// src/logger/my-logger.service.ts

import { Injectable, LoggerService } from '@nestjs/common';
import { logger } from './winston.config';

@Injectable()
export class MyLoggerService implements LoggerService {
  log(message: string, context?: string) {
    logger.info(message, { context });
  }

  error(message: string, trace: string, context?: string) {
    logger.error(message, { context, trace });
  }

  warn(message: any, ...optionalParams: any[]): any {
    logger.error(message, { optionalParams });
  }
}
