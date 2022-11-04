import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoWorkerTransableDataComponent } from './demo-workerTransableData/demo-workerTransableData.component';
import { DemoWorkerDrawComponent } from './demo-workerDraw/demo-workerDraw.component';
import { workerDexieModule } from './demo-workerDexie/workerDexie.module';
import { DemoWorkerPoolComponent } from './demo-workerPool/demo-workerPool.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoWorkerTransableDataComponent,
    DemoWorkerDrawComponent,
    DemoWorkerPoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    workerDexieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
