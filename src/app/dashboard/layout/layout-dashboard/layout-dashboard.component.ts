import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NgClass, TitleCasePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LocalStorageService } from '../../../core/services/storage/local-storage.service';
import { UserActionsComponent } from '../../../shared/components/user-actions/user-actions.component';
import { TitleDashboardComponent } from './components/title-dashboard/title-dashboard.component';

interface MenuItem {
  title: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-layout-dashboard',
  standalone: true,
  imports: [
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NgClass,
    TitleCasePipe,
    RouterLinkActive,
    RouterLink,
    UserActionsComponent,
    TitleDashboardComponent,
  ],
  templateUrl: './layout-dashboard.component.html',
  styleUrl: './layout-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDashboardComponent implements OnInit {
  public isCollapsed = false;
  public user!: string;

  public itemsMenu = signal<MenuItem[]>([
    {
      title: 'Dashboard',
      link: '/',
      icon: 'pie-chart',
    },
    {
      title: 'Organizaciones',
      link: '/organizations',
      icon: 'bar-chart',
    },
    {
      title: 'Créditos',
      link: '/credits',
      icon: 'shopping-cart',
    },
    {
      title: 'Productos',
      link: '/products',
      icon: 'shopping',
    },
    {
      title: 'Reportes',
      link: '/reports',
      icon: 'line-chart',
    },
    {
      title: 'Messages',
      link: '/messages',
      icon: 'message',
    },
    {
      title: 'Ajustes',
      link: '/settings',
      icon: 'setting',
    },
  ]);

  private readonly localStorageService = inject(LocalStorageService);

  ngOnInit(): void {
    this.isCollapsed =
      this.localStorageService.getItem<boolean>('collapsed') || false;
  }

  collapese() {
    this.isCollapsed = !this.isCollapsed;
    this.localStorageService.setItem('collapsed', this.isCollapsed);
  }
}
