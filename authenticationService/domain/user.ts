import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import EntityBase from "./entityBase";

@Entity('User')
export class User extends EntityBase {
    constructor() {
        super();
    }

    @PrimaryGeneratedColumn() id: number;

    @Column() customerCode: number; // It is the relation field between this node and sale service. F-Key

    @Column() firstName: string;
    @Column() lastName: string;
    @Column() userName: string;
    @Column() email: string;
    @Column() password: Buffer | null;
    @Column() isActive: boolean;

    @Column() mobile: string;
    @Column() address: string;
    @Column() homeLink: string;
    @Column() gender: boolean;
    @Column({ type: 'timestamp' }) registerDate: Date;
    
    // Not Mapped //////////////////////
    stringPassword: string;
    confirmPassword: string;
}