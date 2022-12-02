import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoWorkerTransableDataComponent } from './demo-workerTransableData/demo-workerTransableData.component';
import { DemoWorkerDrawComponent } from './demo-workerDraw/demo-workerDraw.component';
import { workerDexieModule } from './demo-workerDexie/workerDexie.module';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { DemoQRCodeComponent } from './demo-QRCode/demo-QRCode.component';
import { QRCodeModule } from 'angularx-qrcode';
@NgModule({
  declarations: [
    AppComponent,
    DemoWorkerTransableDataComponent,
    DemoWorkerDrawComponent,
    DemoFormComponent,
    DemoQRCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    workerDexieModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
