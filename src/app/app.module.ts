import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmitterExample_Component1 } from './components/event-emitters/component1.component';
import { EmitterExample_Component2 } from './components/event-emitters/component2.component';
import { ServiceExample_Component1 } from './components/service/component1.component';
import { ServiceExample_Component2 } from './components/service/component2.component';
import { CustomService } from './components/service/custom.service';

@NgModule({
  declarations: [
    AppComponent,
    ServiceExample_Component1,
    ServiceExample_Component2,
    EmitterExample_Component1,
    EmitterExample_Component2,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CustomService],
  bootstrap: [AppComponent],
})
export class AppModule {}
