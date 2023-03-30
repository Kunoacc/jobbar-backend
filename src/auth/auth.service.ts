import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) { }
  
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
}
