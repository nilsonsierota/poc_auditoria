import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { CreateUserRequestDto } from 'src/dtos/create-user-request.dto';
import { UpdateUserRequestDto } from 'src/dtos/update-user-request.dto';
import { AccountService } from 'src/services/account.user.service';

@Controller('v1')
export class AccountController {
  currentUser: any;
  constructor(private readonly accountService: AccountService) {}

  @HttpCode(HttpStatus.OK)
  @Post('user/create/account')
  async createUser(@Body() body: CreateUserRequestDto) {
    return this.accountService.createUser(body);
  }

  @Put('user/update/profile')
  async updateUser(@Body() body: UpdateUserRequestDto) {
    return this.accountService.updateUser(body);
  }

  @Put('user/delete/account')
  async deleteUser(@Body() { id }: any) {
    return this.accountService.deleteUser(id);
  }
}
