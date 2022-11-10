import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Angular';
  // number = 42;
  // array = [2, 3, 4];
  // obj = {a: 1, b: {c: 2}}

  // // Binding
  // img = "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png";
  //
  // constructor() {
  //   setTimeout(()=>{
  //     this.img = "https://cdn.icon-icons.com/icons2/2699/PNG/512/angular_logo_icon_169595.png"
  //   },2000)
  // }

  // //Event Binding
  // inputValue = ''
  // submit = ''
  //
  //   onInput(event: any) {
  //     // console.log("Event", event)
  //     this.inputValue = event.target.value
  //   }
  //   onClick(event:any){
  //   this.submit = this.inputValue
  //     console.log(this.submit);
  //   }


  //Way Binding
  title = ''

  onInput(event:any){
    this.title = event.target.value
  }

}
