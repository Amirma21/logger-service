import { Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MyLoggerService } from '../logger/my-logger.service';
import { Note, NoteSchema } from './notes.model';
import { NotesService } from './notes.service';

describe('NotesService', () => {
  let service: NotesService;
  let connectionString: string;
  let mongo: MongoMemoryServer;

  beforeAll(async () => {
    mongo = await MongoMemoryServer.create();
    connectionString = mongo.getUri();
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(connectionString),
        MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
      ],
      providers: [NotesService, { provide: Logger, useClass: MyLoggerService }],
    }).compile();

    service = module.get<NotesService>(NotesService);
  });

  afterAll(async () => {
    await mongo.stop();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should creat a new note', async () => {
    const createNoteDto = {
      title: 'Test Note(MongoDB server)',
      content: 'This is a test note(MongoDB server).',
    };

    const createdNote = await service.create(createNoteDto);

    expect(createdNote.title).toBe(createNoteDto.title);
    expect(createdNote.content).toBe(createNoteDto.content);
    expect(createdNote.title).toBeDefined();
  });
});
