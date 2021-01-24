import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favor',
  templateUrl: './favor.component.html',
  styleUrls: ['./favor.component.css']
})
export class FavorComponent implements OnInit {

  comment;
  femaleCount = 30;
  maleCount = 10;
  value = 0;
  count = 0;
  contactMethod = [
    { id: 1, name: 'mail' },
    { id: 2, name: 'mobile' },
    { id: 3, name: 'fax' }
  ];

  @Output() change = new EventEmitter();
  @Input() favorVar: string;

  obj = {
    name: 'chetan',
    lastname: 'kshirsagar'
  };

  contactValue;
  constructor() { }


  onSubmit(f) {
    console.log(f);
    console.log("option value: ", this.contactValue);
    this.count++;
    this.value = this.count * 4;
    console.log(this.value);
  }

  ngOnInit(): void {
  }

  onClickFav() {
    this.change.emit(this.obj);
    console.log('emitt done');
  }
}
