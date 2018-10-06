import { Controller } from '@nestjs/common';
import { RestController } from 'RestController';
import { Note } from 'Note.entity';

// @ApiUseTags('notes')
@Controller('notes')
export class AppController extends RestController<Note> {}
