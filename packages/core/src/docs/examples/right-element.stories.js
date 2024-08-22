import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Right Element", description: _jsxs(Description, { children: ["A DOM element may be added as a trailer to the grid by using the", " ", _jsx(PropName, { children: "rightElement" }), " prop."] }), children: _jsx(Story, {}) }) })),
    ],
};
export const RightElement = () => {
    const { cols, getCellContent, setCellValue } = useMockDataGenerator(8, false);
    const columns = React.useMemo(() => cols.map(c => ({ ...c, grow: 1 })), [cols]);
    const [numRows, setNumRows] = React.useState(300);
    const onRowAppended = React.useCallback(() => {
        const newRow = numRows;
        setNumRows(cv => cv + 1);
        for (let c = 0; c < 6; c++) {
            setCellValue([c, newRow], {
                displayData: "",
                data: "",
            });
        }
    }, [numRows, setCellValue]);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: columns, rowMarkers: "both", onCellEdited: setCellValue, trailingRowOptions: {
            hint: "New row...",
            sticky: true,
            tint: true,
        }, rows: numRows, onRowAppended: onRowAppended, rightElementProps: { sticky: true }, rightElement: _jsxs("div", { style: {
                height: "100%",
                padding: "20px 20px 40px 20px",
                width: 200,
                color: "black",
                whiteSpace: "pre-wrap",
                backgroundColor: "rgba(240, 240, 250, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
                backdropFilter: "blur(12px)",
            }, children: ["This is a real DOM element. You can put whatever you want here. You can also size it as big as you want. ", "\n\n", "It also does not have to be sticky."] }) }));
};
