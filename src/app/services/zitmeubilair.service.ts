import { Injectable } from '@angular/core';
import { UrlConfig } from '../config/Urlconfig';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Zitmeubilair } from '../interface/zitmeubilair';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ZitmeubilairService {

  zitmeubilair : Zitmeubilair[];
  latitude: number;
  longitude: number;
  marker: Array<{latitude: number, longitude : number}> = [];
  
  

  constructor(private http : HttpClient) { 
    this.zitmeubilair = [];
  }

  getZitMeubilair() : Observable<Zitmeubilair[]>{
    return this.http.get<[Zitmeubilair]>(UrlConfig.zitmUrl)
    .pipe(map((res) => {  
        this.zitmeubilair = res["features"]
        return res["features"];
      })
    );
  }

  getZitmeubilairMarker(): any{
    this.marker.pop()
    this.marker.push({latitude : +localStorage.getItem('latitude'), longitude: +localStorage.getItem('longitude')});
    return this.marker;
  }
 

  setZitmeubilairMarker(latitude: number, longitude: number){
    localStorage.setItem('latitude', latitude.toString())
    localStorage.setItem('longitude', longitude.toString())
  }
}
