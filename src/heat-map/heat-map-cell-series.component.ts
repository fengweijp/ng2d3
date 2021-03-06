import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'g[heatMapCellSeries]',
  template: `
    <svg:g heatMapCell *ngFor="let c of cells; trackBy:trackBy"
      [x]="c.x"
      [y]="c.y"
      [width]="c.width"
      [height]="c.height"
      [fill]="c.fill"
      [data]="c.data"
      (clickHandler)="onClick($event, c.label, c.series)"
      [gradient]="gradient"
      swui-tooltip
      [tooltipPlacement]="'top'"
      [tooltipType]="'tooltip'"
      [tooltipTitle]="c.tooltipText"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeatCellSeriesComponent implements OnChanges {

  @Input() data;
  @Input() colors;
  @Input() xScale;
  @Input() yScale;
  @Input() gradient: boolean;

  @Output() clickHandler = new EventEmitter();

  cells: any[];

  ngOnChanges(): void {
    this.update();
  }

  update(): void {
    this.cells = this.getCells();
  }

  getCells() {
    let cells = [];
    this.data.map((row) => {
      row.series.map((cell) => {
        let value = cell.value;

        let label = cell.name;
        let tooltipLabel = label;
        if (tooltipLabel.constructor.name === 'Date') {
          tooltipLabel = tooltipLabel.toLocaleDateString();
        }
        cells.push({
          x: this.xScale(row.name),
          y: this.yScale(cell.name),
          width: this.xScale.bandwidth(),
          height: this.yScale.bandwidth(),
          fill: this.colors(value),
          data: value,
          label: label,
          series: row.name,
          tooltipText: `${tooltipLabel}: ${value.toLocaleString()}`
        });
      });
    });

    return cells;
  }

  trackBy(index, item): string {
    return item.tooltipText;
  }

  onClick(value, label, series): void {
    this.clickHandler.emit({
      name: label,
      value: value,
      series: series
    });
  }

}
