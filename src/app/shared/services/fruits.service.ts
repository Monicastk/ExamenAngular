import { Injectable } from '@angular/core';
import { fruitMock } from '../fruitMock';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor() { }
  
  fetchAll(){
    return fruitMock
  }
}
