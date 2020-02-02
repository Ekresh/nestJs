import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStraregy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'topSecret86',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  exports: [
    PassportModule,
    JwtStraregy,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStraregy,
  ],
})
export class AuthModule { }
