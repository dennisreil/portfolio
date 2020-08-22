import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  soft = [ 'Communication', 'Problem-Solving', 'Team Oriented', 'Time-Awareness', 'Prioritization', 'Accountablility', 'Dependability', 'Goal Setter', 'Adaptability', 'Flexibility', 'Teachable','Approachable', 'Stress Self-Management'];
  hard = ['JavaScript','React','Angular','Node.js','SQL','NoSQL', 'Ionic', 'Heroku', 'AWS', 'Terminal Navigation'];
  constructor() { }

  ngOnInit() {}
}
