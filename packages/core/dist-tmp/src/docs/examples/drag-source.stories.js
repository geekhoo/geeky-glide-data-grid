import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Drag source", description: _jsx(_Fragment, { children: _jsxs(Description, { children: ["Setting the ", _jsx(PropName, { children: "isDraggable" }), " prop can allow for more granular control over what is draggable in the grid via HTML drag and drop."] }) }), children: _jsx(Story, {}) }) })),
    ],
};
export const DragSource = p => {
    const { cols, getCellContent, onColumnResize } = useMockDataGenerator(200);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, rowMarkers: "both", rows: 5000, onRowMoved: (s, e) => window.alert(`Moved row ${s} to ${e}`), onColumnMoved: (s, e) => window.alert(`Moved col ${s} to ${e}`), onColumnResize: onColumnResize, isDraggable: p.isDraggable, onDragStart: e => {
            e.setData("text/plain", "Drag data here!");
        } }));
};
DragSource.argTypes = {
    isDraggable: {
        control: { type: "select" },
        options: [true, false, "cell", "header"],
    },
};
DragSource.args = {
    isDraggable: false,
};
