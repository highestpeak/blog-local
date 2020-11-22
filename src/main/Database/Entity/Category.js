import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Category {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    parentId: number;

    @Column()
    createDate: Date;

    @Column()
    updateDate: Date;
}