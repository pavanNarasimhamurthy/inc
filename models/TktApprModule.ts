import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class TktAppr {
    @PrimaryGeneratedColumn()
    tktID: number
    
    @Column("text")
    tktName: string

    @Column("text")
    tktApproverID: string

    @Column("text")
    tktApprove: string

    @Column("text")
    tktStatus: string    
}