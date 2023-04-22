import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';

@Module({
  providers: [ProfileService, PrismaService],
  controllers: [ProfileController],
})
export class ProfileModule {}
