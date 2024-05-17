import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;

constructor(private alService: ShoppingListService) {}
  ngOnInit() {
   
  }
onAddItem () {
  const ingName = this.nameInputRef.nativeElement.value;
  const ingAmount = this.nameInputRef.nativeElement.value;
  const newIngredient = this.nameInputRef.nativeElement.value;
  this.alService.addIngredeinet(newIngredient);
}
}
