import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, defaultProps, useAllMockedKinds, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Lotsa cell kinds", description: _jsxs(Description, { children: ["Data grid supports plenty cell kinds. Anything under ", _jsx(PropName, { children: "GridCellKind" }), "."] }), children: _jsx(Story, {}) }) })),
    ],
};
export const AllCellKinds = () => {
    const { cols, getCellContent, onColumnResize, setCellValue } = useAllMockedKinds();
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, onCellEdited: setCellValue, onPaste: true, rowHeight: 44, onColumnResize: onColumnResize, highlightRegions: [
            {
                color: "#ff00ff33",
                range: {
                    x: 1,
                    y: 1,
                    width: 3,
                    height: 3,
                },
            },
        ], cellActivationBehavior: "single-click", editorBloom: [-4, -4], drawFocusRing: false, rows: 1000 }));
};
