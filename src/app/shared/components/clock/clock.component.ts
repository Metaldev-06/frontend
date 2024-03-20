import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClockComponent implements OnInit, OnDestroy {
  public currentTime = signal<string>('');
  public date = signal<any>('');
  private interval: any;

  ngOnInit(): void {
    this.actualizarHora(); // Actualizar la hora inicial

    // Actualizar la hora cada segundo
    this.interval = setInterval(() => {
      this.actualizarHora();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval); // Limpiar el intervalo cuando el componente se destruya
  }

  private actualizarHora(): void {
    const now = new Date();
    this.currentTime.set(now.toLocaleTimeString());
    this.date.set(now);
  }
}
