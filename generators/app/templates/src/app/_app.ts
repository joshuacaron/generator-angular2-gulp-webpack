import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core'

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
