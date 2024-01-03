import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template:
  `<h1>Marvellous Infosystems</h1>`,
  styles: [`h1{
    color:blue;
  }`]
})
export class AppComponent 
{
  
}
