import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapeService {

  constructor(private http: HttpClient) { }

  pretragaMesta(upit: string, kljuc: string, bbox: string, proximity: string): Observable<any> {
    //bbox za celu Srbiju: 19.097281043415904,42.23506055991331,22.783561472386168,46.17683570999989
    //bbox je podesesn za celu Srbiju, ovo su podesavanja samo za Beograd: 20.100859536071795,44.43653527256717,20.63544132443704,45.098673824457814 
    return this.http.get('https://api.maptiler.com/geocoding/[' + upit + '].json?key=' + kljuc + '&bbox=20.100859536071795,44.43653527256717,20.63544132443704,45.098673824457814 &proximity=' + proximity);

  }

  obrnutiGeokoding(lng, lat): Observable<any>{
    return this.http.get(`https://api.maptiler.com/geocoding/${lng},${lat}.json?key=1SGD9lbvzzGhx1JEsjnr`)
  }


}
