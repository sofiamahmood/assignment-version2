import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
   	template: `
		<img src = '../assets/images/welcome-screen.jpg'/>
    `,
    styles: [`
	  img {
	    width: 100%;
	  }
	`]
})
export class HomeComponent {}

