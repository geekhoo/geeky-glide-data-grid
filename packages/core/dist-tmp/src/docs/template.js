import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { GridCellKind } from "../internal/data-grid/data-grid-types.js";
import { DataEditorAll as DataEditor } from "../data-editor-all.js";
import { SimpleThemeWrapper } from "../stories/story-utils.js";
import { DocWrapper, Highlight, Marked, Wrapper } from "./doc-wrapper.js";
export default {
    title: "Glide-Data-Grid/Docs",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(Story, {}) })),
    ],
};
export const Template = () => {
    const basicGetCellContent = React.useCallback((cell) => {
        return {
            kind: GridCellKind.Text,
            allowOverlay: false,
            displayData: cell.toString(),
            data: cell.toString(),
        };
    }, []);
    const cols = React.useMemo(() => {
        return [
            {
                title: "First",
                width: 150,
            },
            {
                title: "Second",
                width: 150,
            },
        ];
    }, []);
    return (_jsxs(DocWrapper, { children: [_jsx(Marked, { children: `
# Section Title

> A nice little callout block

Tell me what you're going to tell me.` }), _jsx(Highlight, { children: `
// Put the example code here
const columns: GridColumn[] = [
    { title: "First", width: 150 },
    { title: "Second", width: 150 }
];

<DataEditor {...rest} columns={columns} />
` }), _jsx(Wrapper, { height: 200, children: _jsx(DataEditor, { getCellContent: basicGetCellContent, columns: cols, rows: 50 }) })] }));
};
Template.storyName = "00. Template";
