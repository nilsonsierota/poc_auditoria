import { Injectable, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateUserRequestDto } from 'src/dtos/create-user-request.dto';
import { UpdateUserRequestDto } from 'src/dtos/update-user-request.dto';

@Injectable()
export class AccountService {
  constructor(
    public prisma: PrismaService,
    private eventEmitter: EventEmitter2,
  ) {}

  async createUser(body: CreateUserRequestDto) {
    const { email, password } = body;

    const createdUser = await this.prisma.user.create({
      data: {
        email: String(email).toLowerCase(),
        password: password,
      },
    });

    await this.prisma.user.findFirstOrThrow({
      where: { id: createdUser.id },
    });

    this.eventEmitter.emit('user.created', {
      createdUser,
    });

    return {
      id: createdUser.id,
      message: 'success',
      CodeStatus: 201,
    };
  }

  async updateUser(body: UpdateUserRequestDto) {
    try {
      const { id, name } = body;

      const user = await this.prisma.user.findFirst({
        where: { id },
      });

      if (!user) {
        throw new NotFoundException('User not found');
      }

      const updatedUser = await this.prisma.user.update({
        where: { id },
        data: {
          name,
        },
      });

      this.eventEmitter.emit('user.updated', {
        type: 'updated',
        description: { id, ...updatedUser },
      });

      return {
        message: 'User updated successfully',
        CodeStatus: 200,
      };
    } catch (error) {
      return { message: 'Failed to update user: ', CodeStatus: 400 };
    }
  }

  async deleteUser(id: string): Promise<object> {
    const userExists = await this.prisma.user.findFirst({
      where: { id },
      select: {
        id: true,
      },
    });

    if (!userExists) {
      throw new NotFoundException('User not found');
    }

    try {
      const user = await this.prisma.user.update({
        where: { id },
        data: {
          active: false,
        },
      });

      this.eventEmitter.emit('user.deleted', {
        name: id,
        type: 'deleted',
        description: { id, ...user },
      });

      return {
        statusCode: 200,
        message: 'User deleted successfully',
      };
    } catch (error) {
      return { message: 'Failed to delete user: ', CodeStatus: 400 };
    }
  }
}
