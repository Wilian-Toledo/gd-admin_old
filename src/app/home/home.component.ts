import { Component, OnInit } from '@angular/core';  
import { Chart, ChartDataSets, ChartType, ChartOptions } from 'chart.js';  
import { HttpClient } from '@angular/common/http';
import { Label } from 'ng2-charts';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    
    constructor() { }

    ngOnInit() {
        this.requestNotification();
    }

    requestNotification(){
        Notification.requestPermission();
    }
    
    notificar(){
        if (Notification.permission === 'granted') {
            new Notification("Apenas um teste de notificação", {
            body: "Isso é um teste"
            });
        }
    }

}
