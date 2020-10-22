import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './skillsPopover.component.html',
  styleUrls: ['./skillsPopover.component.scss'],
})
export class SkillsPopoverComponent implements OnInit {

  soft = [ 'Communication', 'Problem-Solving', 'Team Oriented', 'Time-Awareness', 'Prioritization', 'Accountablility', 'Dependability', 'Goal Setter', 'Adaptability', 'Flexibility', 'Teachable','Approachable', 'Stress Self-Management'];

  hard = ['JavaScript','React','Angular','Node.js','SQL','NoSQL', 'Ionic', 'Heroku', 'AWS', 'Terminal Navigation'];

  constructor(
    
  ) { }
  ngOnInit() {}
}
