import { Component, OnInit} from '@angular/core';
import { HondenloopService } from 'src/app/services/hondenloop.service';
import { ZitmeubilairService } from 'src/app/services/zitmeubilair.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude : number;
  longitude: number;
  maplatitude: number = 51.2194475;
  maplongitude:number = 4.4024643;

  rings: Array<{lat:number,lng: number}>;
  zoom: number = 13;
  locationChosen = false;
  
  lngA:number = 4.433205316172584;
  latA:number = 51.19369285717645;
  lngB:number = 4.432964157094027;
  latB:number = 51.19352268416171;
  lngC:number = 4.4328886652754615;
  latC:number = 51.19345530567168;
  lngD:number = 4.432847750934811;
  latD:number = 51.1934535591772;
  lngE:number = 4.432795724998887;
  latE:number = 51.19346448712747;
  lngF:number = 4.43278249729721;
  latF:number = 51.19346449437332;
  lngG:number = 4.4327957909001405;
  latG:number = 51.19351198224679;
  lngH:number = 4.432926783827302;
  latH:number = 51.19382494157612;

  constructor(private hondenloopService: HondenloopService, private zitMeubilairService: ZitmeubilairService) {    
   }   

  ngOnInit() { 
    /* this.maplatitude =  51.2194475;
    this.maplongitude = 4.4024643; */
    this.latitude = this.zitMeubilairService.lat;
    this.longitude = this.zitMeubilairService.lng;
    this.rings = this.hondenloopService.rings;
    console.log(this.rings);
    this.zoom; 
  }

  gekozenLocatie(event){
    this.latitude = event.coords.lat; 
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }  
}
