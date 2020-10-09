class Auth {
    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {object} token
     */
    static setAuth(token:any) {
      window.sessionStorage.setItem('token', JSON.stringify(token));
    }
  
    static removeAuth() {
      window.sessionStorage.removeItem('token');
    }
  
    static getAuth() {
      return window.sessionStorage.getItem('token');
    }
  
    static authenticateUser(user:any) {
      window.sessionStorage.setItem('user', JSON.stringify(user));
    }
  
    /**
     * Check if a user is authenticated - check if a user is saved in Local Storage
     *
     * @returns {boolean}
     */
    static isUserAuthenticated() {
      var flag = false;
      if(window.sessionStorage.getItem('token') !== null) {
          let data : any = window.sessionStorage.getItem('token');
        let auth =  JSON.parse(data);
        if(auth.id){
          flag = true;
        }
      }
      return flag;
      // return window.sessionStorage.getItem('ad_network_auth') !== null && window.sessionStorage.getItem('ad_network_user') !== null;
    }
  
    static removeAuthenticateUser() {
      window.sessionStorage.removeItem('user');
    }
  
    static getUser() {
      const user = window.sessionStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
  }
  
  export default Auth;