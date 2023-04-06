import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToOne } from "typeorm"
import { Incident } from "./IncidentModel"

@Entity()
export class Incidentstatus {
    @PrimaryGeneratedColumn()
    statusID: number

    @Column("text", {nullable:true})
    status: string

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    statusDate: string

    @Column("text",{nullable:true})
    changedBy: string    

    @ManyToOne(()=> Incident)
    Incident: Incident;
}