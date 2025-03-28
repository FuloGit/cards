import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Set } from "../models/Set";
import { Observable } from "rxjs";
@Injectable({
    providedIn : 'root'
})
export class allcard{





    constructor( private readonly http : HttpClient){

    }

    getCard():Observable<Set>{
        return this.http.get<Set>('https://api.tcgdex.net/v2/fr/sets/swsh3')
    }
}