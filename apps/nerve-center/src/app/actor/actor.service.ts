import { Injectable } from '@nestjs/common';
import { Actor, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ActorService {
  getActors(): Promise<Actor[]> {
    return prisma.actor.findMany();
  }
}
