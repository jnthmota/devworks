import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient, 
    public jwtHelper: JwtHelperService,
    private notification: ToastrService
    ) {
  }

  async login(user): Promise<boolean> {
    return this.http.post(environment.apiUrl + '/auth/login', user)
      .toPromise()
      .then(response => {
        localStorage.setItem("token", (<any>response).access_token);
        return true;
      })
      .catch(response => {
        if(response.status == 401){
          this.notification.error("Usuário ou senha inváidos", "Autentificação");
        }else{
          this.notification.error("Houve um problema com o nosso sistema", "Autentificação");
        }
        return Promise.reject(response);
      });
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
