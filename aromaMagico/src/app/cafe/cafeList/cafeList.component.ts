import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { cafeService } from '../cafe.service';

@Component({
  selector: 'app-cafeList',
  templateUrl: './cafeList.component.html',
  styleUrls: ['./cafeList.component.css']
})
export class CafeListComponent implements OnInit {
  cafes: Array<Cafe> = [];
  constructor(private cafeService: cafeService) { }

  selectedGenero1!: Cafe;
  getGeneros() {
    this.cafeService.getCafes().subscribe(cafes => { this.cafes = cafes });
  }
  ngOnInit() {
  }

}
