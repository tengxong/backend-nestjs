import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { HelpersModule } from './helpers/helpers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
     DatabaseModule,
     UsersModule,
     HelpersModule
  ],
  controllers: [AppController],
  providers: [AppService]
  // imports: [DatabaseModule],
})
export class AppModule {}
