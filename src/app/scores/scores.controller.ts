import {
    Controller,
    Get,
    Post,
    Body,
    UseGuards,
    UseInterceptors,
    ClassSerializerInterceptor,
  } from '@nestjs/common';
  import { ScoresService } from './scores.service';
  import { CreateScoreDto } from './dto/create-score.dto';
  import { AuthGuard } from '../shared/auth.guard';
  import { Roles } from '../shared/roles.decorator';
  import { RolesGuard } from '../shared/roles.guard;

  @Controller('scores')
@UseInterceptors(ClassSerializerInterceptor)
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post()
  @UseGuards(AuthGuard)
  submitScore(
    @Body(ValidationPipe) createScoreDto: CreateScoreDto,
    @GetUser() user: User,
  ): Promise<Score> {
    return this.scoresService.submitScore(createScoreDto, user);
  }

  @Get('/leaderboard')
  getLeaderboard(): Promise<Score[]> {
    return this.scoresService.getLeaderboard();
  }
}
