import { Injectable } from '@angular/core';
import { sample } from 'rxjs';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  } 

  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags(): Tag[] {
    return sample_tags
  }

  getAllFoodsByTag(tag:string):Food[]{
    return tag == "All"?
    this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tag))
  }

}
