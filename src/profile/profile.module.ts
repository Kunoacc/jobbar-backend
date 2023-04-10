import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Module({
  providers: [PrismaService],
})
export class ProfileModule {}
