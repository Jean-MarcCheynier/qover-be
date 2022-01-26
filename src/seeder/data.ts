import { CreateCarDto } from 'src/car/dto/create-car.dto';
import { CoverType } from 'src/common/enum/cover.enum';
import { Role } from 'src/common/enum/roles.enum';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export const cars: CreateCarDto[] = [
  {
    brand: 'AUDI',
    coverOptions: {
      [CoverType.GLOBAL]: {
        basePrice: 250,
        carPriceMultiplier: 0,
        minAge: 18,
      },
      [CoverType.UNIVERSAL]: {
        basePrice: 250,
        carPriceMultiplier: 0.03,
        minAge: 18,
      },
    },
  },
  {
    brand: 'BMW',
    coverOptions: {
      [CoverType.GLOBAL]: {
        basePrice: 150,
        carPriceMultiplier: 0,
        minAge: 18,
      },
      [CoverType.UNIVERSAL]: {
        basePrice: 150,
        carPriceMultiplier: 0.04,
        minAge: 18,
      },
    },
  },
  {
    brand: 'PORSHE',
    coverOptions: {
      [CoverType.GLOBAL]: {
        basePrice: 500,
        carPriceMultiplier: 0,
        minAge: 25,
      },
      [CoverType.UNIVERSAL]: {
        basePrice: 500,
        carPriceMultiplier: 0.07,
        minAge: 25,
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
