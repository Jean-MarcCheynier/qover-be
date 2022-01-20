import { CreateCarDto } from 'src/car/dto/create-car.dto';
import { CoverType } from 'src/common/enum/cover.enum';
import { Role } from 'src/common/enum/roles.enum';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export const cars: CreateCarDto[] = [
  {
    brand: 'AUDI',
    coverOptions: {
      [CoverType.GLOBAL]: {
        basedPrice: 250,
        carPriceMultiplier: 0,
      },
      [CoverType.UNIVERSAL]: {
        basedPrice: 250,
        carPriceMultiplier: 0.03,
      },
    },
  },
  {
    brand: 'BMW',
    coverOptions: {
      [CoverType.GLOBAL]: {
        basedPrice: 150,
        carPriceMultiplier: 0,
      },
      [CoverType.UNIVERSAL]: {
        basedPrice: 150,
        carPriceMultiplier: 0.04,
      },
    },
  },
  {
    brand: 'PORSHE',
    coverOptions: {
      [CoverType.GLOBAL]: {
        basedPrice: 500,
        carPriceMultiplier: 0,
      },
      [CoverType.UNIVERSAL]: {
        basedPrice: 500,
        carPriceMultiplier: 0.07,
      },
    },
  },
];

export const users: CreateUserDto[] = [
  {
    username: 'Qover',
    password: 'Ninja',
    role: Role.USER,
  },
  {
    username: 'admin',
    password: 'admin',
    role: Role.ADMIN,
  },
];
