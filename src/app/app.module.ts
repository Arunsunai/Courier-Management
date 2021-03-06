import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { TrackingComponent } from './tracking/tracking.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutes } from './app.routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    TrackingComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
