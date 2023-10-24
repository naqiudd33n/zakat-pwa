import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppConfig } from './config/service.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  /**
   * Constructor
   */
  constructor() {
  }
}

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

