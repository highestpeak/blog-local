import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Code {

    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    fileName: string;

    @Column()
    language: string;

    @Column()
    description: string;

    @Column()
    createDate: Date;

    @Column()
    updateDate: Date;
}