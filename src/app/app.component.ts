import { Component } from '@angular/core';
import { NgRedux,select } from 'ng2-redux';
import { IAppState } from './store';
import { ACTIONS } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @select() counter; 
  @select((s: IAppState)=> s.messaging.newMessages) newMsgs;

  constructor(private ngRedux: NgRedux<IAppState>){}

  increment(){
    this.ngRedux.dispatch({ type: ACTIONS.INCREMENT });
  }
}
