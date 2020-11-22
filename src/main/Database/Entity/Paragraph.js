import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Pagragraph {

    @PrimaryColumn()
    id: number;

    @Column()
    fileName: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    createDate: Date;

    @Column()
    updateDate: Date;
}