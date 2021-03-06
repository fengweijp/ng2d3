/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/pie-chart/advanced-pie-chart.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/zone/ng_zone';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../../src/common/charts/chart.component';
import * as import12 from '../../../src/utils/injection.service';
import * as import13 from '../common/charts/chart.component.ngfactory';
import * as import14 from '../../../src/pie-chart/pie-series.component';
import * as import15 from './pie-series.component.ngfactory';
import * as import16 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import17 from '@angular/core/src/application_ref';
import * as import18 from '@angular/core/src/linker/component_factory_resolver';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import21 from '@angular/common/src/directives/ng_for';
import * as import22 from '@angular/core/src/security';
export class Wrapper_AdvancedPieChartComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AdvancedPieChartComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  subscription0:any;
  subscription1:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.AdvancedPieChartComponent(p0,p1,p2);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
  }
  check_view(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.view = currValue;
      this._changes['view'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_results(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.results = currValue;
      this._changes['results'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_margin(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.margin = currValue;
      this._changes['margin'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_scheme(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.scheme = currValue;
      this._changes['scheme'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_customColors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.customColors = currValue;
      this._changes['customColors'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_gradient(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.gradient = currValue;
      this._changes['gradient'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.clickHandler.subscribe(_eventHandler.bind(view,'clickHandler'))); }
    if (emit1) { (this.subscription1 = this.context.legendLabelClick.subscribe(_eventHandler.bind(view,'legendLabelClick'))); }
  }
}
var renderType_AdvancedPieChartComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_AdvancedPieChartComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.AdvancedPieChartComponent>;
  _AdvancedPieChartComponent_0_3:Wrapper_AdvancedPieChartComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AdvancedPieChartComponent_Host0,renderType_AdvancedPieChartComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'advanced-pie-chart',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AdvancedPieChartComponent0(this.viewUtils,this,0,this._el_0);
    this._AdvancedPieChartComponent_0_3 = new Wrapper_AdvancedPieChartComponent(new import8.ElementRef(this._el_0),this.compView_0.ref,this.injectorGet(import9.NgZone,this.parentIndex));
    this.compView_0.create(this._AdvancedPieChartComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._AdvancedPieChartComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AdvancedPieChartComponent) && (0 === requestNodeIndex))) { return this._AdvancedPieChartComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._AdvancedPieChartComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._AdvancedPieChartComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._AdvancedPieChartComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AdvancedPieChartComponentNgFactory:import7.ComponentFactory<import0.AdvancedPieChartComponent> = new import7.ComponentFactory<import0.AdvancedPieChartComponent>('advanced-pie-chart',View_AdvancedPieChartComponent_Host0,import0.AdvancedPieChartComponent);
const styles_AdvancedPieChartComponent:any[] = ([] as any[]);
var renderType_AdvancedPieChartComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_AdvancedPieChartComponent,{});
export class View_AdvancedPieChartComponent0 extends import2.AppView<import0.AdvancedPieChartComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  /*private*/ _vc_5:import10.ViewContainer;
  compView_5:import2.AppView<import11.ChartComponent>;
  _InjectionService_5_5:import12.InjectionService;
  _ChartComponent_5_6:import13.Wrapper_ChartComponent;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  compView_9:import2.AppView<import14.PieSeriesComponent>;
  _PieSeriesComponent_9_3:import15.Wrapper_PieSeriesComponent;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _el_27:any;
  _text_28:any;
  _anchor_29:any;
  /*private*/ _vc_29:import10.ViewContainer;
  _TemplateRef_29_5:any;
  _NgFor_29_6:import16.Wrapper_NgFor;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  _text_34:any;
  _text_35:any;
  /*private*/ _expr_45:any;
  /*private*/ _expr_46:any;
  /*private*/ _expr_47:any;
  /*private*/ _expr_48:any;
  _arr_49:any;
  /*private*/ _expr_50:any;
  /*private*/ _expr_51:any;
  /*private*/ _expr_52:any;
  /*private*/ _expr_53:any;
  /*private*/ _expr_54:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AdvancedPieChartComponent0,renderType_AdvancedPieChartComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
    this._expr_45 = import1.UNINITIALIZED;
    this._expr_46 = import1.UNINITIALIZED;
    this._expr_47 = import1.UNINITIALIZED;
    this._expr_48 = import1.UNINITIALIZED;
    this._arr_49 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_50 = import1.UNINITIALIZED;
    this._expr_51 = import1.UNINITIALIZED;
    this._expr_52 = import1.UNINITIALIZED;
    this._expr_53 = import1.UNINITIALIZED;
    this._expr_54 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','advanced-pie chart'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'chart',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_5 = new import10.ViewContainer(5,3,this,this._el_5);
    this.compView_5 = new import13.View_ChartComponent0(this.viewUtils,this,5,this._el_5);
    this._InjectionService_5_5 = new import12.InjectionService(this.parentView.injectorGet(import17.ApplicationRef,this.parentIndex),this.parentView.injectorGet(import18.ComponentFactoryResolver,this.parentIndex),this.injector(5));
    this._ChartComponent_5_6 = new import13.Wrapper_ChartComponent(this._vc_5.vcRef,this._InjectionService_5_5);
    this._text_6 = this.renderer.createText((null as any),'\n          ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'class','pie chart'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'\n            ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_7,':svg:g',new import3.InlineArray2(2,'pieSeries',''),(null as any));
    this.compView_9 = new import15.View_PieSeriesComponent0(this.viewUtils,this,9,this._el_9);
    this._PieSeriesComponent_9_3 = new import15.Wrapper_PieSeriesComponent();
    this._text_10 = this.renderer.createText((null as any),'\n            ',(null as any));
    this.compView_9.create(this._PieSeriesComponent_9_3.context);
    this._text_11 = this.renderer.createText(this._el_7,'\n          ',(null as any));
    this._text_12 = this.renderer.createText((null as any),'\n        ',(null as any));
    this.compView_5.create(this._ChartComponent_5_6.context);
    this._text_13 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_14 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','advanced-pie-legend-wrapper'),(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'\n        ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_15,'div',new import3.InlineArray2(2,'class','advanced-pie-legend'),(null as any));
    this._text_18 = this.renderer.createText(this._el_17,'\n          ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_17,'div',new import3.InlineArray2(2,'class','total-value'),(null as any));
    this._text_20 = this.renderer.createText(this._el_19,'',(null as any));
    this._text_21 = this.renderer.createText(this._el_17,'\n          ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_17,'div',new import3.InlineArray2(2,'class','total-label'),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'',(null as any));
    this._text_24 = this.renderer.createText(this._el_17,'\n          ',(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,this._el_17,'div',new import3.InlineArray2(2,'class','legend-items-container'),(null as any));
    this._text_26 = this.renderer.createText(this._el_25,'\n            ',(null as any));
    this._el_27 = import3.createRenderElement(this.renderer,this._el_25,'div',new import3.InlineArray2(2,'class','legend-items'),(null as any));
    this._text_28 = this.renderer.createText(this._el_27,'\n              ',(null as any));
    this._anchor_29 = this.renderer.createTemplateAnchor(this._el_27,(null as any));
    this._vc_29 = new import10.ViewContainer(29,27,this,this._anchor_29);
    this._TemplateRef_29_5 = new import19.TemplateRef_(this,29,this._anchor_29);
    this._NgFor_29_6 = new import16.Wrapper_NgFor(this._vc_29.vcRef,this._TemplateRef_29_5,this.parentView.injectorGet(import20.IterableDiffers,this.parentIndex),this.ref);
    this._text_30 = this.renderer.createText(this._el_27,'\n            ',(null as any));
    this._text_31 = this.renderer.createText(this._el_25,'\n          ',(null as any));
    this._text_32 = this.renderer.createText(this._el_17,'\n        ',(null as any));
    this._text_33 = this.renderer.createText(this._el_15,'\n      ',(null as any));
    this._text_34 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_35 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray2(2,'legendLabelClick',(null as any)),this.eventHandler(this.handleEvent_5));
    this._ChartComponent_5_6.subscribe(this,this.eventHandler(this.handleEvent_5),true);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_9,new import3.InlineArray2(2,'clickHandler',(null as any)),this.eventHandler(this.handleEvent_9));
    this._PieSeriesComponent_9_3.subscribe(this,this.eventHandler(this.handleEvent_9),true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._el_27,
      this._text_28,
      this._anchor_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._text_33,
      this._text_34,
      this._text_35
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.PieSeriesComponent) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._PieSeriesComponent_9_3.context; }
    if (((token === import12.InjectionService) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._InjectionService_5_5; }
    if (((token === import11.ChartComponent) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._ChartComponent_5_6.context; }
    if (((token === import19.TemplateRef) && (29 === requestNodeIndex))) { return this._TemplateRef_29_5; }
    if (((token === import21.NgFor) && (29 === requestNodeIndex))) { return this._NgFor_29_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5_0_0:any = this._arr_49(this.context.dims.width,this.context.dims.height);
    this._ChartComponent_5_6.check_view(currVal_5_0_0,throwOnChange,false);
    const currVal_5_0_1:any = this.context.colors;
    this._ChartComponent_5_6.check_colors(currVal_5_0_1,throwOnChange,false);
    if (this._ChartComponent_5_6.ngDoCheck(this,this._el_5,throwOnChange)) { this.compView_5.markAsCheckOnce(); }
    const currVal_9_0_0:any = this.context.colors;
    this._PieSeriesComponent_9_3.check_colors(currVal_9_0_0,throwOnChange,false);
    const currVal_9_0_1:any = this.context.results;
    this._PieSeriesComponent_9_3.check_series(currVal_9_0_1,throwOnChange,false);
    const currVal_9_0_2:any = this.context.innerRadius;
    this._PieSeriesComponent_9_3.check_innerRadius(currVal_9_0_2,throwOnChange,false);
    const currVal_9_0_3:any = this.context.outerRadius;
    this._PieSeriesComponent_9_3.check_outerRadius(currVal_9_0_3,throwOnChange,false);
    const currVal_9_0_4:any = this.context.labels;
    this._PieSeriesComponent_9_3.check_showLabels(currVal_9_0_4,throwOnChange,false);
    const currVal_9_0_5:any = this.context.gradient;
    this._PieSeriesComponent_9_3.check_gradient(currVal_9_0_5,throwOnChange,false);
    if (this._PieSeriesComponent_9_3.ngDoCheck(this,this._el_9,throwOnChange)) { this.compView_9.markAsCheckOnce(); }
    const currVal_29_0_0:any = this.context.legendItems;
    this._NgFor_29_6.check_ngForOf(currVal_29_0_0,throwOnChange,false);
    this._NgFor_29_6.ngDoCheck(this,this._anchor_29,throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    this._vc_29.detectChangesInNestedViews(throwOnChange);
    const currVal_45:any = this.context.width;
    if (import3.checkBinding(throwOnChange,this._expr_45,currVal_45)) {
      this.renderer.setElementStyle(this._el_1,'width',((this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE,currVal_45) == null)? (null as any): (this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE,currVal_45).toString() + 'px')));
      this._expr_45 = currVal_45;
    }
    const currVal_46:any = this.context.height;
    if (import3.checkBinding(throwOnChange,this._expr_46,currVal_46)) {
      this.renderer.setElementStyle(this._el_1,'height',((this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE,currVal_46) == null)? (null as any): (this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE,currVal_46).toString() + 'px')));
      this._expr_46 = currVal_46;
    }
    const currVal_47:any = this.context.dims.width;
    if (import3.checkBinding(throwOnChange,this._expr_47,currVal_47)) {
      this.renderer.setElementStyle(this._el_3,'width',((this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE,currVal_47) == null)? (null as any): (this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE,currVal_47).toString() + 'px')));
      this._expr_47 = currVal_47;
    }
    const currVal_48:any = this.context.dims.height;
    if (import3.checkBinding(throwOnChange,this._expr_48,currVal_48)) {
      this.renderer.setElementStyle(this._el_3,'height',((this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE,currVal_48) == null)? (null as any): (this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE,currVal_48).toString() + 'px')));
      this._expr_48 = currVal_48;
    }
    const currVal_50:any = this.context.transform;
    if (import3.checkBinding(throwOnChange,this._expr_50,currVal_50)) {
      this.renderer.setElementAttribute(this._el_7,'transform',((currVal_50 == null)? (null as any): currVal_50.toString()));
      this._expr_50 = currVal_50;
    }
    const currVal_51:any = (this.context.width - this.context.dims.width);
    if (import3.checkBinding(throwOnChange,this._expr_51,currVal_51)) {
      this.renderer.setElementStyle(this._el_15,'width',((this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE,currVal_51) == null)? (null as any): (this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE,currVal_51).toString() + 'px')));
      this._expr_51 = currVal_51;
    }
    const currVal_52:any = ((this.context.width - this.context.dims.width) - this.context.margin[1]);
    if (import3.checkBinding(throwOnChange,this._expr_52,currVal_52)) {
      this.renderer.setElementStyle(this._el_17,'width',((this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE,currVal_52) == null)? (null as any): (this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE,currVal_52).toString() + 'px')));
      this._expr_52 = currVal_52;
    }
    const currVal_53:any = import3.inlineInterpolate(1,'\n            ',this.context.roundedTotal.toLocaleString(),'\n          ');
    if (import3.checkBinding(throwOnChange,this._expr_53,currVal_53)) {
      this.renderer.setText(this._text_20,currVal_53);
      this._expr_53 = currVal_53;
    }
    const currVal_54:any = import3.inlineInterpolate(1,'\n            ',this.context.totalLabel,'\n          ');
    if (import3.checkBinding(throwOnChange,this._expr_54,currVal_54)) {
      this.renderer.setText(this._text_23,currVal_54);
      this._expr_54 = currVal_54;
    }
    this.compView_5.detectChanges(throwOnChange);
    this.compView_9.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_5.destroyNestedViews();
    this._vc_29.destroyNestedViews();
    this.compView_5.destroy();
    this.compView_9.destroy();
    this._PieSeriesComponent_9_3.ngOnDestroy();
    this._ChartComponent_5_6.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 5) && (ngContentIndex == 0))) {
      cb(this._text_6,ctx);
      cb(this._el_7,ctx);
      cb(this._text_12,ctx);
    }
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 29)) { return new View_AdvancedPieChartComponent1(this.viewUtils,this,29,this._anchor_29,this._vc_29); }
    return (null as any);
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'legendLabelClick')) {
      const pd_sub_0:any = ((<any>this.context.legendLabelClick.emit($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_9(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'clickHandler')) {
      const pd_sub_0:any = ((<any>this.context.onClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_AdvancedPieChartComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_AdvancedPieChartComponent1,renderType_AdvancedPieChartComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_14 = import1.UNINITIALIZED;
    this._expr_15 = import1.UNINITIALIZED;
    this._expr_16 = import1.UNINITIALIZED;
    this._expr_17 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray4(4,'class','legend-item','tabindex','-1'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','item-color'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n                ',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','item-value'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','item-label'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'',(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','item-percent'),(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n              ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13
    ]
    ),[disposable_0]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_14:any = this.parentView.context.colors(this.context.$implicit.label);
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementStyle(this._el_2,'background',((this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE,currVal_14) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import22.SecurityContext.STYLE,currVal_14).toString()));
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = import3.inlineInterpolate(1,'',this.context.$implicit.value.toLocaleString(),'');
    if (import3.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setText(this._text_6,currVal_15);
      this._expr_15 = currVal_15;
    }
    const currVal_16:any = import3.inlineInterpolate(1,'',this.context.$implicit.label,'');
    if (import3.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setText(this._text_9,currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = import3.inlineInterpolate(1,'',this.context.$implicit.percentage.toLocaleString(),'%');
    if (import3.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setText(this._text_12,currVal_17);
      this._expr_17 = currVal_17;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.legendLabelClick.emit(this.context.$implicit)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}