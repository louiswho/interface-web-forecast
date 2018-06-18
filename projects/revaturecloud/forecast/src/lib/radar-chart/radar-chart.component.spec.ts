import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts';


import { RadarChartComponent } from './radar-chart.component';

describe('RadarChartComponent', () => {
  let component: RadarChartComponent;
  let fixture: ComponentFixture<RadarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadarChartComponent ],
      imports: [ChartsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should call the chartClicked method when clicked', () => {

    let spy = spyOn(component, 'chartClicked');
    fixture.detectChanges();
    let chart = fixture.nativeElement.querySelector('canvas');

    chart.click();

    expect(spy).toHaveBeenCalled();
  });

  xit('should call the chartHovered method when hovered', () => {

    let spy = spyOn(component, 'chartHovered');
    fixture.detectChanges();
    let chart = fixture.nativeElement.querySelector('canvas');
    let event =  new Event('chartHover');

    chart.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();

  })
});