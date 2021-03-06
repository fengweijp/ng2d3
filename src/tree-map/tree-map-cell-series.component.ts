import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'g[treeMapCellSeries]',
  template: `
    <svg:g treeMapCell *ngFor="let c of cells; trackBy:trackBy"
      [x]="c.x"
      [y]="c.y"
      [width]="c.width"
      [height]="c.height"
      [fill]="c.fill"
      [label]="c.label"
      [value]="c.value"
      [valueType]="c.valueType"
      (clickHandler)="onClick($event)"
      swui-tooltip
      [tooltipPlacement]="'top'"
      [tooltipType]="'tooltip'"
      [tooltipTitle]="c.tooltipText"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeMapCellSeriesComponent implements OnChanges {

  @Input() data;
  @Input() dims;
  @Input() colors;

  @Output() clickHandler = new EventEmitter();

  cells: any[];

  ngOnChanges(): void {
    this.cells = this.getCells();
  }

  getCells(): any[] {
    return this.data.children
      .filter((d) => {
        return d.depth === 1;
      })
      .map((d, index) => {
        let label = d.id;

        return {
          x: d.x0,
          y: d.y0,
          width: d.x1 - d.x0,
          height: d.y1 - d.y0,
          fill: this.colors(label),
          label: label,
          value: d.value,
          valueType: d.valueType,
          tooltipText: `${label}: ${d.value.toLocaleString()}`
        };
      });
  }

  onClick(data): void {
    this.clickHandler.emit(data);
  }

  trackBy(index, item): string {
    return item.label;
  }
}
