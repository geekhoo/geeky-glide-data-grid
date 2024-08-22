import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, useMockDataGenerator, defaultProps, clearCell, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Add data", description: _jsx(_Fragment, { children: _jsx(Description, { children: "You can return a different location to have the new row append take place." }) }), children: _jsx(Story, {}) }) })),
    ],
};
export const AddDataToTop = () => {
    const { cols, getCellContent, setCellValueRaw, setCellValue } = useMockDataGenerator(60, false);
    const [numRows, setNumRows] = React.useState(50);
    const onRowAppended = React.useCallback(async () => {
        // shift all of the existing cells down
        for (let y = numRows; y > 0; y--) {
            for (let x = 0; x < 6; x++) {
                setCellValueRaw([x, y], getCellContent([x, y - 1]));
            }
        }
        for (let c = 0; c < 6; c++) {
            const cell = getCellContent([c, 0]);
            setCellValueRaw([c, 0], clearCell(cell));
        }
        setNumRows(cv => cv + 1);
        return "top";
    }, [getCellContent, numRows, setCellValueRaw]);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, rowMarkers: "both", onCellEdited: setCellValue, trailingRowOptions: {
            hint: "New row...",
            sticky: true,
            tint: true,
        }, rows: numRows, onRowAppended: onRowAppended }));
};
