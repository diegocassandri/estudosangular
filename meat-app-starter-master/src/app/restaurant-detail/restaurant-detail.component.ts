import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant : Restaurant;

  constructor(private restaurantsService: RestaurantsService, private activetedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantsById(this.activetedRoute.snapshot.params['id'])
    .subscribe(response => this.restaurant = response);
  }
}
