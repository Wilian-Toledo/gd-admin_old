import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-create',
  templateUrl: './modules-create.component.html',
  styleUrls: ['./modules-create.component.css']
})
export class ModulesCreateComponent implements OnInit {

  modules:any={}
  constructor() { }

  ngOnInit(): void {
  }

  save(){}
}
