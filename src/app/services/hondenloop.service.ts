import { Injectable } from '@angular/core';
import { Hondenloop } from '../interface/Hondenloop';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlConfig } from '../config/urlconfig';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HondenloopService {

  hondenlopen : Hondenloop[]; 
  rings: [];

  
  constructor(private http : HttpClient) { 
    this.hondenlopen = [];
    this.rings = [];
  }

  getHondenloop() : Observable<Hondenloop[]>{
    return this.http.get<[Hondenloop]>(UrlConfig.hondenUrl)
    .pipe(map((res) => {        
        this.hondenlopen = res["features"]
        console.log(this.hondenlopen)
        return res["features"];
      })
    );
  }

  getHondenloopMarker(): any{
    const result : string[] = [];
    result.push(localStorage.getItem('rings'));
    return result;   
  }

  setHondenloopMarkerrings(rings: string){
    localStorage.setItem('rings', rings);
  }
}
