import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class UserNotifyListener {
  constructor(public prisma: PrismaService) {}
  @OnEvent('user.created')
  async handleOrderCreatedEvent(event: Prisma.JsonObject) {
    // Notification
    console.log('Criei usuario, notifiquei por email o usuario criado');
  }
  @OnEvent('user.updated')
  async handleOrderUpdatedEvent(event: Prisma.JsonObject) {
    // Notification
    console.log('Alterei usuario, notifiquei por email o usuario criado');
  }
  @OnEvent('user.deleted')
  async handleOrderDeletedEvent(event: Prisma.JsonObject) {
    // Notification
    console.log('Deletei usuario, notifiquei por email o usuario criado');
  }
}
