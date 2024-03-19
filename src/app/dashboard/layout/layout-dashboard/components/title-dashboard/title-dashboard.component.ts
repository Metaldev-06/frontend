import { TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-title-dashboard',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './title-dashboard.component.html',
  styleUrl: './title-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleDashboardComponent implements OnInit {
  public title = signal<string>('');
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.showTitle();

    this.router.events
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.showTitle();
      });
  }

  public showTitle(): void {
    if (this.router.url === '/') {
      this.title.set('Dashboard');
    } else {
      this.title.set(this.router.url.replace('/', ''));
    }
  }
}
