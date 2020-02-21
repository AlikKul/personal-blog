import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { User } from 'src/app/shared/interfaces';
import { AuthService } from '../shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  message = '';
  isLoading = false;

  constructor(
    private router: Router,
    public auth: AuthService,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe((params) => {
      if (params['sessionExpired']) {
        this.message = 'Session expired. Please login again.';
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  submit() {

    this.isLoading = true;

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    };

    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/admin', 'dashboard']);
      this.isLoading = false;
    });
  }

}
