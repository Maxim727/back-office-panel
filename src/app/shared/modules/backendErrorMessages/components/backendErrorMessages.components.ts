import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorInterface } from "src/app/shared/types/backendErrors.interface";

@Component({
  selector: 'mc-backend-error-messages',
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
    this.errorMessages = Object.keys(this.backendErrorProps).map((name: string) => {
      const messages = this.backendErrorProps[name].join(', ')
      return `${name} ${messages}`
    })
  }
}



// Добрый день!
// Можно будет добавить дополнительный вид деятельности по ОКВЭД на свое ИП и вести ещё свой бизнес?
// Налоги я буду расчитьывать естественно отдельно ЗП от Новео и свои личные
