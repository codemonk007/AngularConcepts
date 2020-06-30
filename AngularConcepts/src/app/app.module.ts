import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChangestratgeyComponent } from './changestratgey/changestratgey.component';
import { ChildchnagestrategyComponent } from './changestratgey/childchnagestrategy/childchnagestrategy.component';
import { SubchildchnagestrategyComponent } from './changestratgey/subchildchnagestrategy/subchildchnagestrategy.component';
import {FormsModule} from '@angular/forms';
import { ClassStyleComponent } from './class-style/class-style.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ChildComponent } from './content-projection/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangestratgeyComponent,
    ChildchnagestrategyComponent,
    SubchildchnagestrategyComponent,
    ClassStyleComponent,
    ContentProjectionComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
