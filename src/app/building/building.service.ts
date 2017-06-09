import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Building } from "app/building/building.model";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class BuildingService {
    constructor(private http: Http){}

    getBuildingData(): Observable<Building[]>{
        return this.http.get('../assets/data/building-data.json')
            .map((response: Response) => {
                const buildingData: Building[] = response.json().buildings;
                return buildingData;
            })
    }
}