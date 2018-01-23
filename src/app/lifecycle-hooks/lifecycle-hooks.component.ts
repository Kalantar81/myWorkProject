import { Component, OnInit, OnChanges, OnDestroy, SimpleChange } from '@angular/core';


@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit, OnChanges, OnDestroy {

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){ //changes: SimpleChange parameter
    
  } // called every time where there is a change in input properties

  ngOnDestroy(){} // before angular destroy a component (for unsbscribe an observable...)
}
