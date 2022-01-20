import { Injectable } from '@nestjs/common';
import { CarService } from '../car/car.service';
import { cars, users } from './data';
import { UserService } from '../user/user.service';

@Injectable()
export class SeederService {
  constructor(
    private readonly carService: CarService,
    private readonly userService: UserService,
  ) {}

  public async seed() {
    for (const car of cars) {
      await this.carService.create(car).catch((e: Error) => console.error(e));
    }

    for (const user of users) {
      await this.userService.create(user);
    }
  }
}
