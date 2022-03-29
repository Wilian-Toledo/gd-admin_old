import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {

  role:any={}
  constructor() { }

  ngOnInit(): void {
  }
  
  save(){}
}
