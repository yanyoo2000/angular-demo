import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoWorkerDexieComponent } from './demo-workerDexie/demo-workerDexie.component';
import { DemoWorkerDrawComponent } from './demo-workerDraw/demo-workerDraw.component';
import { DemoWorkerPoolComponent } from './demo-workerPool/demo-workerPool.component';
import { DemoWorkerTransableDataComponent } from './demo-workerTransableData/demo-workerTransableData.component';

const routes: Routes = [
  { path: 'DemoWorkerTransableDataComponent', component: DemoWorkerTransableDataComponent },
  { path: 'DemoWorkerDrawComponent', component: DemoWorkerDrawComponent },
  { path: 'DemoWorkerDexieComponent', component: DemoWorkerDexieComponent },
  { path: 'DemoWorkerPoolComponent', component: DemoWorkerPoolComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
