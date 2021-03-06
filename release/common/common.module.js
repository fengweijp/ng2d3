"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("@angular/core");
var chart_component_1 = require("./charts/chart.component");
exports.ChartComponent = chart_component_1.ChartComponent;
var legend_component_1 = require("./legend.component");
exports.LegendComponent = legend_component_1.LegendComponent;
var scale_legend_component_1 = require("./scale-legend.component");
exports.ScaleLegendComponent = scale_legend_component_1.ScaleLegendComponent;
var axes_module_1 = require("./axes/axes.module");
var tooltip_1 = require("./tooltip");
var circle_series_component_1 = require("./circle-series.component");
exports.CircleSeriesComponent = circle_series_component_1.CircleSeriesComponent;
var circle_component_1 = require("./circle.component");
exports.CircleComponent = circle_component_1.CircleComponent;
var grid_panel_component_1 = require("./grid-panel.component");
exports.GridPanelComponent = grid_panel_component_1.GridPanelComponent;
var grid_panel_series_component_1 = require("./grid-panel-series.component");
exports.GridPanelSeriesComponent = grid_panel_series_component_1.GridPanelSeriesComponent;
var svg_linear_gradient_component_1 = require("./svg-linear-gradient.component");
exports.SvgLinearGradientComponent = svg_linear_gradient_component_1.SvgLinearGradientComponent;
var svg_radial_gradient_component_1 = require("./svg-radial-gradient.component");
exports.SvgRadialGradientComponent = svg_radial_gradient_component_1.SvgRadialGradientComponent;
var timeline_component_1 = require("./timeline.component");
exports.Timeline = timeline_component_1.Timeline;
var common_1 = require("@angular/common");
var area_component_1 = require("./area.component");
exports.AreaComponent = area_component_1.AreaComponent;
var area_tooltip_component_1 = require("./area-tooltip.component");
exports.AreaTooltip = area_tooltip_component_1.AreaTooltip;
var base_chart_component_1 = require("./base-chart.component");
exports.BaseChartComponent = base_chart_component_1.BaseChartComponent;
__export(require("./tooltip"));
var COMPONENTS = [
    area_component_1.AreaComponent,
    area_tooltip_component_1.AreaTooltip,
    chart_component_1.ChartComponent,
    legend_component_1.LegendComponent,
    scale_legend_component_1.ScaleLegendComponent,
    circle_component_1.CircleComponent,
    circle_series_component_1.CircleSeriesComponent,
    grid_panel_component_1.GridPanelComponent,
    grid_panel_series_component_1.GridPanelSeriesComponent,
    svg_linear_gradient_component_1.SvgLinearGradientComponent,
    svg_radial_gradient_component_1.SvgRadialGradientComponent,
    timeline_component_1.Timeline
];
var CommonModule = (function () {
    function CommonModule() {
    }
    CommonModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        axes_module_1.AxesModule,
                        tooltip_1.TooltipModule
                    ],
                    declarations: COMPONENTS.slice(),
                    exports: [
                        common_1.CommonModule,
                        axes_module_1.AxesModule,
                        tooltip_1.TooltipModule
                    ].concat(COMPONENTS)
                },] },
    ];
    /** @nocollapse */
    CommonModule.ctorParameters = [];
    return CommonModule;
}());
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map