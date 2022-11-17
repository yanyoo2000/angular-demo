import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { DemoWorkerDexieComponent } from './demo-workerDexie/demo-workerDexie.component';
import { DemoWorkerDrawComponent } from './demo-workerDraw/demo-workerDraw.component';
import { DemoWorkerTransableDataComponent } from './demo-workerTransableData/demo-workerTransableData.component';

const routes: Routes = [
  { path: 'DemoWorkerTransableDataComponent', component: DemoWorkerTransableDataComponent },
  { path: 'DemoWorkerDrawComponent', component: DemoWorkerDrawComponent },
  { path: 'DemoWorkerDexieComponent', component: DemoWorkerDexieComponent },
  { path: 'DemoFormComponent', component: DemoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
