import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

import { API_CONFIG } from "../../config/api.config";
import { EstadoDTO } from "../../models/estado.dto";
import { StorageService } from "../storage.service";

@Injectable()
export class EstadoService {
    constructor(
        public http: HttpClient,
        public storage: StorageService
    ) { }

    findAll(): Observable<EstadoDTO[]> {
        return this.http.get<EstadoDTO[]>(API_CONFIG.estados);
    }

}