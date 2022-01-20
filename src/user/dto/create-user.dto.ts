import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/common/enum/roles.enum';

export class CreateUserDto {
  @ApiProperty({
    description: 'User name',
  })
  username: string;
  @ApiProperty()
  email?: string;
  @ApiProperty({
    description: 'User role',
    enum: [Role.ADMIN, Role.GUEST, Role.USER],
  })
  role: Role;
  @ApiProperty()
  password: string;
}
