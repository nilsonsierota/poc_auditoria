import { Module } from '@nestjs/common';
import { AccountController } from './controllers/account.user.controller';
import { AccountService } from './services/account.user.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PrismaService } from './database/prisma/prisma.service';
import { AccountUserListener } from './listeners/account.user.listener';
import { UserNotifyListener } from './listeners/user-notify-listener';
import { UserShopifyListener } from './listeners/user-shopify-listener';

@Module({
  imports: [EventEmitterModule.forRoot()],
  controllers: [AccountController],
  providers: [
    AccountService,
    PrismaService,
    AccountUserListener,
    UserShopifyListener,
    UserNotifyListener,
  ],
})
export class AppModule {}
