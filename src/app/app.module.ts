import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './components/map/map.component';
import { HondenloopService } from './services/hondenloop.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButton, MatSelectModule, MatOptionModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app.routing';
import { ZitmeubilairService } from './services/zitmeubilair.service';
import { HondenloopComponent } from './components/hondenloop/hondenloop.component';
import { ZitmeubilairComponent } from './components/zitmeubilair/zitmeubilair.component';


const appRoutes: Routes = [
  {path: '', component:ZitmeubilairComponent},
  {path: 'home', component: ZitmeubilairComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavbarComponent,
    HondenloopComponent,
    ZitmeubilairComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpcz4zxy3kX5Ao61RezEjKkjtOKs0t9-w'
    }),
    MatSelectModule,
    MatOptionModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule  
    
  ],
  providers: [
    HondenloopService,
    ZitmeubilairService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
