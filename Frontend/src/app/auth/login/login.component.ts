import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../shared/services/http.service';
import { SessionService } from '../../shared/services/session.service';
import { SweetalertService } from '../../shared/services/sweetalert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  @ViewChild("emailLogin") emailLogin!: ElementRef;
  loginForm:any = FormGroup;
  band: any = {
    submit: false
  }

  constructor(
    private formBuilder: FormBuilder,
    private swal: SweetalertService,
    private http: HttpService,
    private session: SessionService,
    public router: Router
  ) {}

  ngAfterViewInit() {
    setTimeout(()=>{
      this.emailLogin.nativeElement.focus();
    },0); 
  }

  ngOnInit() {
    this.initForm();
    this.session.CleanSessionStorage();
  }

  login() {
    this.band.submit = true;
    if (!this.loginForm.valid) return;

    this.swal.loading("Iniciando sesión...", "Espere un momento");
    this.http.HTTP_POST("/v1/login", this.loginForm.value)
      .subscribe((res:any) => {
        this.swal.close();
        this.swal.toastSuccess(`Bienvenido ${res?.user?.name}`);
        res.user["profile"] = res.profile;
        this.session.SetSessionStorage(res.user, res.token);
        this.router.navigate(["/app/crm/dashboard"]);
      }, (err:any) => {
        this.swal.info('Autenticación fallida', err.message);
      });
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    })
  }
}
