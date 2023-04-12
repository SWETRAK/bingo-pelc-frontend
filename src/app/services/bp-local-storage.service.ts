import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BpLocalStorageService {

    constructor() {
    }

    public save(key: string, data: string) {
        localStorage.setItem(key, data);
    }

    public get(key: string): string | null {
        return localStorage.getItem(key);
    }

    public remove(key: string) {
        localStorage.removeItem(key);
    }

    public clear() {
        localStorage.clear();
    }
}
