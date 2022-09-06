import { Employee } from 'src/employee/entities/employee.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'zoomUrl', type: 'text' })
  zoomUrl: string;

  @ManyToMany(() => Employee, (employee) => employee.meetings)
  attendance: Employee[];
}
