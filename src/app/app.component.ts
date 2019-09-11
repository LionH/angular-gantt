import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';
import { ChangedEventArgs, NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { projectData, projectResources } from './data';
import { GanttComponent, TimelineViewMode } from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('gantt', {static: true})
  public ganttObj: GanttComponent;
  public yearformat: { [key: string]: string }[] = [
      { id: 'MMM "yy', format: 'Jan "18' },
      { id: 'y', format: '2018' },
      { id: 'MMMM, y', format: 'January, 18' },
  ];
  public monthformat: { [key: string]: string }[] = [
      { id: 'MMM dd, yyyy', format: 'Jan 01, 2018' },
      { id: 'MMMM', format: 'January' },
      { id: 'MMM', format: 'Jan' },
  ];
  public weekformat: { [key: string]: string }[] = [
      { id: 'MMM dd, yyyy', format: 'Jan 01, 2019' },
      { id: 'EEE MMM dd, "yy', format: 'Mon Jan 01, "19' },
      { id: 'EEE MMM dd', format: 'Mon Jan 01' },
  ];
  public dayformat: { [key: string]: string }[] = [
      { id: 'EEE, dd', format: 'Mon, 01' },
      { id: 'E', format: 'Mon' },
      { id: 'dd', format: '01' },
  ];
  public hourformat: { [key: string]: string }[] = [
      { id: 'hh', format: '00' },
      { id: 'hh : mm a', format: '00 : 00 AM' },
      { id: 'h : mm a', format: '0 : 00 AM' },
  ];
  public unit: { [key: string]: string }[] = [
      { id: 'Year', unit: 'Year' },
      { id: 'Month', unit: 'Month' },
      { id: 'Week', unit: 'Week' },
      { id: 'Day', unit: 'Day' },
      { id: 'Hour', unit: 'Hour' }
  ];
  // maps the appropriate column to fields property
  public formatFields: object = { text: 'format', value: 'id' };
  public unitFields: object = { text: 'unit', value: 'id' };
  public unitValue = 'Week';
  public topFormatValue = 'MMM dd, yyyy';
  public bottomUnitValue = 'Day';
  @ViewChild('topFormatDropdown', {static: true})
  public topTierFormatObj: DropDownListComponent;
  @ViewChild('bottomFormatDropdown', {static: true})
  public bottomTierFormatObj: DropDownListComponent;
  @ViewChild('topCount', {static: true})
  public topCountNumericObj: NumericTextBoxComponent;
  @ViewChild('bottomCount', {static: true})
  public bottomCountNumericObj: NumericTextBoxComponent;
  @ViewChild('topUnit', {static: true})
  public topUnitDropdownObj: DropDownListComponent;
  @ViewChild('bottomUnit', {static: true})
  public bottomUnitDropdownObj: DropDownListComponent;
  @ViewChild('unitWidth', {static: true})
  public unitWidthNumericObject: NumericTextBoxComponent;
  public data: object[];
  public resources: object[];
  public taskSettings: object;
  public timelineSettings: object;
  public labelSettings: object;
  public splitterSettings: object;
  public tooltipSettings: object;
  public projectStartDate: Date;
  public projectEndDate: Date;
  public eventMarkers: object[];
  public ngAfterViewInit(): void {

  }

  public ngOnInit(): void {
      this.data = projectData;
      this.taskSettings = {
          id: 'taskID',
          name: 'taskName',
          startDate: 'startDate',
          endDate: 'endDate',
          duration: 'duration',
          progress: 'progress',
          dependency: 'predecessor',
          child: 'subtasks'
      };
      this.timelineSettings = {
          topTier: {
              unit: 'Week',
              format: 'MMM dd, yyyy'
          },
          bottomTier: {
              unit: 'Day',
              count: 1
          },
      };
      this.labelSettings = {
          rightLabel: 'taskName',
      };
      this.splitterSettings = {
          columnIndex: 4
      };
      this.projectStartDate = new Date('07/12/2019'),
      this.projectEndDate = new Date('08/30/2019'),
      this.eventMarkers = [
          {
              day: '07/21/2019',
              label: 'Deliveries'
          }
      ];
      this.resources = projectResources;
  }
  public onUnitWidthChange(args: ChangedEventArgs): void {
      this.ganttObj.timelineSettings.timelineUnitSize = +args.value;
  }
  public onTopTierChange(args: ChangeEventArgs ): void {
      if (args.checked) {
          this.enableDisableTopTierInputs(true);
          this.ganttObj.timelineSettings.topTier.unit = 'Week';
      } else {
          this.enableDisableTopTierInputs(false);
          this.ganttObj.timelineSettings.topTier.unit = 'None';
      }
  }
  public onBottomTierChange(args: ChangeEventArgs ): void {
      if (args.checked) {
          this.enableDisableBottomTierInputs(true);
          this.ganttObj.timelineSettings.bottomTier.unit = 'Day';
      } else {
          this.enableDisableBottomTierInputs(false);
          this.ganttObj.timelineSettings.bottomTier.unit = 'None';
      }
  }
  public onTopCountChange(args: ChangedEventArgs ): void {
      const count: number = +args.value;
      this.ganttObj.timelineSettings.topTier.count = count;
  }
  public onChangeUnit(args: ChangedEventArgs ): void {
      const unit: string = args.value;
      if (unit === 'Year') {
          this.topTierFormatObj.dataSource = this.yearformat;
      } else if (unit === 'Month') {
          this.topTierFormatObj.dataSource = this.monthformat;
      } else if (unit === 'Week') {
          this.topTierFormatObj.dataSource = this.weekformat;
      } else if (unit === 'Day') {
          this.topTierFormatObj.dataSource = this.dayformat;
      } else if (unit === 'Hour') {
          this.topTierFormatObj.dataSource = this.hourformat;
      }
      this.topTierFormatObj.refresh();
      this.updateUnitWidth(unit, 'top');
      this.ganttObj.timelineSettings.topTier.unit = unit as TimelineViewMode;
  }
  public onChangeFormat(args: ChangedEventArgs): void {
      const format: string = args.value;
      this.ganttObj.timelineSettings.topTier.format = format.toString();
  }
  public onBottomCountChange(args: ChangedEventArgs ): void {
    const count: number = +args.value;
    this.ganttObj.timelineSettings.bottomTier.count = count;
  }
  public onChangebtUnit(args: ChangedEventArgs ): void {
      const unit: string = args.value;
      if (unit === 'Year') {
          this.bottomTierFormatObj.dataSource = this.yearformat;
      } else if (unit === 'Month') {
          this.bottomTierFormatObj.dataSource = this.monthformat;
      } else if (unit === 'Week') {
          this.bottomTierFormatObj.dataSource = this.weekformat;
      } else if (unit === 'Day') {
          this.bottomTierFormatObj.dataSource = this.dayformat;
      } else if (unit === 'Hour') {
          this.bottomTierFormatObj.dataSource = this.hourformat;
      }
      this.bottomTierFormatObj.refresh();
      this.updateUnitWidth(unit, 'bottom');
      this.ganttObj.timelineSettings.bottomTier.unit = unit as TimelineViewMode;
  }
  public onChangebtFormat(args: ChangedEventArgs): void {
      const format: string = args.value;
      this.ganttObj.timelineSettings.bottomTier.format = format.toString();
  }
  private enableDisableTopTierInputs(value: boolean): void {
      this.topCountNumericObj.enabled = value;
      this.topUnitDropdownObj.enabled = value;
      this.topTierFormatObj.enabled = value;
  }
  private enableDisableBottomTierInputs(value: boolean): void {
      this.bottomCountNumericObj.enabled = value;
      this.bottomUnitDropdownObj.enabled = value;
      this.bottomTierFormatObj.enabled = value;
  }
  private updateUnitWidth(unit: string, tier: string): void {
      const topUnit: string = tier === 'top' ? unit : this.ganttObj.timelineSettings.topTier.unit;
      const bottomUnit: string = tier === 'bottom' ? unit : this.ganttObj.timelineSettings.bottomTier.unit;
      const units: string[] = ['None', 'Hour', 'Day', 'Week', 'Month', 'Year'];
      let bootomCellUnit: string;
      let unitWidth: number;
      if (units.indexOf(topUnit) === 0 && units.indexOf(bottomUnit) === 0) {
          bootomCellUnit = 'Day';
      } else if (units.indexOf(topUnit) === 0 && units.indexOf(bottomUnit) > 0) {
          bootomCellUnit = bottomUnit;
      } else if (units.indexOf(topUnit) > 0 && units.indexOf(bottomUnit) === 0) {
          bootomCellUnit = topUnit;
      } else if (units.indexOf(topUnit) <= units.indexOf(bottomUnit)) {
          bootomCellUnit = topUnit;
      } else {
          bootomCellUnit = bottomUnit;
      }
      if (bootomCellUnit === 'Year') {
          unitWidth = 2000;
      } else if (bootomCellUnit === 'Month') {
          unitWidth = 300;
      } else if (bootomCellUnit === 'Week') {
          unitWidth = 150;
      } else if (bootomCellUnit === 'Day') {
          unitWidth = 33;
      } else if (bootomCellUnit === 'Hour') {
          unitWidth = 25;
      }
      this.unitWidthNumericObject.value = unitWidth;
  }
}
