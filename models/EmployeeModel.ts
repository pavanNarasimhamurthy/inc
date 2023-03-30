import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, Unique, Index } from "typeorm"
import { Incident } from "./IncidentModel"

@Index("unique_constraint", ['emailID'], {unique:true})
@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    empId: number
    
    @Column("text")
    firstName: string

    @Column("text")
    lastName: string

    @Column({type: "varchar", nullable:false})
    emailID: string

    @Column("text")
    department: string

    @Column("text")
    client: string

    @Column("text")
    project: string

    @Column("boolean",{default:true})
    foundInFile: boolean 
    
    @OneToMany(() => Incident,(incident) => incident.empID)
    @JoinColumn()
    incident?: Incident
}