import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnDestroy,
  trigger,
  style,
  transition,
  animate,
  ElementRef,
  NgZone,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { calculateViewDimensions, ViewDimensions } from '../common/view-dimensions.helper';
import { colorHelper } from '../utils/color-sets';
import { BaseChartComponent } from '../common/base-chart.component';
import d3 from '../d3';

@Component({
  selector: 'bar-horizontal-2d',
  template: `
    <chart
      [legend]="legend"
      (legendLabelClick)="legendLabelClick.emit($event)"
      [view]="[width, height]"
      [colors]="colors"
      [legendData]="innerDomain">
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g gridPanelSeries
          [xScale]="valueScale"
          [yScale]="groupScale"
          [data]="results"
          [dims]="dims"
          orient="horizontal">
        </svg:g>
        <svg:g xAxis
          *ngIf="xAxis"
          [xScale]="valueScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          (dimensionsChanged)="updateXAxisHeight($event)">
        </svg:g>
        <svg:g yAxis
          *ngIf="yAxis"
          [yScale]="groupScale"
          [dims]="dims"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          (dimensionsChanged)="updateYAxisWidth($event)">
        </svg:g>
        <svg:g
          *ngFor="let group of results; trackBy:trackBy"
          [@animationState]="'active'"
          [attr.transform]="groupTransform(group)">
          <svg:g seriesHorizontal
            [xScale]="valueScale"
            [yScale]="innerScale"
            [colors]="colors"
            [series]="group.series"
            [dims]="dims"
            [gradient]="gradient"
            (clickHandler)="onClick($event, group)"
          />
        </svg:g>
      </svg:g>
    </chart>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animationState', [
      transition('* => void', [
        style({
          opacity: 1,
          transform: '*',
        }),
        animate(500, style({opacity: 0, transform: 'scale(0)'}))
      ])
    ])
  ]
})
export class BarHorizontal2DComponent extends BaseChartComponent implements OnChanges, OnDestroy, AfterViewInit {

  @Input() view;
  @Input() results;
  @Input() scheme;
  @Input() customColors;
  @Input() legend = false;
  @Input() xAxis;
  @Input() yAxis;
  @Input() showXAxisLabel;
  @Input() showYAxisLabel;
  @Input() xAxisLabel;
  @Input() yAxisLabel;
  @Input() gradient: boolean;
  @Input() showGridLines: boolean = true;

  @Output() clickHandler = new EventEmitter();
  @Output() legendLabelClick: EventEmitter<any> = new EventEmitter();

  dims: ViewDimensions;
  groupDomain: any[];
  innerDomain: any[];
  valuesDomain: any[];
  groupScale: any;
  innerScale: any;
  valueScale: any;
  transform: string;
  colors: Function;
  margin = [10, 20, 10, 20];
  xAxisHeight: number = 0;
  yAxisWidth: number = 0;

  constructor(private element: ElementRef, private cd: ChangeDetectorRef, zone: NgZone) {
    super(element, zone, cd);
  }

  ngAfterViewInit(): void {
    this.bindResizeEvents(this.view);
  }

  ngOnDestroy() {
    this.unbindEvents();
  }

  ngOnChanges() {
    this.update();
  }

  update() {
    super.update();

    this.zone.run(() => {
      this.dims = calculateViewDimensions({
        width: this.width,
        height: this.height,
        margins: this.margin,
        showXAxis: this.xAxis,
        showYAxis: this.yAxis,
        xAxisHeight: this.xAxisHeight,
        yAxisWidth: this.yAxisWidth,
        showXLabel: this.showXAxisLabel,
        showYLabel: this.showYAxisLabel,
        showLegend: this.legend,
        columns: 10
      });

      this.groupDomain = this.getGroupDomain();
      this.innerDomain = this.getInnerDomain();
      this.valuesDomain = this.getValueDomain();

      this.groupScale = this.getGroupScale();
      this.innerScale = this.getInnerScale();
      this.valueScale = this.getValueScale();

      this.setColors();

      this.transform = `translate(${ this.dims.xOffset } , ${ this.margin[0] })`;
    });
  }

  getGroupScale() {
    let spacing = 0.2;
    return d3.scaleBand()
      .rangeRound([this.dims.height, 0])
      .paddingInner(spacing)
      .paddingOuter(spacing / 2)
      .domain(this.groupDomain);
  }

  getInnerScale() {
    let spacing = 0.2;
    return d3.scaleBand()
      .rangeRound([0, this.groupScale.bandwidth()])
      .paddingInner(spacing)
      .domain(this.innerDomain);
  }

  getValueScale() {
    return d3.scaleLinear()
      .range([0, this.dims.width])
      .domain(this.valuesDomain);
  }

  getGroupDomain() {
    let domain = [];
    for (let group of this.results) {
      if (!domain.includes(group.name)) {
        domain.push(group.name);
      }
    }

    return domain;
  }

  getInnerDomain() {
    let domain = [];
    for (let group of this.results) {
      for (let d of group.series) {
        if (!domain.includes(d.name)) {
          domain.push(d.name);
        }
      }
    }

    return domain;
  }

  getValueDomain() {
    let domain = [];
    for (let group of this.results) {
      for (let d of group.series) {
        if (!domain.includes(d.value)) {
          domain.push(d.value);
        }
      }
    }

    let min = Math.min(0, ...domain);
    let max = Math.max(...domain);
    return [min, max];
  }


  groupTransform(group) {
    return `translate(0, ${this.groupScale(group.name)})`;
  }

  onClick(data, group) {
    data.series = group.name;
    this.clickHandler.emit(data);
  }

  trackBy(index, item) {
    return item.name;
  }

  setColors() {
    this.colors = colorHelper(this.scheme, 'ordinal', this.innerDomain, this.customColors);
  }

  updateYAxisWidth({width}) {
    this.yAxisWidth = width;
    this.update();
  }

  updateXAxisHeight({height}) {
    this.xAxisHeight = height;
    this.update();
  }
}
