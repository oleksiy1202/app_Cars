import { Component } from '@angular/core';
import { Car } from '../models/car';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent {
  cars: Car[] = []

  constructor(
    private dataService: DataService,
    private router: Router,
  ) { }

  getAllCars() {
    this.dataService.getCars().subscribe((data: any) => {
      this.cars = data
    })
  }

  ngOnInit() {
    this.getAllCars()
  }


  detailCar(id: number) {
    this.router.navigate(['/details', id])
  }

  deleteCar(id: number) {
    this.dataService.deleteOnlyCar(id).subscribe((data: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Yes!',
        text: 'Ви видалили!',
      })
      this.getAllCars()
    })
  }

  editCar(id: number) {
    this.router.navigate(['/edit', id])
  }

}