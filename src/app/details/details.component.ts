import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/car';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  cars!: Car

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) { }


  beck() {
    this.location.back()
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.dataService.getOnlyCar(id).subscribe((data: any) => {
      this.cars = data
    })
  }
  info_car() {
    const id = this.cars.id
    this.router.navigate(['/edit', id])
  }

}
