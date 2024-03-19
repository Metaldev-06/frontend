import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { roomInformation } from '@interfaces/card-home.interface';

import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-card-home-rooms',
  standalone: true,
  imports: [NzIconModule, TitleCasePipe],
  templateUrl: './card-home-rooms.component.html',
  styleUrl: './card-home-rooms.component.scss',
})
export class CardHomeRoomsComponent {
  public rooms = input.required<roomInformation[]>();
}
