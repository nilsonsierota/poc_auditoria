import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class AccountUserListener {
  constructor(public prisma: PrismaService) {}
  @OnEvent('user.created')
  async handleOrderCreatedEvent(event: Prisma.JsonObject) {
    console.log('Criei usuario, criei um log de auditoria');

    //Para usar o objeto se precisar fazer alguma manipulação
    const {
      id,
      email,
      password,
      active,
      name,
      shopifyIntegrationId,
      createdAt,
      updatedAt,
    } = event;

    await this.prisma.audit.create({
      data: {
        type: 'user.created',
        description: event,
      },
    });
  }
  @OnEvent('user.updated')
  async handleOrderUpdatedEvent(event: Prisma.JsonObject) {
    console.log('Alterei usuario, criei um log de auditoria');
    await this.prisma.audit.create({
      data: {
        type: 'updated',
        description: event,
      },
    });
  }
  @OnEvent('user.deleted')
  async handleOrderDeletedEvent(event: Prisma.JsonObject) {
    console.log('Deletei usuario, criei um log de auditoria');
    await this.prisma.audit.create({
      data: {
        type: 'deleted',
        description: event,
      },
    });
  }
}
