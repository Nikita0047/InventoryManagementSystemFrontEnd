import { Component, signal } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import{ NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('InventoryApp');
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Navigating to:', event.url);
      }
    });
}
}