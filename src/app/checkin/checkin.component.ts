import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule, FormControl, NgForm, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Observable'; 
import { PostCheckinService } from "../post-checkin-service"
@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styles: [`
    .checkinForm-heading {
  	  margin: 6% 0;
	}
	.checkin-form-full-width {
	  width: 100%;
	}
  `]
})
export class CheckinComponent {
  //response after server side validation
  posts: any = [];
  //page level error 
  validation_errors: Array<string> = [];
  //Booking code form control declaration
  bookingCodeFormControl = new FormControl('', [
    Validators.required,
	Validators.pattern('[a-zA-Z0-9]+'),
  ]);
  //Family name form control declaration
  familyNameFormControl = new FormControl('', [
    Validators.required,
	Validators.pattern('[a-zA-Z]+'),
  ]);
  constructor(private translate: TranslateService, 
    private postCheckinService: PostCheckinService, public router: Router) {
      // adds language code
      translate.addLangs(['en', 'nl']);
      // sets default language code to English
      translate.setDefaultLang('en');
      // Switching to specific langauge on change
      let browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|nl/) ? browserLang : 'en');	
  }
  // Server side validation after form submit
  checkinFormSubmit() {
    const bookingCodeVal = this.bookingCodeFormControl.value;
	const familyNameVal = this.familyNameFormControl.value;
	if(bookingCodeVal != '' && familyNameVal != ''){
	  // web service call made to server with booking code and family name as argument
	  this.postCheckinService.validateCheckinForm(bookingCodeVal, familyNameVal).subscribe(posts => {
	    //populating the response after web service call
		this.posts = posts;
		this.validation_errors = [];
		if(this.posts.status === 200){
		  // Redirect the user to success screen
		  this.router.navigate(['/checkin-success']);
		}
		else if(this.posts.status === 400){
		  // Scenario specific error
		  const errors = this.posts.json().errorMsg;
		  //Populating the error array to be displayed as page level error
		  this.validation_errors.push(errors);
		}
	  },
      err => {
        // Generic error
		this.validation_errors.push('Internal server Error');
      });
	}
  }
}
