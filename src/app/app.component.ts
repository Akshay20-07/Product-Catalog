import { Component } from '@angular/core'; //importing component decorator

@Component({               //Decorator
  selector: 'app-root',           //create an instance of the component
  templateUrl: './app.component.html',    //html template for the component
  styleUrls: ['./app.component.css']    // CSS styling 3 metadata
})
export class AppComponent {    //exporting component class
  title = 'angular-project';
}
