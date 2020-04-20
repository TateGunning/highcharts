/* *
 *
 *  (c) 2016 Highsoft AS
 *  Authors: Jon Arild Nygard
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
// eslint-disable-next-line valid-jsdoc
/**
 * @private
 */
function getBreakFromNode(node, max) {
    var from = node.collapseStart || 0, to = node.collapseEnd || 0;
    // In broken-axis, the axis.max is minimized until it is not within a break.
    // Therefore, if break.to is larger than axis.max, the axis.to should not
    // add the 0.5 axis.tickMarkOffset, to avoid adding a break larger than
    // axis.max
    // TODO consider simplifying broken-axis and this might solve itself
    if (to >= max) {
        from -= 0.5;
    }
    return {
        from: from,
        to: to,
        showPoints: false
    };
}
/**
 * Check if a node is collapsed.
 *
 * @private
 * @function isCollapsed
 *
 * @param {Highcharts.Axis} axis
 *        The axis to check against.
 *
 * @param {object} node
 *        The node to check if is collapsed.
 *
 * @param {number} pos
 *        The tick position to collapse.
 *
 * @return {boolean}
 *         Returns true if collapsed, false if expanded.
 */
function isCollapsed(axis, node) {
    var breaks = (axis.options.breaks || []), obj = getBreakFromNode(node, axis.max);
    return breaks.some(function (b) {
        return b.from === obj.from && b.to === obj.to;
    });
}
/**
 * Calculates the new axis breaks to collapse a node.
 *
 * @private
 * @function collapse
 *
 * @param {Highcharts.Axis} axis
 * The axis to check against.
 *
 * @param {Highcharts.GridNode} node
 * The node to collapse.
 *
 * @param {number} pos
 * The tick position to collapse.
 *
 * @return {Array<object>}
 * Returns an array of the new breaks for the axis.
 */
function collapse(axis, node) {
    var breaks = (axis.options.breaks || []), obj = getBreakFromNode(node, axis.max);
    breaks.push(obj);
    return breaks;
}
/**
 * Calculates the new axis breaks to expand a node.
 *
 * @private
 * @function expand
 *
 * @param {Highcharts.Axis} axis
 * The axis to check against.
 *
 * @param {Highcharts.GridNode} node
 * The node to expand.
 *
 * @param {number} pos
 * The tick position to expand.
 *
 * @return {Array<object>}
 * Returns an array of the new breaks for the axis.
 */
function expand(axis, node) {
    var breaks = (axis.options.breaks || []), obj = getBreakFromNode(node, axis.max);
    // Remove the break from the axis breaks array.
    return breaks.reduce(function (arr, b) {
        if (b.to !== obj.to || b.from !== obj.from) {
            arr.push(b);
        }
        return arr;
    }, []);
}
/**
 * Calculates the new axis breaks after toggling the collapse/expand state of a
 * node. If it is collapsed it will be expanded, and if it is exapended it will
 * be collapsed.
 *
 * @private
 * @function toggleCollapse
 *
 * @param {Highcharts.Axis} axis
 * The axis to check against.
 *
 * @param {Highcharts.GridNode} node
 * The node to toggle.
 *
 * @return {Array<object>}
 * Returns an array of the new breaks for the axis.
 */
function toggleCollapse(axis, node) {
    return (isCollapsed(axis, node) ?
        expand(axis, node) :
        collapse(axis, node));
}
var exports = {
    collapse: collapse,
    expand: expand,
    getBreakFromNode: getBreakFromNode,
    isCollapsed: isCollapsed,
    toggleCollapse: toggleCollapse
};
export default exports;
