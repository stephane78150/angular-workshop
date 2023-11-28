import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Countries } from "./exercise1.model";

@Injectable({providedIn: "root"})
export class CountryService {
    constructor(private httpClient: HttpClient) {
    }

    public GetCountries() : Observable<Countries> {
        return this.httpClient.get<Countries>('http://localhost:3000/countries')
    }
}