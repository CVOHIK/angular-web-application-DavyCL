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
  marker: [];

  constructor(private http : HttpClient) { 
    this.zitmeubilair = [];
    this.marker = [];
  }

  getZitMeubilair() : Observable<Zitmeubilair[]>{
    return this.http.get<[Zitmeubilair]>(UrlConfig.zitmUrl)
    .pipe(map((res) => {  
        this.zitmeubilair = res["features"]
        return res["features"];
      })
    );
  }

  getMarkerlat(): number{
    return +localStorage.getItem('latitude');
   
  }
  getMarklong():number{
    return +localStorage.getItem('longitude');
  }
}
