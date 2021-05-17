import { IsDateString, IsNotEmpty } from 'class-validator';

export class createQuestionDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  @IsDateString()
  deadLineDate: Date;
}
