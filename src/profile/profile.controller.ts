import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt/jwt';
import { ProfileService } from './profile.service';
import { Prisma } from '@prisma/client';

@Controller('profile')
@UseGuards(JwtAuthGuard)
export class ProfileController {
  // constructor(private readonly service: ProfileService) {}

  // @Get(':userId')
  // async getProfile(@Param('userId') userId: string) {
  //   return await this.service.getProfile({ userId });
  // }

  // @Post()
  // async createProfile(@Body() data: Prisma.ProfileCreateInput) {
  //   return await this.service.createProfile(data);
  // }

  // @Put(':userId')
  // async updateProfile(
  //   @Param('userId') userId: string,
  //   @Body() data: Prisma.ProfileUpdateInput,
  // ) {
  //   return await this.service.updateProfile(userId, data);
  // }

  // @Delete(':userId')
  // async deleteProfile(@Param('userId') userId: string) {
  //   return await this.service.deleteProfile({ userId });
  // }
}
