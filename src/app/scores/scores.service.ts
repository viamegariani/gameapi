import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from './score.entity';
import { CreateScoreDto } from './dto/create-score.dto';
import { User } from '../users/user.entity';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score)
    private readonly scoreRepository: Repository<Score>,
  ) {}

  async submitScore(createScoreDto: CreateScoreDto, user: User): Promise<Score> {
    // Tambahkan logika untuk menyimpan skor ke database
  }

  async getLeaderboard(): Promise<Score[]> {
    // Tambahkan logika untuk mengambil leaderboard dari database
  }
}
