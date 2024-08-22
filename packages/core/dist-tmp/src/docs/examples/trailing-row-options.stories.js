import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, clearCell, } from "../../data-editor/stories/utils.js";
import { GridColumnIcon } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Trailing row options", description: _jsxs(Description, { children: ["You can customize the trailing row in each column by setting a", " ", _jsx(PropName, { children: "trailingRowOptions" }), " in your columns."] }), children: _jsx(Story, {}) }) })),
    ],
};
const trailingRowOptionsColumnIndexesHint = {
    2: "Smol text",
    3: "Add",
    5: "New",
};
const trailingRowOptionsColumnIndexesIcon = {
    2: GridColumnIcon.HeaderArray,
    3: GridColumnIcon.HeaderEmoji,
    5: GridColumnIcon.HeaderNumber,
};
const trailingRowOptionsColumnIndexesTarget = {
    2: 0,
    3: 0,
    5: 0,
};
const trailingRowOptionsColumnIndexesDisabled = {
    3: true,
};
const trailingRowOptionsColumnIndexesTheme = {
    2: {
        baseFontStyle: "10px",
    },
};
export const TrailingRowOptions = () => {
    const { cols, getCellContent, setCellValueRaw, setCellValue } = useMockDataGenerator(60, false);
    const [numRows, setNumRows] = React.useState(50);
    const onRowAppended = React.useCallback(() => {
        const newRow = numRows;
        for (let c = 0; c < 6; c++) {
            const cell = getCellContent([c, newRow]);
            setCellValueRaw([c, newRow], clearCell(cell));
        }
        setNumRows(cv => cv + 1);
    }, [getCellContent, numRows, setCellValueRaw]);
    const columnsWithRowOptions = React.useMemo(() => {
        return cols.map((c, idx) => ({
            ...c,
            trailingRowOptions: {
                hint: trailingRowOptionsColumnIndexesHint[idx],
                addIcon: trailingRowOptionsColumnIndexesIcon[idx],
                targetColumn: trailingRowOptionsColumnIndexesTarget[idx],
                disabled: trailingRowOptionsColumnIndexesDisabled[idx],
                themeOverride: trailingRowOptionsColumnIndexesTheme[idx],
            },
        }));
    }, [cols]);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: columnsWithRowOptions, rowMarkers: "both", onCellEdited: setCellValue, trailingRowOptions: {
            tint: true,
            sticky: true,
        }, rows: numRows, onRowAppended: onRowAppended }));
};
