import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'g[circleSeries]',
  template: `
    <svg:g *ngFor="let circle of circles">
      <svg:rect
        *ngIf="barVisible"
        [attr.x]="circle.cx - circle.radius"
        [attr.y]="circle.cy"
        [attr.width]="circle.radius * 2"
        [attr.height]="circle.height"
        [attr.fill]="color"
        class="tooltip-bar"
      />
      <svg:g circle
        [attr.class]="className"
        [cx]="circle.cx"
        [cy]="circle.cy"
        [r]="circle.radius"
        [fill]="color"
        [stroke]="strokeColor"
        [pointerEvents]="circle.value === 0 ? 'none': 'all'"
        [data]="circle.value"
        [classNames]="circle.classNames"
        (clickHandler)="onClick($event, circle.label)"
        [style.opacity]="circle.opacity"
        [style.cursor]="'pointer'"
        swui-tooltip
        [tooltipPlacement]="'top'"
        [tooltipType]="'tooltip'"
        [tooltipTitle]="circle.tooltipText"
      />
    </svg:g>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleSeriesComponent implements OnChanges {

  @Input() data;
  @Input() type = 'standard';
  @Input() xScale;
  @Input() yScale;
  @Input() color;
  @Input() strokeColor;
  @Input() scaleType;
  @Input() visibleValue;

  @Output() clickHandler = new EventEmitter();

  areaPath: any;
  circles: any[];
  barVisible: boolean = false;

  ngOnChanges(): void {
    this.update();
  }

  update(): void {
    this.circles = this.getCircles();
  }

  getCircles(): any[] {
    return this.data.series.map((d, i) => {
      let value = d.value;
      let label = d.name;
      let tooltipLabel = label;
      if (tooltipLabel.constructor.name === 'Date') {
        tooltipLabel = tooltipLabel.toLocaleDateString();
      }

      if (value) {
        let cx;
        if (this.scaleType === 'time') {
          cx = this.xScale(moment(label).toDate());
        } else if (this.scaleType === 'linear') {
          cx = this.xScale(Number(label));
        } else {
          cx = this.xScale(label);
        }

        let cy = this.yScale(this.type === 'standard' ? value : d.d1);
        let radius = 5;
        let height = this.yScale.range()[0] - cy;

        let opacity = 0;
        if (label && this.visibleValue && label.toString() === this.visibleValue.toString()) {
          opacity = 1;
        }

        return {
          classNames: [`circle-data-${i}`],
          value: value,
          label: label,
          cx: cx,
          cy: cy,
          radius: radius,
          height: height,
          tooltipText: `${tooltipLabel}: ${value.toLocaleString()}`,
          opacity: opacity
        };
      }
    }).filter((circle) => circle !== undefined);
  }

  onClick(value, label): void {
    this.clickHandler.emit({
      name: label,
      value: value
    });
  }
}
