import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PwaDataServiceService {

  almacen: string = 'AlmacenDatos';

  constructor(private dbService: NgxIndexedDBService) {
  }

  addObject(objectToAdd: any): Observable<any> {
    return this.dbService.add(this.almacen, objectToAdd);
  }

  getObjectByKey(key: any): Observable<any> {
    return this.dbService.getByKey(this.almacen, key);
  }

  updateObjectByKey(updatedObject: any): Observable<any> {
    return this.dbService.update(this.almacen, updatedObject);
  }

  deleteObjectByKey(key: any): Observable<any> {
    return this.dbService.delete(this.almacen, key);
  }

  deleteAllObjects(): Observable<boolean> {
    return this.dbService.clear(this.almacen);
  }

  getAllObjects(): Observable<any[]> {
    return this.dbService.getAll(this.almacen);
  }
}
