import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './bioPopover.component.html',
  styleUrls: ['./bioPopover.component.scss'],
})
export class BioPopoverComponent implements OnInit {

  bio=['hello world'];
  
  constructor() { }
  ngOnInit() {}
}
