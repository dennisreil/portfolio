import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './projPopover.component.html',
  styleUrls: ['./projPopover.component.scss'],
})
export class ProjPopoverComponent implements OnInit {


  timely= [
    {
    description: [
      'React App that estimates sales and labor cost'
      ]
    },
    {
    url: [
      'timely URL'
      ]
    }
  ];

  ebook= [
      {
      description: [
        'Angular App emulating and E-Book with navigation'
        ]
      },
      {
      url: [
        'ebook URL'
        ]
      }
    ];

  constructor() { }

  timelyUrl(){ window.open('https://github.com/dennisreil/timely', '_system'); }

  ebookUrl(){ window.open('https://github.com/dennisreil/E-Book', '_system'); }

  ngOnInit() {}
}
