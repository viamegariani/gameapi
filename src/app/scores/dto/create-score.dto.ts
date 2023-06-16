import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreateScoreDto {
  @IsNotEmpty()
  playerName: string;

  @IsNotEmpty()
  @IsPositive()
  score: number;
}
