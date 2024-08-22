import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import {} from "../../data-editor/data-editor.js";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, useMockDataGenerator, KeyName, defaultProps, clearCell, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(Story, {}) })),
    ],
};
export const AppendRowHandle = () => {
    const { cols, getCellContent, setCellValueRaw, setCellValue } = useMockDataGenerator(60, false);
    const [numRows, setNumRows] = React.useState(50);
    const ref = React.useRef(null);
    const onClick = React.useCallback(() => {
        void ref.current?.appendRow(3, false);
    }, [ref]);
    const onRowAppended = React.useCallback(() => {
        const newRow = numRows;
        for (let c = 0; c < 6; c++) {
            const cell = getCellContent([c, newRow]);
            setCellValueRaw([c, newRow], clearCell(cell));
        }
        setNumRows(cv => cv + 1);
    }, [getCellContent, numRows, setCellValueRaw]);
    return (_jsx(BeautifulWrapper, { title: "appendRow Ref", description: _jsxs(_Fragment, { children: [_jsxs(Description, { children: ["Adding data can also be triggered from outside of ", _jsx(PropName, { children: "DataEditor" })] }), _jsxs(MoreInfo, { children: ["By calling ", _jsx(PropName, { children: "appendRow" }), " on a ", _jsx(PropName, { children: "ref" }), " to your grid, you can trigger the append elsewhere, like this ", _jsx(KeyName, { onClick: onClick, children: "Append" }), " button"] })] }), children: _jsx(DataEditor, { ...defaultProps, ref: ref, getCellContent: getCellContent, columns: cols, rowMarkers: "both", onCellEdited: setCellValue, trailingRowOptions: {
                hint: "New row...",
                sticky: true,
                tint: true,
            }, rows: numRows, onRowAppended: onRowAppended }) }));
};
