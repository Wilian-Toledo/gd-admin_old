import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conferences-create',
  templateUrl: './conferences-create.component.html',
  styleUrls: ['./conferences-create.component.css']
})
export class ConferencesCreateComponent implements OnInit {

  conferences:any={}
  constructor() { }

  ngOnInit(): void {
  }

  save(){}

}
