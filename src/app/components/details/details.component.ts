import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{
  @Input() characterId: string = "";


  ngOnInit() {
    console.log(this.characterId);
  }
}
