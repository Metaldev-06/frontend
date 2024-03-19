import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { badge } from '@interfaces/badge-home.interfaces';

@Component({
  selector: 'app-card-informations',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './card-informations.component.html',
  styleUrl: './card-informations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardInformationsComponent {
  options = input.required<badge[]>();
}
