import { Component, OnInit} from '@angular/core';
import { HondenloopService } from 'src/app/services/hondenloop.service';
import { ZitmeubilairService } from 'src/app/services/zitmeubilair.service';
import { google } from '@agm/core/services/google-maps-types';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  latitude : number;
  longitude: number;
  zoom: number = 11;
  locationChosen = false;
  markers : [];

  constructor(private hondenloopService: HondenloopService, private zitMeubilairService: ZitmeubilairService) {    
   }   

  ngOnInit() {
    this.latitude = 51.2194475;
    this.longitude = 4.4024643;
    this.zoom;
    this.markers = [];
  }

  OnChosenLocation(event){
    this.latitude = event.coords.lat; 
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  ZitmeubilairMarkerPlaatsen(){
   this.markers = this.zitMeubilairService.getZitmeubilairMarker();
   console.log(this.markers);
  }

  HondenloopMarkerPlaatsen(){
    console.log(this.hondenloopService.getHondenloopMarker());
  }
}
