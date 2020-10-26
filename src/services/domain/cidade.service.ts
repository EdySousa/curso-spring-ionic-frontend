import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

import { API_CONFIG } from "../../config/api.config";
import { CidadeDTO } from "../../models/cidade.dto";
import { StorageService } from "../storage.service";

@Injectable()
export class CidadeService {
    constructor(
        public http: HttpClient,
        public storage: StorageService
    ) { }

    findAll(estado_id: string): Observable<CidadeDTO[]> {
        return this.http.get<CidadeDTO[]>(`${API_CONFIG.estados}/${estado_id}/cidades`);
    }

}