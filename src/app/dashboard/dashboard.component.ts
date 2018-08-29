import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    data: any;
    data2: any;

    teste: Array<any> = [10, 20, 30, 50];

    constructor() {
        this.graficos();
    }

    ngOnInit() {

    }

    graficos() {
        this.data = {
            labels: ['Ponto de Venda A', 'Ponto de Venda B', 'Ponto de Venda C', 'Ponto de Venda D'],
            datasets: [
                {
                    data: [this.teste[0], this.teste[1], this.teste[2], this.teste[3]],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        'blue'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        'blue'
                    ]
                }]
        };

        this.data2 = {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
            datasets: [
                {
                    label: 'Vendas por mês',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 68, 56, 72, 40, 33]
                },
                /*{
                    label: 'Vendas Cartão',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }*/
            ]
        };
    }

}
