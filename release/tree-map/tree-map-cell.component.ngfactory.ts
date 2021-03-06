/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/tree-map/tree-map-cell.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/core/src/security';
export class Wrapper_TreeMapCellComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TreeMapCellComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  subscription0:any;
  constructor(p0:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.TreeMapCellComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_fill(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.fill = currValue;
      this._changes['fill'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_x(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.x = currValue;
      this._changes['x'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_y(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.y = currValue;
      this._changes['y'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_width(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.width = currValue;
      this._changes['width'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_height(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.height = currValue;
      this._changes['height'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_label(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.label = currValue;
      this._changes['label'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_value(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.value = currValue;
      this._changes['value'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  check_valueType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.valueType = currValue;
      this._changes['valueType'] = new import1.SimpleChange(this._expr_7,currValue);
      this._expr_7 = currValue;
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
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.clickHandler.subscribe(_eventHandler.bind(view,'clickHandler'))); }
  }
}
var renderType_TreeMapCellComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_TreeMapCellComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.TreeMapCellComponent>;
  _TreeMapCellComponent_0_3:Wrapper_TreeMapCellComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TreeMapCellComponent_Host0,renderType_TreeMapCellComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'g',new import3.InlineArray2(2,'treeMapCell',''),rootSelector,(null as any));
    this.compView_0 = new View_TreeMapCellComponent0(this.viewUtils,this,0,this._el_0);
    this._TreeMapCellComponent_0_3 = new Wrapper_TreeMapCellComponent(new import8.ElementRef(this._el_0));
    this.compView_0.create(this._TreeMapCellComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._TreeMapCellComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TreeMapCellComponent) && (0 === requestNodeIndex))) { return this._TreeMapCellComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._TreeMapCellComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._TreeMapCellComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TreeMapCellComponentNgFactory:import7.ComponentFactory<import0.TreeMapCellComponent> = new import7.ComponentFactory<import0.TreeMapCellComponent>('g[treeMapCell]',View_TreeMapCellComponent_Host0,import0.TreeMapCellComponent);
const styles_TreeMapCellComponent:any[] = ([] as any[]);
var renderType_TreeMapCellComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_TreeMapCellComponent,{});
export class View_TreeMapCellComponent0 extends import2.AppView<import0.TreeMapCellComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _vc_5:import9.ViewContainer;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import10.Wrapper_NgIf;
  _text_6:any;
  _text_7:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TreeMapCellComponent0,renderType_TreeMapCellComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,':svg:g',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,':svg:rect',new import3.InlineArray2(2,'class','cell'),(null as any));
    this._text_4 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_5 = new import9.ViewContainer(5,1,this,this._anchor_5);
    this._TemplateRef_5_5 = new import11.TemplateRef_(this,5,this._anchor_5);
    this._NgIf_5_6 = new import10.Wrapper_NgIf(this._vc_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_3,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_3));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._text_7
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import12.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5_0_0:any = ((this.context.width >= 70) && (this.context.height >= 35));
    this._NgIf_5_6.check_ngIf(currVal_5_0_0,throwOnChange,false);
    this._NgIf_5_6.ngDoCheck(this,this._anchor_5,throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    const currVal_11:any = this.context.fill;
    if (import3.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementAttribute(this._el_3,'fill',((currVal_11 == null)? (null as any): currVal_11.toString()));
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = this.context.width;
    if (import3.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementAttribute(this._el_3,'width',((currVal_12 == null)? (null as any): currVal_12.toString()));
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = this.context.height;
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementAttribute(this._el_3,'height',((currVal_13 == null)? (null as any): currVal_13.toString()));
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = 'pointer';
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementStyle(this._el_3,'cursor',((this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE,currVal_14) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE,currVal_14).toString()));
      this._expr_14 = currVal_14;
    }
  }
  destroyInternal():void {
    this._vc_5.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 5)) { return new View_TreeMapCellComponent1(this.viewUtils,this,5,this._anchor_5,this._vc_5); }
    return (null as any);
  }
  handleEvent_3(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onClick()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_TreeMapCellComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_TreeMapCellComponent1,renderType_TreeMapCellComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
    this._expr_15 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:foreignObject',new import3.InlineArray2(2,'class','label'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,':xhtml:p',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,':xhtml:br',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_5 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_7:any = this.parentView.context.x;
    if (import3.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementAttribute(this._el_0,'x',((currVal_7 == null)? (null as any): currVal_7.toString()));
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this.parentView.context.y;
    if (import3.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementAttribute(this._el_0,'y',((currVal_8 == null)? (null as any): currVal_8.toString()));
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.parentView.context.width;
    if (import3.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementAttribute(this._el_0,'width',((currVal_9 == null)? (null as any): currVal_9.toString()));
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this.parentView.context.height;
    if (import3.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementAttribute(this._el_0,'height',((currVal_10 == null)? (null as any): currVal_10.toString()));
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = 'none';
    if (import3.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementStyle(this._el_0,'pointer-events',((this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE,currVal_11) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE,currVal_11).toString()));
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = (this.parentView.context.height + 'px');
    if (import3.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementStyle(this._el_2,'height',((this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE,currVal_12) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE,currVal_12).toString()));
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = (this.parentView.context.width + 'px');
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementStyle(this._el_2,'width',((this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE,currVal_13) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE,currVal_13).toString()));
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = import3.inlineInterpolate(1,'\n          ',this.parentView.context.label,'\n          ');
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setText(this._text_3,currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = import3.inlineInterpolate(1,'\n          ',this.parentView.context.formattedValue,'\n        ');
    if (import3.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setText(this._text_5,currVal_15);
      this._expr_15 = currVal_15;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}