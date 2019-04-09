import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickCounterDirective } from './directives/clickCounter.directive';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ClickCounterDirective,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyABKIeQURWfMKx--hbR1dkRv1gZW5RG_6U'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
