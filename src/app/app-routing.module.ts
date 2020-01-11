import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LinkOneComponent } from './pages/link-one/link-one.component';
import { LinkThreeComponent } from './pages/link-three/link-three.component';
import { LinkTwoComponent } from './pages/link-two/link-two.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent , data: { routeState: 1}},
  { path: 'one', component: LinkOneComponent , data: { routeState: 2} },
  { path: 'two', component: LinkTwoComponent , data: { routeState: 3} },
  { path: 'three', component: LinkThreeComponent , data: { routeState: 4} },
  {
    path: 'credit/:id/:slug',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./credit/credit.module').then(m => m.CreditModule) , data: { routeState: 5}
  },
  { path: 'login', component: LoginComponent , data: { routeState: 6} },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
