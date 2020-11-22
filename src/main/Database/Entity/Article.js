import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Article {

    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    fileName: string;

    @Column()
    summary: string;

    @Column()
    createDate: Date;

    @Column()
    updateDate: Date;
}