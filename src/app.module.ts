import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabasesModule } from './databases/databases.module';
import { EmployeeModule } from './employee/employee.module';
import { ContactInfoModule } from './contact-info/contact-info.module';
import { TaskModule } from './task/task.module';
import { MeetingModule } from './meeting/meeting.module';

@Module({
  imports: [DatabasesModule, EmployeeModule, ContactInfoModule, TaskModule, MeetingModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
