import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './models/car';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:3000/cars'

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get(this.url)
  }

  addCarToDB(car: Car) {
    return this.http.post(this.url, car)
  }

  getOnlyCar(id: number) {
    return this.http.get(this.url + '/' + id)
  }

  deleteOnlyCar(id: number) {
    return this.http.delete(this.url + '/' + id)
  }

  getTop10Cars() {
    return this.http.get(`${this.url}?_limit=10&_sort=id&_order=desc`)
  }

  editOnlyCar(id: number, updatedCarData: any) {
    return this.http.put(`${this.url}/${id}`, updatedCarData)
  }
  back() {
    window.history.back()
  }
}

