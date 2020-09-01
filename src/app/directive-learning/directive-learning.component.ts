import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-learning',
  templateUrl: './directive-learning.component.html',
  styleUrls: ['./directive-learning.component.css']
})
export class DirectiveLearningComponent implements OnInit {
  welcomeMsg = null;
  item = null;
  itemList=[];
  addItemButtonStatus = true;
  constructor() {
    setTimeout(() => {
      this.welcomeMsg = "Directive Example";
    }, 1000);
  }

  ngOnInit(): void {
  }

  onItemAddition (){
    this.itemList.push(this.item);
  }
}
