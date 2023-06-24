import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class ExampleDto {
  @ApiProperty({
    type: () => String,
    required: true,
    description: "Example string",
    example: "example",
  })
  @IsString()
  @IsNotEmpty()
  exampleString: string;

  @ApiProperty({
    type: () => Number,
    description: "Example number",
    example: 1,
  })
  @IsNumber()
  exampleNumber: number;
}
