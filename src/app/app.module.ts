import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { MatInputModule, MatButtonModule, MatSelectModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule, Validator} from '@angular/forms';
import { FormControl, NgForm, Validators} from '@angular/forms';
import { CheckinLabelService } from './checkin-label-service';
import { Headers, Http, HttpModule, Response } from '@angular/http';
import { PostCheckinService } from './post-checkin-service';
import { CheckinGuardService } from './checkin/checkin-guard-service';
import { AppComponent } from './app.component';
import { CdkTableModule} from '@angular/cdk/table';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckinSuccessComponent } from './checkin/checkin-success.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    CheckinComponent,
    CheckinSuccessComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    HttpModule,
	  TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CheckinLabelService,
        deps: [HttpClient]
      }
  }),
  AppRoutingModule
  ],
  providers: [PostCheckinService, CheckinGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
