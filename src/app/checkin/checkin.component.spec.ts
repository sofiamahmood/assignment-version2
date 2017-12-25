import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Headers, Http, HttpModule, Response } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule, MatButtonModule, MatSelectModule} from '@angular/material';
import { CheckinLabelService } from '../checkin-label-service';
import { CheckinComponent } from './checkin.component';
describe('CheckinComponent', () => {
  let component: CheckinComponent;
  let fixture: ComponentFixture<CheckinComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule, 
        ReactiveFormsModule, 
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        HttpModule,
        HttpClientModule,
        HttpClient,
        TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useClass: CheckinLabelService,
              deps: [HttpClient]
          }
        }),
        HttpModule
      ],
      declarations: [ CheckinComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
