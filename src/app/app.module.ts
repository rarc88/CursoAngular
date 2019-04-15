import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickCounterDirective } from './directives/clickCounter.directive';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { FrameworksService } from './services/frameworks.service';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { LinkifystrPipe } from './pipes/linkifystr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ClickCounterDirective,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    DetailComponent,
    CreateComponent,
    LinkifystrPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyABKIeQURWfMKx--hbR1dkRv1gZW5RG_6U'
    }),
    FormsModule,
    HttpClientModule
  ],
  providers: [FrameworksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
