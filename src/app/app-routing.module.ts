import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: 'currency', loadChildren: () => import('./currency/currency.module').then(m => m.CurrencyModule) },
{ path: 'music', loadChildren: () => import('./music/music.module').then(m => m.MusicModule) },
{ path: 'sandbox', loadChildren: () => import('./sandbox/sandbox.module').then(m => m.SandboxModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
