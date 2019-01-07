import {Routes} from "@angular/router"
import { BookingComponent } from './booking/booking.component';
import { TrackingComponent } from './tracking/tracking.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
export const AppRoutes: Routes = [
    { 
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path:'booking',
        component: BookingComponent
    },
    {
        path:'tracking',
        component: TrackingComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    }  
]