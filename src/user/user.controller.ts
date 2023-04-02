import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt/jwt';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Controller('user')
export class UserController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUser(@Query() query: Prisma.UserFindManyArgs) {
    return await this.prisma.user.findMany({
      ...query,
    });
  }

  @Get('userId')
  @UseGuards(JwtAuthGuard)
  async getUserId(@Param('userId') userId: string) {
    return await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
}
