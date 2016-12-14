import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'profile',
  styles: [`
  `],
  template: `
    <h1>Profile</h1>
    <div>
      For hot module reloading run
      <pre>npm run start:hmr</pre>
    </div>
    <pre>this.localState = {{ localState | json }}</pre>
    <p>
  		<ngb-alert [dismissible]="false">
    		<strong>Warning!</strong> Better check yourself, you're not looking too good.
  		</ngb-alert>
	</p>
	
	<div [(ngModel)]="model" ngbRadioGroup name="radioBasic">
  <label class="btn btn-primary">
    <input type="radio" [value]="1"> Left (pre-checked)
  </label>
  <label class="btn btn-primary">
    <input type="radio" value="middle"> Middle
  </label>
  <label class="btn btn-primary">
    <input type="radio" [value]="false"> Right
  </label>
</div>

  `
})
export class ProfileComponent {
  localState: any;
  constructor(public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    console.log('hello `Profile` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    this.asyncDataWithWebpack();
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then(json => {
          console.log('async mockData', json);
          this.localState = json;
        });

    });
  }

}
