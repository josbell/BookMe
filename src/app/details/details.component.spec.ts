import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DetailsComponent } from './details.component';
import { By, DebugElement, HTMLElement } from '@angular/platform-browser';

@Component({selector: 'app-datepicker', template: ''})
class DatepickerComponent {}

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent, DatepickerComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    const DetailsDe: DebugElement = fixture.debugElement;
    console.log(DetailsDe);
    const buttonDe: DebugElement = DetailsDe.query(By.css('button'));
    console.log(buttonDe);
    const button: HTMLElement = buttonDe.nativeElement;
    console.log(button);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render description in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(DetailsComponent);
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Welcome to my scheduling page. Please follow the instructions to book me in my calendar.');
  }));

  it('should render button with title "See Dates"', async(() => {
    expect(buttonDe.textContent).toContain('See Dates');
  }));

  // it('should display calendar on See Dates Button click', async(() => {
  //   const fixture = TestBed.createComponent(DetailsComponent);
  //   fixture.detectChanges();
  //   expect(component.showCalendar).toBe(false);
  //   buttonDe.triggerEventHandler('click', null);
  //   expect(component.showCalendar).toBe(true);
  }));

});
