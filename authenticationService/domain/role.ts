import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import EntityBase from "./entityBase";

@Entity('Role')
export class Role extends EntityBase {
    constructor() {
        super();
    }

    @PrimaryGeneratedColumn() id: number;

    @Column() title: string;
    @Column() name: string;
    @Column() code: string;
  
}