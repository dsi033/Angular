import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'pruebaV16';
  myButton: string = 'My Button';
  counter: number = 0;

  //attr binding
  isDisabled: boolean = false;
  angularImage: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBvZhWfTW_JTeUsMzMlKuWNIT9SV1uhJyQg&s';

  //style binding
  bgColor: string = 'purple';
  titleColor: string = 'white';
  description: string = 'font-size: 30px; color: pink';

  //class binding

  redText: string = 'yes';

  incrementCounter() {
    this.counter++;
  }

  inputText: string = 'Initial Value';


  //ng Class

  message: string = 'This is a dangerous message';
  classes: string = 'danger text-size';


  //ng Style

  selectedColor:string='red';
}
