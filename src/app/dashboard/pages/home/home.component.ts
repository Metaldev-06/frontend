import { Component, TemplateRef } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzIconModule, NzInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public suffixIconSearch!: TemplateRef<void>;
}
