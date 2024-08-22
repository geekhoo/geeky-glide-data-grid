import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, useMockDataGenerator, defaultProps } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Input blending", description: _jsx(Description, { children: "Input blending can be enabled or disable between row, column, and range selections. Multi-selections can also be enabled or disabled with the same level of granularity." }), children: _jsx(Story, {}) }) })),
    ],
};
export const InputBlending = p => {
    const { cols, getCellContent } = useMockDataGenerator(30);
    return (_jsx(DataEditor, { ...defaultProps, rowMarkers: p.rowMultiSelect === "none" ? "number" : "both", keybindings: {
            clear: true,
            copy: true,
            downFill: true,
            rightFill: true,
            pageDown: true,
            pageUp: true,
            paste: true,
            search: true,
            selectAll: true,
            selectColumn: true,
            selectRow: true,
        }, getCellsForSelection: true, rangeSelect: p.rangeMultiSelect, columnSelect: p.columnMultiSelect, rowSelect: p.rowMultiSelect, rangeSelectionBlending: p.rangeBlending, columnSelectionBlending: p.columnBlending, rowSelectionBlending: p.rowBlending, getCellContent: getCellContent, columns: cols, rows: 10_000 }));
};
InputBlending.args = {
    rangeBlending: "mixed",
    columnBlending: "mixed",
    rowBlending: "mixed",
    rangeMultiSelect: "rect",
    columnMultiSelect: "multi",
    rowMultiSelect: "multi",
};
InputBlending.argTypes = {
    rangeBlending: {
        control: { type: "select" },
        options: ["mixed", "exclusive"],
    },
    columnBlending: {
        control: { type: "select" },
        options: ["mixed", "exclusive"],
    },
    rowBlending: {
        control: { type: "select" },
        options: ["mixed", "exclusive"],
    },
    rangeMultiSelect: {
        control: { type: "select" },
        options: ["none", "cell", "rect", "multi-cell", "multi-rect"],
    },
    columnMultiSelect: {
        control: { type: "select" },
        options: ["none", "single", "multi"],
    },
    rowMultiSelect: {
        control: { type: "select" },
        options: ["none", "single", "multi"],
    },
};
