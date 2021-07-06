import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex-pipes';

  carPlate: string = "";

  phoneBR: string = "";
  phoneUS: string = "";

  nameAbnt: string = "";
  nameListAbnt: string = "";
}
