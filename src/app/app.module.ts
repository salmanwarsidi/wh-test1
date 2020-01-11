import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardReviewComponent } from './components/card-review/card-review.component';
import { CoreModule } from './core/core.module';
import { CreditModule } from './credit/credit.module';
import { HomeComponent } from './pages/home/home.component';
import { LinkOneComponent } from './pages/link-one/link-one.component';
import { LinkThreeComponent } from './pages/link-three/link-three.component';
import { LinkTwoComponent } from './pages/link-two/link-two.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { CurrencyPipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardInfoComponent,
    LinkOneComponent,
    LinkTwoComponent,
    LinkThreeComponent,
    HomeComponent,
    CardReviewComponent,
    AddReviewComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    CreditModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
