import { Component } from '@angular/core';

@Component({
  templateUrl: 'advanced-forms.component.html'
})
export class AdvancedFormsComponent {

  // Datepicker

  public dt:Date = new Date();
  public minDate:Date = void 0;
  public events:Array<any>;
  public tomorrow:Date;
  public afterTomorrow:Date;
  public formats:Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
  public format:string = this.formats[0];
  public dateOptions:any = {
    formatYear: 'YY',
    startingDay: 1
  };
  private opened:boolean = false;

  public constructor() {
    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
    this.events = [
      {date: this.tomorrow, status: 'full'},
      {date: this.afterTomorrow, status: 'partially'}
    ];
  }

  public getDate():number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }

  public today():void {
    this.dt = new Date();
  }

  // todo: implement custom class cases
  public getDayClass(date:any, mode:string):string {
    if (mode === 'day') {
      let dayToCheck = new Date(date).setHours(0, 0, 0, 0);

      for (let i = 0; i < this.events.length; i++) {
        let currentDay = new Date(this.events[i].date).setHours(0, 0, 0, 0);

        if (dayToCheck === currentDay) {
          return this.events[i].status;
        }
      }
    }

    return '';
  }

  public disabled(date:Date, mode:string):boolean {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  }

  public open():void {
    this.opened = !this.opened;
  }

  public clearDate():void {
    this.dt = void 0;
  }

  public toggleMin():void {
    this.dt = new Date(this.minDate.valueOf());
  }

  // Timepicker

  public hstep:number = 1;
  public mstep:number = 15;
  public ismeridian:boolean = true;
  public isEnabled:boolean = true;

  public mytime:Date = new Date();
  public options:any = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  public toggleMode():void {
    this.ismeridian = !this.ismeridian;
  };

  public update():void {
    let d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    this.mytime = d;
  };

  public changed():void {
    console.log('Time changed to: ' + this.mytime);
  };

  public clear():void {
    this.mytime = void 0;
  };

  // ng2-select

  items: Array<any> = [
    { id: 1, text: 'Option #1' },
    { id: 2, text: 'Option #2' },
    { id: 3, text: 'Option #3' },
  ];

  items_multiple: Array<any> = [
    { id: 1, text: 'Option #1' },
    { id: 2, text: 'Option #2' },
    { id: 3, text: 'Option #3' },
    { id: 4, text: 'Option #4' },
    { id: 5, text: 'Option #5' },
    { id: 6, text: 'Option #6' },
    { id: 7, text: 'Option #7' },
    { id: 8, text: 'Option #8' },
    { id: 9, text: 'Option #9' },
    { id: 10, text: 'Option #10' },
  ];
}
