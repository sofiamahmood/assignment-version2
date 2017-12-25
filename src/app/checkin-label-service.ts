import { Injectable } from '@angular/core';
import { Headers, Http, HttpModule, Response } from "@angular/http";
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable'; 
@Injectable()
// customm translate loader class to fetch language specific json data
export class CheckinLabelService implements TranslateLoader  {
  // declaring the required headers to be passed with req object
  contentHeader = new Headers({'Content-Type': 'application/json',
  'Access-Control-Allow-Origin' : '*'});
  constructor(private http: Http) {}
  getTranslation(lang: string): Observable <any> {
    // api address to fetch langauge specific json data
    const apiAddress = './assets/i18n/' + lang + '.json';
    return Observable.create(observer => {
      this.http.get(apiAddress, { headers: this.contentHeader }).subscribe((res: Response) => {
        // returning response to subscriber
        observer.next(res);
        // notifies subscriber that observable has finished sending notifications
        observer.complete();          
      },
      error => {
        //  fetch english data
        this.http.get('./assets/i18n/en.json').subscribe((res: Response) => {
          // returning response to subscriber
          observer.next(res);
          // notifies subscriber that observable has finished sending notifications
          observer.complete();         
        })
      });
    }); 
  }
}