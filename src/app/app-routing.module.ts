import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { TopComponent } from './top/top.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarAddComponent } from './car-add/car-add.component';
import { DetailsComponent } from './details/details.component';
import { EditCarComponent } from './edit-car/edit-car.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'top10', component: TopComponent },
  { path: 'car-add', component: CarAddComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'edit/:id', component: EditCarComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
