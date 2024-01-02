import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { MenuComponent } from './menu/menu.component'
import { HomeComponent } from './home/home.component'
import { MaintenanceComponent } from './maintenance/maintenance.component'
import { TopComponent } from './top/top.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { CarComponent } from './car/car.component'
import { CarListComponent } from './car-list/car-list.component'
import { HttpClientModule } from '@angular/common/http'
import { CarAddComponent } from './car-add/car-add.component'
import { FormsModule } from '@angular/forms'
import { DetailsComponent } from './details/details.component'
import { EditCarComponent } from './edit-car/edit-car.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    MaintenanceComponent,
    TopComponent,
    NotFoundComponent,
    CarComponent,
    CarListComponent,
    CarAddComponent,
    DetailsComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
