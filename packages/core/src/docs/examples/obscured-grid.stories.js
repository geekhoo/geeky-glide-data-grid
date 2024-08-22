import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable no-console */
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsxs(BeautifulWrapper, { title: "Obscured Data Grid", description: _jsxs(_Fragment, { children: [_jsx(Description, { children: "The data grid should respect being obscured by other elements" }), _jsx(MoreInfo, { children: "This is mostly a test area because its hard to test with unit tests." })] }), children: [_jsx(Story, {}), _jsx("div", { style: {
                            position: "absolute",
                            top: 0,
                            left: "50%",
                            width: "50%",
                            height: "100%",
                            background: "rgba(0,0,0,0.5)",
                            zIndex: 100,
                        } })] }) })),
    ],
};
export const ObscuredDataGrid = () => {
    const { cols, getCellContent, setCellValue } = useMockDataGenerator(60, false);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, onItemHovered: x => console.log("onItemHovered", x), onCellClicked: x => console.log("onCellClicked", x), onHeaderClicked: x => console.log("onHeaderClicked", x), onCellContextMenu: x => console.log("onCellContextMenu", x), onHeaderContextMenu: x => console.log("onHeaderContextMenu", x), columns: cols, rowMarkers: "both", onPaste: true, onCellEdited: setCellValue, trailingRowOptions: {
            // How to get the trailing row to look right
            sticky: true,
            tint: true,
            hint: "New row...",
        }, rows: 10_000 }));
};
