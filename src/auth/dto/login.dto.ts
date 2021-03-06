import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'Username',
    required: true,
  })
  username: string;
  @ApiProperty({
    description: 'User name',
    required: true,
  })
  password: string;
}
