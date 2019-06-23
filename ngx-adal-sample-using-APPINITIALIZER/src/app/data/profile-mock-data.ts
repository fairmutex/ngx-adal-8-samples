import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserProfile } from './user-profile.model';



export class UserProfileData implements InMemoryDbService {

    createDb() {
        const userprofile: UserProfile = 
        {
            "id": 1,
            "role": "Administrator",
        }
        return { userprofile };
    }
}