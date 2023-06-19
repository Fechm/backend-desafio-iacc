import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { DataSourceConfig } from 'src/config/data.source';
import { StudentsModule } from './students/students.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.development.env`,
      isGlobal: true
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    CoursesModule,
    StudentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
