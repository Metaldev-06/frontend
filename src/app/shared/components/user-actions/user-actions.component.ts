import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-user-actions',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './user-actions.component.html',
  styleUrl: './user-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserActionsComponent {
  public isCollapsed = false;

  collapese() {
    this.isCollapsed = !this.isCollapsed;
  }
}
