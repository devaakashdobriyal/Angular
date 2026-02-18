import { Component, OnInit } from '@angular/core';
import { FigureService } from '../../services/figure-service';
import { Figure } from '../../models/figure';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-figures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './figures.html',
  styleUrl: './figures.css'
})
export class Figures implements OnInit {

  figures: Figure[] = [];

  constructor(private figureService: FigureService) {}

  ngOnInit() {
    this.figureService.getFigures().subscribe((data) => {
      this.figures = data;
      console.log('Figures loaded:', data);
    });
  }
}
