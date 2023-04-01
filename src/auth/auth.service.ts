import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(profile: any) {
    const { provider, id, displayName, emails } = profile;
    const email = emails[0].value;

    let user = await this.userService.findUserByEmail(email);

    if (!user) {
      user = await this.userService.createUser({
        email,
        name: displayName,
        provider,
        providerId: id,
      });
    }

    return user;
  }

  async generateJwt(user: User) {
    const payload = {
      sub: user.id,
      email: user.email,
      provider: user.provider,
    };
    return this.jwtService.sign(payload);
  }
}
