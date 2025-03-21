import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  constructor() { }

  @Input() name: any;
  @Input() image: any;
  @Input() techs: any;
  @Input() links: any;
  @Input() description: any;

  ngOnInit() {
  }

}
