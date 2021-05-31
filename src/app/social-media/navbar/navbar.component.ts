import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootcamp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  display: boolean = false;

  ngOnInit(): void {
  }

}
