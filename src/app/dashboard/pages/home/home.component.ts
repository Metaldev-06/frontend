import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardInformationsComponent } from '@shared-components/card-informations/card-informations.component';

import { badge } from '@interfaces/badge-home.interfaces';
import { CardHomeRoomsComponent } from '@shared-components/card-home-rooms/card-home-rooms.component';
import { roomInformation } from '@interfaces/card-home.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardInformationsComponent, CardHomeRoomsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public options: badge[] = [
    {
      name: 'en limpieza',
      numberOption: 2,
      color: '#e2970b',
    },
    {
      name: 'ocupado',
      numberOption: 2,
      color: '#ae0f0f',
    },
    {
      name: 'libre',
      numberOption: 1,
      color: '#4eae0f',
    },
  ];

  public rooms: roomInformation[] = [
    {
      title: 'ocupado',
      number: 1,
      partner: true,
      price: 10000,
      type: 'single',
    },
    {
      title: 'ocupado',
      number: 3,
      partner: false,
      price: 20000,
      type: 'triple',
    },
    {
      title: 'libre',
      number: 2,
      partner: false,
      price: 10000,
      type: 'matrimonial',
    },
    {
      title: 'limpieza',
      number: 4,
      partner: true,
      price: 10000,
      type: 'doble',
    },
    {
      title: 'libre',
      number: 5,
      partner: true,
      price: 10000,
      type: 'doble',
    },
  ];
}
