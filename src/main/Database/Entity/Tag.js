import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Tag {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    createDate: Date;

    @Column()
    updateDate: Date;
}