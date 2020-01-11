import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyCreditComponent } from '../components/apply-credit/apply-credit.component';


const routes: Routes = [
  { path: '', component: ApplyCreditComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
