import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { GalleryComponent } from '../gallery/gallery.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
