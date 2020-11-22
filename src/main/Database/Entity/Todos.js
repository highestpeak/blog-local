import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Todos {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    // todo
    @Column()
    status: string;

    @Column()
    createDate: Date;

    @Column()
    updateDate: Date;
}