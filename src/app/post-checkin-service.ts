import { Injectable } from '@angular/core';
import { Headers, Http, HttpModule, Response,  RequestOptions } from "@angular/http";
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
@Injectable()
export class PostCheckinService {
	headers: Headers;
  options: RequestOptions;
  // flag to watch checkin status
	checkinStatus: boolean = false;
  constructor(private http: Http) {
	  this.headers = new Headers({ 'Content-Type': 'application/json' });
  }
  //service to perform server side form validation
  validateCheckinForm(bookingCodeVal, familyNameVal): Observable <any> {
		const config = { bookingCode: bookingCodeVal, familyName: familyNameVal };
		  this.options = new RequestOptions({ headers: this.headers, search: config });
        return Observable.create(observer => {
          // web service call to server with search params
          this.http.get('/api/posts',this.options).subscribe((res: Response) => {
            this.checkinStatus = true;
            // returning response to subscriber
            observer.next(res);
            // notifies subscriber that observable has finished sending notifications
            observer.complete();   
          },
          err => {
            this.checkinStatus = false;
  				  observer.next(err);
            // notifies subscriber that observable has finished sending notifications
            observer.complete();
  			  });
        });     
  }
  // method to return checkin status
  getCheckinStatus(): boolean{
    return this.checkinStatus;
  }
}