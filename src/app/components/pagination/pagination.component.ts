import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
  @Input() pageAmount: number = 0;
  @Input() pages: number[] = [];
  @Output() onClickPageNumber = new EventEmitter<number>();
  ngOnInit(): void {
    this.pages = createArrayOfLengthN(this.pageAmount);
  }
  LogPageNumber(n: number) {
    this.onClickPageNumber.emit(n);
  }
}

function createArrayOfLengthN(n: number): number[] {
  var result: number[] = [];
  for (let index = 1; index <= n; index++) {
    result.push(index);
  }
  return result;
}
