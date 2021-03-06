import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ItemVenda } from "../models/item-venda";

@Injectable({
    providedIn: "root",
})
export class ItemService {
    private baseURL = "http://localhost:5000/api/item";

    constructor(private http: HttpClient) {}

    create(item: ItemVenda): Observable<ItemVenda> {
        return this.http.post<ItemVenda>(`${this.baseURL}/create`, item);
    }

    getByCartId(carrinhoId: string): Observable<ItemVenda[]> {
        return this.http.get<ItemVenda[]>(
            `${this.baseURL}/getbycartid/${carrinhoId}`
        );
    }
}
