import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
})
export class NumberComponent implements OnInit {
  @Input({ required: true }) value: string = '';
  
  ngOnInit(): void {
    this.value = this.value.padStart(3, '0');
  }
}
