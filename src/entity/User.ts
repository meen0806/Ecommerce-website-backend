import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("muskan_new1")
export class UserNew {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column("text")
  firstName!: string;

  @Column("text")
  lastName!: string;

  @Column({ type: "text", default: "default" })
  description!: string;

  @Column({ type: "boolean", nullable: false, default: false })
  active: boolean = false;
}
