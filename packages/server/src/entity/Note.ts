import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;

    @Column()
    public body: string;
  }
