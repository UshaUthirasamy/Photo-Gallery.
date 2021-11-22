import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularapp';
  public elements = [];
  public ngOnInit() {
    this.elements = [
      { rows:2, cols:2, data:1},
      { rows:1, cols:2, data:2},
      { rows:1, cols:2, data:3},
      { rows:1, cols:2, data:4},
      { rows:1, cols:2, data:5},

      { rows:1, cols:2, data:6},
      { rows:1, cols:2, data:7},
      { rows:1, cols:2, data:8},
      { rows:1, cols:2, data:9},
      { rows:1, cols:2, data:10},

      { rows:1, cols:2, data:11},
      { rows:1, cols:2, data:12},
      { rows:1, cols:2, data:13},
      { rows:1, cols:2, data:14},
      { rows:1, cols:2, data:15},


    ]
  }
}
