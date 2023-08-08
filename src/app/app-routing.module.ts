import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/feature/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'tasks',
    loadChildren: () =>
      import('./task/feature/task-shell/task-shell.module').then(
        (m) => m.TaskShellModule
      ),
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    // RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
