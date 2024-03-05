import * as mongoose from 'mongoose';

export const NotesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});
