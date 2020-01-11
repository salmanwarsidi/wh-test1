import { Component } from '@angular/core';
import { routerTransision } from 'src/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransision]
})
export class AppComponent {
  title = 'wallet-hub';

  getOutlet(o) {
    return o.activatedRouteData.routeState;
  }
}
