import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the QuickCert logo', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.logo').textContent).toContain('QuickCert');
  });

  it('should have navigation links', () => {
    const compiled = fixture.nativeElement;
    const navLinks = compiled.querySelectorAll('.nav-link');
    expect(navLinks.length).toBe(5); // Home, Services, About, Contact, FAQ
  });

  it('should have a hero section with heading', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.hero h1')).toBeTruthy();
    expect(compiled.querySelector('.hero h1').textContent).toContain('Income Statement Certification');
  });

  it('should have three process steps', () => {
    const compiled = fixture.nativeElement;
    const steps = compiled.querySelectorAll('.step');
    expect(steps.length).toBe(3);
  });

  it('should have a footer with copyright', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.copyright').textContent).toContain('2025');
    expect(compiled.querySelector('.copyright').textContent).toContain('QuickCert');
  });

  // Testing component methods
  it('should log message when getStarted is called', () => {
    spyOn(console, 'log');
    component.getStarted();
    expect(console.log).toHaveBeenCalledWith('Get Started button clicked');
  });

  it('should log message when learnMore is called', () => {
    spyOn(console, 'log');
    component.learnMore();
    expect(console.log).toHaveBeenCalledWith('Learn More button clicked');
  });

  it('should log message when downloadPdf is called', () => {
    spyOn(console, 'log');
    component.downloadPdf();
    expect(console.log).toHaveBeenCalledWith('Download PDF button clicked');
  });

});
