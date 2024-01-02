import { Component } from '@angular/core';
import { Car } from '../models/car';
import { DataService } from '../data.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent {

  // cars: Car[] = []

  car: Car = new Car("", "", 0, "")

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }



  addCar() {
    let newCar = new Car(
      this.car.name,
      this.car.model,
      this.car.price,
      this.car.image,
    )

    this.dataService.addCarToDB(newCar).subscribe(() => {
      Swal.fire({
        title: 'Добре',
        text: 'Машина додана до списку!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      this.router.navigate(['/maintenance'])
    })
  }




}
