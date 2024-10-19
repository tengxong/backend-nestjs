import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { DatabaseModule } from './database/database.module';

@Module({
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
  imports: [DatabaseModule],
})
export class AppModule {}
