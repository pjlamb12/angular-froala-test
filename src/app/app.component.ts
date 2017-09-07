import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public froalaText: string = 'Starting text';

    seeContent() {
      console.log(this.froalaText);
    }
}
