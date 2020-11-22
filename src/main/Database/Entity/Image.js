import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Image {

    @PrimaryColumn()
    id: number;

    @Column()
    fileName: string;

    @Column()
    description: string;

    // todo 
    @Column()
    link: string;

    @Column()
    createDate: Date;

    @Column()
    updateDate: Date;
}