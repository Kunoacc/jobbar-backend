import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class ProfileService {
  // constructor(private prisma: PrismaService) {}

  // async createProfile(data: Prisma.ProfileCreateInput) {
  //   return this.prisma.profile.create({ data });
  // }

  // async getProfile(where: Prisma.ProfileWhereUniqueInput) {
  //   return this.prisma.profile.findUnique({ where });
  // }

  // async updateProfile(userId: string, data: Prisma.ProfileUpdateInput) {
  //   return this.prisma.profile.update({ data, where: { userId } });
  // }

  // async deleteProfile(where: Prisma.ProfileWhereUniqueInput) {
  //   return this.prisma.profile.delete({ where });
  // }
}
