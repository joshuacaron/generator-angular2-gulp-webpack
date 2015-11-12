import {Component, bootstrap} from 'angular2/angular2'

@Component({
  selector: 'app',
  template: `{{message}}`
})
export class AppComponent {
  message: string;

  constructor() {
    var that = this
    that.message = 'Hello World'
  }
}

bootstrap(AppComponent)
