import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserController } from 'src/user/user.controller';
import { SamlController } from 'src/saml/saml.controller';
import { AuthService } from './auth.service';
import { GoogleModule } from './google/google.module';

@Module({
  imports: [GoogleModule],
  controllers: [AuthController, UserController, SamlController],
  providers: [AuthService],
})
export class AuthModule {

}
