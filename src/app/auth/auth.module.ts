import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from './auth.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: AuthComponent},
    ]),
    SharedModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
