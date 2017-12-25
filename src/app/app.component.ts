import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  template: `
    <nav class='navbar navbar-default'>
      <div class='container padding-top-13'>
	    <a routerLink='/home'>Home</a>
		<a routerLink='/checkin'>Proceed to Checkin</a>
	  </div>
	</nav>
	<router-outlet></router-outlet>
    `,
  styles: [`
    .container a{
	  position: relative;
	  padding-right: 25px;
	  padding-top: 30px;
	  color: grey;
	}
	.padding-top-13{
	  padding-top: 13px;
	}
	.navbar .container{
	  display: block
	}
  `]
})
export class AppComponent {}