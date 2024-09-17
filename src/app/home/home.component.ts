import { Component, inject, OnInit } from '@angular/core';
import { fruitInterface } from '../shared/entites';
import { FruitsService } from '../shared/services/fruits.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(){}

  fruits:fruitInterface[] = [];
  service = inject(FruitsService)

  ngOnInit(): void {
    this.fetchAll();
  }


  fetchAll(){
 this.fruits = this.service.fetchAll();
  }

compt  = 0 

compteurBtn(){
  
}


}
