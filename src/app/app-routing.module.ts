import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TransferLogComponent } from './transfer-log/transfer-log.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { ContactComponent } from './contact/contact.component';
import { CheckbookRequestComponent } from './checkbook-request/checkbook-request.component';
import { LoanRequestComponent } from './loan-request/loan-request.component'; // Import LoanRequestComponent
import { CreditcardComponent } from './creditcard/creditcard.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SuperadminComponent } from './superadmin/superadmin.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-user', component: CreateuserComponent },
  { path: 'transfer-log', component: TransferLogComponent },
  { path: 'navbar', component: NavbarComponent }, // Utilisation du composant NavbarComponent
  { path: 'transfer-money', component: TransferMoneyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'checkbook-request', component: CheckbookRequestComponent },
  { path: 'loan-request', component: LoanRequestComponent },
  { path: 'creditcard', component: CreditcardComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'superadmin', component: SuperadminComponent},
  { path: '**', redirectTo: '/home' } // Route de redirection par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
