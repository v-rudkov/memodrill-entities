export interface UserProperties {
    username?: string;
    email?: string;
    password?: string;
} 
  
export class User {
    constructor(args: UserProperties){
        Object.assign(this, args);
    }
}
