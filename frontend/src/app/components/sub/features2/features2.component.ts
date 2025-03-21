import { Component, Input, ElementRef, ViewChildren, QueryList, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-features2',
  templateUrl: './features2.component.html',
  styleUrl: './features2.component.css'
})
export class Features2Component implements AfterViewInit {
  @Input()
  feature3Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  feature1ImgAlt: string = 'feature 1'
  @Input()
  feature1Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  feature3ImgAlt: string = 'image'
  @Input()
  feature4ImgAlt: string = 'image'
  @Input()
  feature5ImgAlt: string = 'image'
  @Input()
  feature2Title: string = 'Instant Copyright Check'
  @Input()
  feature1Title: string = 'Feature #1'
  @Input()
  feature1ImgSrc: string =
    'Protecting Your Revenue.png'
  @Input()
  feature3ImgSrc: string =
    'Avoid Copyright Strikes.png'
  @Input()
  feature4ImgSrc: string =
    'Maintain Creative Control.png'
  @Input()
  feature5ImgSrc: string =
    'Save Your Channel Performance.png'
  @Input()
  feature2Description: string =
    'Enter the YouTube video link or the name of the music to instantly check its copyright status.'
  @Input()
  feature3Title: string = 'Feature #3'
  @Input()
  feature2ImgAlt: string = 'Illustration of a music note with a checkmark'
  @Input()
  feature2ImgSrc: string =
    'Legal Protection.png'
  activeTab = 0;
  
  @ViewChildren('section1, section2, section3, section4, section5')
  sections!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const sectionElements = this.sections.toArray();
    
    sectionElements.forEach((section, index) => {
      const rect = section.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top >= 0 && rect.top <= windowHeight * 0.5) {
        this.activeTab = index;
      }
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
