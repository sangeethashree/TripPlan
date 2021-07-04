import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn:'root'
}
    
)
export class TripService{

    constructor(private http:HttpClient){}

    fetchCityweather(){
        return this.http.get('https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576');
    }

    fetchFeaturedDestinations(){
        return this.http.get('https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c');
    }
}