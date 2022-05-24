import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DrugsComponent } from './drugs/drugs.component';
import { AuthGuard } from './guards/auth.guard';
import { NotDoctorGuard } from './guards/not-doctor.guard';
import { RolesGuard } from './guards/roles.guard';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: AuthorizationComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'doctors', component: DoctorsComponent, canActivate: [AuthGuard, NotDoctorGuard]},
  {path: 'patients', component: PatientsComponent, canActivate: [AuthGuard, RolesGuard]},
  {path: 'drugs', component: DrugsComponent, canActivate: [AuthGuard, RolesGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
