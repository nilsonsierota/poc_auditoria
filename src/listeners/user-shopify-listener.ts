import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class UserShopifyListener {
  constructor(public prisma: PrismaService) {}
  @OnEvent('user.created')
  async handleOrderCreatedEvent(event: Prisma.JsonObject) {
    //Shopify Integration
    console.log('Criei usuario, criei uma integração com o shopify');
  }
  @OnEvent('user.updated')
  async handleOrderUpdatedEvent(event: Prisma.JsonObject) {
    //Shopify Integration
    console.log(
      'Alterei usuario, criei ou alterei uma integração com o shopify',
    );
  }
  @OnEvent('user.deleted')
  async handleOrderDeletedEvent(event: Prisma.JsonObject) {
    //Shopify Integration
    console.log('Delete usuario, desativei uma integração com o shopify');
  }
}
