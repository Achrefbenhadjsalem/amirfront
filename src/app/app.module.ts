import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap/tabs'; // Vérifiez l'importation de TabsModule

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TransferLogComponent } from './transfer-log/transfer-log.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { ContactComponent } from './contact/contact.component';
import { CheckbookRequestComponent } from './checkbook-request/checkbook-request.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TransferLogComponent,
    TransferMoneyComponent,
    ContactComponent,
    CheckbookRequestComponent,
    NavbarComponent,
    LoanRequestComponent,
    AdminlogComponent,
    CreditcardComponent,
    CreateuserComponent,
    CreateuserComponent,
    AdmindashboardComponent,
    SuperadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TabsModule.forRoot() // Assurez-vous d'importer TabsModule.forRoot() correctement
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
