import {Component, OnInit} from '@angular/core'
import {
  Form,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {BackendErrorInterface} from 'src/app/shared/types/backendErrors.interface'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {AuthService} from '../../services/auth.service'
import {registerAction} from '../../store/actions/register.action'
import {
  isSubmittingSelector,
  validationErrorSelector,
} from '../../store/selectors'
import {registerRequestInterface} from '../../types/registerRequest.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../backgroundAnim.scss'],
})
export class RegisterComponent implements OnInit {
  form!: UntypedFormGroup
  isSubmitting$!: Observable<boolean>
  backendErrors$!: Observable<BackendErrorInterface | null>

  constructor(
    private fb: UntypedFormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorSelector))
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    })
  }

  onSubmit() {
    const request: registerRequestInterface = {
      user: this.form.value,
    }

    this.store.dispatch(registerAction({request}))

    // this.authService.register(this.form.value).subscribe((currentUser: CurrentUserInterface) => {
    //   console.log(currentUser, 'onSubmitCurrentUser')
    // })
  }
}
