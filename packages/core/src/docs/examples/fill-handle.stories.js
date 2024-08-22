import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, useMockDataGenerator, defaultProps, clearCell, } from "../../data-editor/stories/utils.js";
import { GridCellKind } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Fill handle", description: _jsxs(_Fragment, { children: [_jsx(Description, { children: "Fill handles can be used to downfill data with the mouse." }), _jsxs(MoreInfo, { children: ["Just click and drag, the top row will be copied down. Enable using the", " ", _jsx(PropName, { children: "fillHandle" }), " prop."] })] }), children: _jsx(Story, {}) }) })),
    ],
};
export const FillHandle = () => {
    const { cols, getCellContent, setCellValueRaw, setCellValue } = useMockDataGenerator(60, false);
    const [numRows, setNumRows] = React.useState(50);
    const getCellContentMangled = React.useCallback(i => {
        let val = getCellContent(i);
        if (i[0] === 1 && val.kind === GridCellKind.Text) {
            val = {
                ...val,
                readonly: true,
            };
        }
        return val;
    }, [getCellContent]);
    const onRowAppended = React.useCallback(() => {
        const newRow = numRows;
        for (let c = 0; c < 6; c++) {
            const cell = getCellContent([c, newRow]);
            setCellValueRaw([c, newRow], clearCell(cell));
        }
        setNumRows(cv => cv + 1);
    }, [getCellContent, numRows, setCellValueRaw]);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContentMangled, columns: cols, rowMarkers: "both", onPaste: true, fillHandle: true, keybindings: { downFill: true, rightFill: true }, onCellEdited: setCellValue, trailingRowOptions: {
            sticky: true,
            tint: true,
            hint: "New row...",
        }, rows: numRows, onRowAppended: onRowAppended }));
};
