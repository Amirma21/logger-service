import { Injectable, Logger } from '@nestjs/common';
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

    this.logger.error('Your log message LINE 16');

    return createdNote.save();
  }

  async findAll(): Promise<Note[]> {
    return this.noteModel.find().exec();
  }
}
