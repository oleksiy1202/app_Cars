import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  car: any = {}

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id']
    this.dataService.getOnlyCar(id).subscribe((carData: any) => {
      this.car = carData
    })
  }


  editCar() {
    const id = this.car.id
    this.dataService.editOnlyCar(id, this.car).subscribe((response: any) => {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Відредаговано!',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate([''])
    }, (error: any) => {
      console.error('Помилка під час редагування автомобіля', error)
    })
  }
  goBack() {
    this.location.back()
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: 'НЕ відредаговано!',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
