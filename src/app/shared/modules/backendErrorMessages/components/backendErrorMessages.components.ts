import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorInterface } from "src/app/shared/types/backendErrors.interface";

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backendErrorMessages.components.html',
  styleUrls: ['./backendErrorMessages.components.scss']
})

export class BackendErrorMessagesComponent implements OnInit{
  @Input('backendErrors') backendErrorProps!: BackendErrorInterface;
  // Making INputs more reacable
  // Outside of component we user 'backendErrors'
  // Insinde component 'backendErrors does not exist' but used backendErrorsProps

  errorMessages!: string[];

  ngOnInit(): void {
    console.log(this.backendErrorProps)
    this.errorMessages = Object.keys(this.backendErrorProps.errors).map(
      (name: any) => {
      const messages = this.backendErrorProps.errors[name]
      console.log(messages)
      return `${name} ${messages}`
    })
  }
}
