import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  welcomeMsg = "Data Binding Example";
  visibilityStatus = "display:none";
  isAddItemBtnDisabled: boolean = true;
  hrVisibleStatus = "display:none";
  itemList = [];
  outputVisibility = "display:none";
  item: string = null;
  constructor() {
    setTimeout(() => {
      this.visibilityStatus = "display:block";
    }, 1000);
  }

  ngOnInit(): void {

  }

  onAddition() {
    this.outputVisibility = "display:block";
    this.hrVisibleStatus = "display:block";
    this.itemList.push(this.item);
    //console.log(this.itemList);
  }
  /*//Event Binding Example
    onItemIput(event:Event){
      if((<HTMLInputElement>event.target).value){
        console.log("Not Empty");
        this.isAddItemBtnDisabled = false;
        this.item = (<HTMLInputElement>event.target).value;
      }else{
        console.log("Empty");
        this.isAddItemBtnDisabled = true;
      }
    }*/

  //2 way Binding Example
  onItemIput() {

    if (this.item.length > 0) {
      this.isAddItemBtnDisabled = false;
    } else {
      this.isAddItemBtnDisabled = true;
    }
  }
}
