import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../tasks-list/tasks-list.module').then((m) => m.TasksListModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../task-detail/task-detail.module').then(
        (m) => m.TaskDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskShellRoutingModule {}
