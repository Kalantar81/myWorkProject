import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { ViewChild, ViewChildren, QueryList, ElementRef, ContentChild } from '@angular/core';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ViewChild(ChildComponent) childComponent: ChildComponent; // the name of child component
  @ViewChildren(ChildComponent) childrenView: QueryList<ChildComponent>;

  @ViewChild("header") headerEl: ElementRef;

  @ContentChild(ChildComponent) childContentComponent: ChildComponent;

  constructor() { 
    console.log(this.childComponent);
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log('data from parent:  '+ this.childComponent);// must be defined
    let childrens: ChildComponent[] = this.childrenView.toArray();
    this.headerEl.nativeElement.textContent = "Main parent!"
  }

  ngAfterContentInit(){
    console.log("content child: " + this.childContentComponent);
  }

  increase() {
    this.childComponent.increaseByOne();
 }

 decrease() {
  this.childComponent.decreaseByOne();
}

}
