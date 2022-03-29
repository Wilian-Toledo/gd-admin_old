import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ringgroups-create',
  templateUrl: './ringgroups-create.component.html',
  styleUrls: ['./ringgroups-create.component.css']
})
export class RinggroupsCreateComponent implements OnInit {

  ringgroups:any={}
  constructor() { }

  ngOnInit(): void {
  }
  
  save(){}
}
