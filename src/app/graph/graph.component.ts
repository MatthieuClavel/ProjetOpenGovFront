import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  updateFromInput = false;
  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Situation financière'
    },
    subtitle: {
      text: 'Par période'
    },
    xAxis: {
      categories: ['2018', '2017', '2016', '2015', '2014', '2013',
        '2012']
    },
    yAxis: {
      title: {
        text: 'Données financières'
      },
      ceiling: 10000000000000000000,
      floor: -200
    },
    tooltip: {
      valueSuffix: '€'
    },
    series: [
      {
        name: 'Dettes financières',
        // tslint:disable-next-line:max-line-length
        data: [17806604.59, 1710670.10167633, 1646760.4394069999, 1601614.4214775898, 1550964.28917765, 1481338.40831529, 1412144.23187181]
      },
      {
      },
      {
        name: 'Dettes non financières',
        // tslint:disable-next-line:max-line-length
        data: [17806604294.59, 17108880.10167633, 16421210.4394069999, 1222614.4214775898, 1558964.28917765, 147438.40831529, 1496344.23187181]
      },
      {
        name: 'PIB',
        data: [2091100000, 2115700000, 2141100000, 2181100000, 2228900000, 2291700000, 2282800000]
      }
    ]
  };
  stockChart: any;

  constructor(
  ) { }

  ngOnInit() {
  }

  erase() {
    setTimeout(
      () => {
        this.chartOptions.series = [];
        this.updateFromInput = true;
      }
      , 500);


  }

  public add(): void {


    setTimeout(
      () => {

        this.chartOptions.series.push(

          {
            name: 'PIB',
        data: [2091100000, 2115700000, 2141100000, 2181100000, 2228900000, 2291700000, 2282800000]
          }

        );
        this.updateFromInput = true;
      }, 500);

    }

  }
