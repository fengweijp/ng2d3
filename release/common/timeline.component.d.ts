import { EventEmitter, ElementRef, OnChanges, NgZone, ChangeDetectorRef } from '@angular/core';
export declare class Timeline implements OnChanges {
    private zone;
    private cd;
    element: HTMLElement;
    dims: any;
    xDomain: any[];
    xScale: any;
    brush: any;
    transform: string;
    initialized: boolean;
    filterId: any;
    filter: any;
    view: any;
    state: any;
    results: any;
    scheme: any;
    customColors: any;
    legend: any;
    miniChart: any;
    autoScale: any;
    scaleType: any;
    height: number;
    clickHandler: EventEmitter<{}>;
    onDomainChange: EventEmitter<{}>;
    constructor(element: ElementRef, zone: NgZone, cd: ChangeDetectorRef);
    ngOnChanges(): void;
    update(): void;
    getXDomain(): any[];
    getXScale(): any;
    addBrush(): void;
    updateBrush(): void;
    getDims(): {
        width: any;
        height: number;
    };
}
