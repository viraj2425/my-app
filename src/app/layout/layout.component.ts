import { Component } from '@angular/core';
import { NavbarComponent } from "../component/navbar/navbar.component";
import { FooterComponent } from "../component/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "../component/main/main.component";

@Component({
  selector: 'app-layout',
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
