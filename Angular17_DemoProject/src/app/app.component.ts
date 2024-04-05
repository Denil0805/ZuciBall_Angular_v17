import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleRenderingPageComponent } from './core-components/sample-rendering-page/sample-rendering-page.component';
import { HeaderComponent } from './basic-components/header/header.component';
import { PageUnderDevComponent } from './basic-components/page-under-dev/page-under-dev.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SampleRenderingPageComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular17_DemoProject';
}
