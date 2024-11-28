import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SweetalertService } from './sweetalert.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private router: Router,
    private swa: SweetalertService
  ) { }

  SetSessionStorage(user:Object, token:string) {
    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('token', token);
  }

  CleanSessionStorage(){
    sessionStorage.clear();
  }

  GetToken() {
    return sessionStorage.getItem("token");
  }

  GetUser() {
    return sessionStorage.getItem('user');
  }

  Logout() {
    sessionStorage.clear();
  }

  GetPermissions(moduleId:number) {
    let user:any = this.GetUser();
    user = JSON.parse(user);
    let permissions = user.profile?.permissions ? user.profile?.permissions: [];
    let permission: any = {};

    for (let i = 0; i < permissions.length; i++) {
      if(permissions[i].moduleId == moduleId){
        for (let j = 0; j < permissions[i].privileges.length; j++) {
          permission[permissions[i].privileges[j].method] = permissions[i].privileges[j].active;
        }
      }
    }
    
    return permission;
  }

  CheckError (error:any) {
    if (error.status === 401 && error.message === 'Tu sesión ha expirado.' || error.status === 401 && error.message === 'Token no válido.') {
      setTimeout(() => {
        this.swa.info('Sesión cerrada', 'Por seguridad cerramos tu sesión, por favor vuelve a ingresar.', (res:Boolean) => {
          if (res) this.router.navigateByUrl('/login');
        });
      }, 300);
    } else {
      this.swa.error("Ocurrió un error en el servidor", error.message ? error.message : error.error);
    }
  }
}
