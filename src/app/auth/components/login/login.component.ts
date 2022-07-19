import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrorInterface } from 'src/app/shared/types/backendErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import { loginAction } from '../../store/actions/login.action';
import { isSubmittingSelector, validationErrorSelector } from '../../store/selectors';
import { loginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../backgroundAnim.scss']
})

export class LoginComponent {
  form: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorInterface | null>;

  constructor(private fb: FormBuilder,
              private store: Store,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()

  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: '',
      password: ''
    })
  }

  onSubmit() {
    const request: loginRequestInterface = {
      user: this.form.value
    }

    this.store.dispatch(loginAction({request}))

    // this.authService.register(this.form.value).subscribe((currentUser: CurrentUserInterface) => {
    //   console.log(currentUser, 'onSubmitCurrentUser')
    // })
  }
}
