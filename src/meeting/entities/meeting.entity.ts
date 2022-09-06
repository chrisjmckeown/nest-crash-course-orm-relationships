import { Employee } from '../../employee/entities/employee.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'zoomUrl', type: 'text' })
  zoomUrl: string;

  @ManyToMany(() => Employee, (employee) => employee.meetings)
  attendance: Employee[];
}
