import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wishlist-av',
  templateUrl: './av.component.html',
  styleUrls: ['./av.component.scss']
})
export class AVComponent implements OnInit {
  markdownFile = 'assets/wishlist/av.md';

  constructor() { }

  ngOnInit() {
  }

}
