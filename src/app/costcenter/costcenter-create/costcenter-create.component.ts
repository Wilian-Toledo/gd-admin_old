import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costcenter-create',
  templateUrl: './costcenter-create.component.html',
  styleUrls: ['./costcenter-create.component.css']
})
export class CostcenterCreateComponent implements OnInit {

  costcenter:any={}
  constructor() { }

  ngOnInit(): void {
  }

  save(){}
}
