import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {

  carList: any[] = []

  constructor(private dataService: DataService) { }

  getCarsList() {
    this.dataService.getCars().subscribe((data: any) => {
      this.carList = data
    })
  }

  ngOnInit() {
    this.getCarsList()
  }

}
