import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, useMockDataGenerator, KeyName, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(Story, {}) })),
    ],
};
export const ObserveVisibleRegion = () => {
    const { cols, getCellContent } = useMockDataGenerator(100);
    const [visibleRegion, setVisibleRegion] = React.useState({ x: 0, y: 0, width: 0, height: 0 });
    return (_jsx(BeautifulWrapper, { title: "Observe Visible Region", description: _jsxs(_Fragment, { children: [_jsxs(Description, { children: ["The visible region can be observed using ", _jsx(PropName, { children: "onVisibleRegionChanged" })] }), _jsxs(MoreInfo, { children: ["Then current visible region is x:", _jsx(KeyName, { children: visibleRegion.x }), " y:", _jsx(KeyName, { children: visibleRegion.y }), " width:", _jsx(KeyName, { children: visibleRegion.width }), " height:", _jsx(KeyName, { children: visibleRegion.height })] })] }), children: _jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, rows: 1000, onVisibleRegionChanged: setVisibleRegion }) }));
};
