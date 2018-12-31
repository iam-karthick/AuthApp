import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './shared/auth.service';
import { EventService } from './shared/event.service';
import { EvantsComponent } from './evants/evants.component';
import { AuthGuard } from './shared/auth.guard';
import { TokenIntercentorService } from './shared/token-intercentor.service'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EvantsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [AuthService,AuthGuard,EventService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenIntercentorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
