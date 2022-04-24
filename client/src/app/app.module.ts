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
import { HttpClientModule } from '@angular/common/http';
import { AppearDirective } from './appear-on-screen.directive';
import { TimelineEventContentComponent } from './timeline-event-content/timeline-event-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimelineEventComponent,
    EventComponent,
    ScrollToTopComponent,
    AppearDirective,
    TimelineEventContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
