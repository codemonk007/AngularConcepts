import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChangestratgeyComponent } from './changestratgey/changestratgey.component';
import { ChildchnagestrategyComponent } from './changestratgey/childchnagestrategy/childchnagestrategy.component';
import { SubchildchnagestrategyComponent } from './changestratgey/subchildchnagestrategy/subchildchnagestrategy.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChangestratgeyComponent,
    ChildchnagestrategyComponent,
    SubchildchnagestrategyComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
