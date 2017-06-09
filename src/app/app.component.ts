import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedImage = "../../assets/images/000001.jpg";

  onSelectedImage(image: string){
    this.selectedImage = "../../assets/images/" + image + ".jpg";
  }
}
