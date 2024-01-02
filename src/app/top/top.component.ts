import { Component, OnInit } from '@angular/core'
import { Car } from '../models/car'
import { DataService } from '../data.service'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  cars: Car[] = []

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getTop10Cars().subscribe((data: any) => {
      this.cars = data
    })
  }
}
