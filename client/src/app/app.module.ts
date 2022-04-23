import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TimelineEventComponent } from './timeline-event/timeline-event.component';
import { EventComponent } from './event/event.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimelineEventComponent,
    EventComponent,
    ScrollToTopComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
<<<<<<< HEAD
=======
    NgbModule
>>>>>>> ab5b35ae961194440a67b574b3a7d3173cfcbf5a
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
