import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant';
import { RestaurantService } from './services/restaurant.service';
import { ErrorService } from '../error/services/error.service';
import { MessageService } from '../messages/services/message.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  public restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService,
              private errorService: ErrorService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.errorService.clear();
    this.messageService.clear();
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.errorService.clear();
    this.messageService.clear();
    this.restaurantService.getRestaurants().subscribe(obj => this.processResponse(obj));
  }

  processResponse(obj: string): void {
    console.log(obj);
    const jsonObj = JSON.parse(JSON.stringify(obj));
    const restaurantObjArray = jsonObj.restaurants;
    let index = 0;
    restaurantObjArray.forEach(restaurant => {
      this.restaurants[index++] = restaurant;
    });
  }

}
