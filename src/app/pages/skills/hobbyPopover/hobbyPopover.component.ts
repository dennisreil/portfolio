import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './hobbyPopover.component.html',
  styleUrls: ['./hobbyPopover.component.scss'],
})
export class HobbyPopoverComponent implements OnInit {

  list = ['Electric Guitar', 'Self-health Reading', 'Theology', 'Philosophy', 'Musicals', 'Theatre', 'Video Games', 'Cooking', 'DIY Porjects', 'Woodwork', 'Running', 'Nature Documentaries', 'Journaling', 'Camping'];
 

  constructor(
    
  ) { }
  ngOnInit(){
  }
}
