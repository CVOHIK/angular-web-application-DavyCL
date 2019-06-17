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
  lat: number;
  lng: number;
   

  constructor(private http : HttpClient) { 
    
  }

  getZitMeubilair() : Observable<Zitmeubilair[]>{
    return this.http.get<[Zitmeubilair]>(UrlConfig.zitmUrl)
    .pipe(map((res) => {  
        this.zitmeubilair = res["features"]
        return res["features"];
      })
    );
  }
}
