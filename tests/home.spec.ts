import { DebugElement }    from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';

import { HomeComponent } from '../app/home.component';

describe('HomeComponent', () => {
  let comp:    HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(HomeComponent);
    comp    = fixture.componentInstance; // HomeComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
  });

  it('should display a different test title', () => {
    expect(el.textContent).toContain('Home');
  });

});
