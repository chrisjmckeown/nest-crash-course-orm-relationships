import { Employee } from 'src/employee/entities/employee.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ContactInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'phone', type: 'text', nullable: true })
  phone: string;

  @Column({ name: 'email', type: 'text' })
  email: string;

  @Column('uuid')
  employeeId: string;

  @OneToOne(() => Employee, (employee) => employee.contactInfo, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  employee: Employee;
}
