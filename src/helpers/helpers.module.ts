import { Module } from '@nestjs/common';
import { HelpersService } from './helpers.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-access-token-secret',
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
  providers: [HelpersService],
})
export class HelpersModule {}
