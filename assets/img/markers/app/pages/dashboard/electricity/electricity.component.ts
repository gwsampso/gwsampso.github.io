import { Component, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Service, WeekData } from './app.service';



@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
  providers: [Service],
})
export class ElectricityComponent implements OnDestroy {

  data: Array<any>;

  type = 'week';
  types = ['week', 'month', 'year'];

  currentTheme: string;
  themeSubscription: any;
  // customers: Customer[];*
  dataSource: WeekData[];

  constructor(service: Service, private themeService: NbThemeService) {
    this.dataSource = service.getWeekData();

    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  abs(value) {
    return Math.abs(value);
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}

@Pipe({ name: 'gridCellData' })
export class GridCellDataPipe implements PipeTransform {
  transform(gridData: any) {
    return gridData.data[gridData.column.caption.toLowerCase()];
  }
}
