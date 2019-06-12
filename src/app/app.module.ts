import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { HondenloopComponent } from './components/hondenloop/hondenloop.component';
import { ZitmeubilairComponent } from './components/zitmeubilair/zitmeubilair.component';
import { ZitmeubilairService } from './services/zitmeubilair.service';
import { HondenloopService } from './services/hondenloop.service';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes : Routes =[
  { path : 'home',component:MapComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HondenloopComponent,
    ZitmeubilairComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpcz4zxy3kX5Ao61RezEjKkjtOKs0t9-w'
    })
  ],
  providers: [
    ZitmeubilairService,
    HondenloopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
