import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLoggerService } from './logger/my-logger.service';
import { NotesModule } from './notes/notes.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    NotesModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: Logger, useClass: MyLoggerService }],
})
export class AppModule {}
