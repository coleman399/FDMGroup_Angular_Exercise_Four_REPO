import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capitalize-first-letter',
  templateUrl: './capitalize-first-letter.component.html',
  styleUrls: ['./capitalize-first-letter.component.css']
})
export class CapitalizeFirstLetterComponent implements OnInit {
  userInput: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
