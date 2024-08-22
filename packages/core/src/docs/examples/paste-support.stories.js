import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Paste support", description: _jsxs(_Fragment, { children: [_jsxs(Description, { children: ["The data grid can handle paste automatically by returning true from", " ", _jsx(PropName, { children: "onPaste" }), ". You can also return false and handle paste yourself. If paste is undefined the DataEditor will do its best to paste to the current cell."] }), _jsx(MoreInfo, { children: "Paste supports the copy format of Google Sheets and Excel. Below is an example of data copied from excel with some escaped text." }), _jsx("textarea", { value: `Sunday	Dogs	https://google.com
Monday	Cats	https://google.com
Tuesday	Turtles	https://google.com
Wednesday	Bears	https://google.com
Thursday	"L  ions"	https://google.com
Friday	Pigs	https://google.com
Saturday	"Turkeys and some ""quotes"" and
a new line char ""more quotes"" plus a tab  ."	https://google.com`, style: {
                                width: "100%",
                                marginBottom: 20,
                                borderRadius: 9,
                                minHeight: 200,
                                padding: 10,
                            } })] }), children: _jsx(Story, {}) }) })),
    ],
};
export const PasteSupport = () => {
    const { cols, getCellContent, onColumnResize, setCellValue } = useMockDataGenerator(50, false);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, rowMarkers: "both", columns: cols, onCellEdited: setCellValue, onColumnResize: onColumnResize, onPaste: true, rows: 400 }));
};
