import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserProfile } from './data/user-profile.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
 
  private profileData: UserProfile = null;
  constructor(private httpClient: HttpClient) { }

  getProfile(): Promise<any>{
    // console.log("getProfile called");
    return new Promise((resolve, reject) => {
        this.httpClient
            .get<UserProfile>('api/userprofile')
            .subscribe((profileData:UserProfile) => {
                // console.log("Profile data retrieved from API");
                this.profileData = profileData;
                // console.log(profileData);
                resolve(true);
            }, reject);
    })

  }
}