import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note, NoteDocument } from './notes.model';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note.name) private noteModel: Model<NoteDocument>,
    private readonly logger: Logger,
  ) {}

  async create(createNoteDto: any): Promise<Note> {
    const createdNote = new this.noteModel(createNoteDto);

    this.logger.error('LOG 5  :)))))');

    return createdNote.save();
  }
}
