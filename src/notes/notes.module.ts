import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from '../logger/logger.module';
import { Note, NoteSchema } from './notes.model';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
    LoggerModule,
  ],
  providers: [NotesService, Logger],
  controllers: [NotesController],
})
export class NotesModule {}
