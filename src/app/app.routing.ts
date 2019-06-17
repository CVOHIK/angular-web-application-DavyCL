import { Routes, RouterModule } from "@angular/router";
import { MapComponent } from './components/map/map.component';
import { HondenloopComponent } from './components/hondenloop/hondenloop.component';
import { ZitmeubilairComponent } from './components/zitmeubilair/zitmeubilair.component';
import { NgModule } from '@angular/core';

const APP_ROUTES: Routes = [   
    {path : '', component:ZitmeubilairComponent}, 
    {path: 'hondenloop', component:HondenloopComponent},
    {path: 'zitmeubilair', component:ZitmeubilairComponent},
    {path: 'map', component:MapComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}