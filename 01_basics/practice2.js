class User {
    constructor(username, email){
        this._username = username,
        this._email = email 
    }
    get username(){
        return this._username.toUpperCase
    };
    set username(value){
        this._username = value
    }

}