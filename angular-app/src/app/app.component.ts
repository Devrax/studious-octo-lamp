import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjemploDeStencilModule } from '../../projects/bhd-custom-elements/src/lib/ejemplo-de-stencil.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EjemploDeStencilModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
}
