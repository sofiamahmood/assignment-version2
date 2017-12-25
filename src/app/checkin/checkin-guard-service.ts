import { RouterModule, Router, CanActivate }   from '@angular/router';
import { PostCheckinService } from "../post-checkin-service"
import { Injectable } from '@angular/core';
@Injectable()
export class CheckinGuardService implements CanActivate  {
  constructor(private postCheckinService: PostCheckinService) {}
  canActivate(): boolean {
    // Guarding the navigation to checkin success screen
  	return this.postCheckinService.getCheckinStatus();
  }
}