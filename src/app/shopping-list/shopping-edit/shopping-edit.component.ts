import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
 
  @ViewChild('nameInput', {static: false}) nameInputRef:ElementRef;
  @ViewChild ('amountInput', {static: false}) amountInputRef:ElementRef;


  constructor(private slService:ShoppingListService){}
  
  ngOnInit() {}

  onClickAdd(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value; 
    const newIngredients = new Ingredient(ingName,ingAmount);
    this.slService.getSLDetails(newIngredients);
  }
}
