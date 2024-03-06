import { Body, Controller, Post } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  create(@Body() createNoteDto: any) {
    return this.notesService.create(createNoteDto);
  }
}
