import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { UserRepository } from '../users/user.repository';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(username: string, password: string): Promise<void> {
    // Tambahkan logika untuk membuat akun baru
  }

  async signIn(username: string, password: string): Promise<{ accessToken: string }> {
    // Tambahkan logika untuk proses login dan menghasilkan token JWT
  }

  async validateUser(payload: JwtPayload): Promise<User> {
    // Tambahkan logika untuk memvalidasi user berdasarkan payload JWT
  }
}
