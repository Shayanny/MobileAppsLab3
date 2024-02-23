import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@Component({
  selector: 'root-directive',
  standalone: true,
  imports: [RouterOutlet, AComponent,BComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my.app';
  name:string = "Shayanny";
  age:number = 21;
}
