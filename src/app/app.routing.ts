import {Routes} from "@angular/router"
import { BookingComponent } from './booking/booking.component';
import { TrackingComponent } from './tracking/tracking.component';
import { AdminComponent } from './admin/admin.component';
export const AppRoutes: Routes = [
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