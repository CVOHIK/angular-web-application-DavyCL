import { Component, OnInit } from '@angular/core';
import { HondenloopService } from 'src/app/services/hondenloop.service';
import { ZitmeubilairService } from 'src/app/services/zitmeubilair.service';
import { ZitmeubilairComponent } from '../zitmeubilair/zitmeubilair.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  latitude : number;
  longitude: number;
  zoom: number = 10;
  locationChosen = false;
  zitmeubilairService: ZitmeubilairService;

  constructor(private hondenloopService: HondenloopService, private zitMeubilairService: ZitmeubilairService) {
    this.latitude = this.zitMeubilairService.getMarkerlat();
    this.longitude = this.zitMeubilairService.getMarklong();
    console.log(this.latitude);
    console.log(this.longitude);
   }

  ngOnInit() {
    this.latitude =  51.2194475;
    this.longitude = 4.4024643;
    this.zoom;
  }

  OnChosenLocation(event){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }
  
}
