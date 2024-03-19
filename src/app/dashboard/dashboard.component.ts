import { Component } from '@angular/core';
import { LayoutDashboardComponent } from './layout/layout-dashboard/layout-dashboard.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LayoutDashboardComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
