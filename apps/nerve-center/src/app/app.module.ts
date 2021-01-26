import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorController } from './actor/actor.controller';
import { ActorService } from './actor/actor.service';

@Module({
  imports: [],
  controllers: [AppController, ActorController],
  providers: [AppService, ActorService],
})
export class AppModule {}
