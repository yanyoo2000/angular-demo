import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { DemoWorkerDexieComponent } from "./demo-workerDexie.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        DemoWorkerDexieComponent
    ],
    imports: [
        FormsModule,
        BrowserModule
    ]
})
export class workerDexieModule { }