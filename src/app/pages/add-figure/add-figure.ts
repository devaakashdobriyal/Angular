import { Component } from '@angular/core';
import { FigureService } from '../../services/figure-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-figure',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-figure.html',
  styleUrl: './add-figure.css',
})
export class AddFigure {

  constructor(
    private router: Router,
    private figureService: FigureService
  ) {}

  name = '';
  series = '';
  price = 0;
  imageUrl = '';

  saveFigure() {
    this.figureService.addFigure({
      name: this.name,
      series: this.series,
      price: this.price,
      imageUrl: this.imageUrl
    }).then(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
