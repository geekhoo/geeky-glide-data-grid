import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { GridCellKind, GridColumnIcon } from "../internal/data-grid/data-grid-types.js";
import { DataEditorAll as DataEditor } from "../data-editor-all.js";
import { SimpleThemeWrapper } from "../stories/story-utils.js";
import { DocWrapper, Highlight, Marked, Wrapper } from "./doc-wrapper.js";
export default {
    title: "Glide-Data-Grid/Docs",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(Story, {}) })),
    ],
};
export const GridColumns = () => {
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
# Basic usage

> The \`GridColumn[]\` passed to the \`DataEditor\` in the \`columns\` property should be memoized to avoid excessive re-rendering. These samples may not do this for the sake of brevity.

There are only two mandatory properties for each \`GridColumn\`: \`title\` and \`id\`. The id should be a stable id and not the index of the column. Additionally a \`width\` property can be provided which represents the width of the column in pixels. If a width is provided the id may be omited. This may change in a future version.` }), _jsx(Highlight, { children: `
const columns: GridColumn[] = [
    { title: "First", id: "first", width: 150 },
    { title: "Second", id: "second", width: 150 }
];

<DataEditor {...rest} columns={columns} />
` }), _jsx(Wrapper, { height: 200, children: _jsx(DataEditor, { getCellContent: basicGetCellContent, columns: cols, rows: 50 }) }), _jsx(Marked, { children: `
# Header icons

Default header icons are available. They can also be reaplced by passing a new map to the \`headerIcons\` property.` }), _jsx(Highlight, { children: `
const columns: GridColumn[] = [
    { title: "Name", id: "name", width: 250, icon: GridColumnIcon.HeaderString, 
      overlayIcon: GridColumnIcon.RowOwnerOverlay 
    },
    { title: "Age", id: "age", width: 100, icon: GridColumnIcon.HeaderNumber },
    { title: "Avatar", id: "avatar", width: 80, icon: GridColumnIcon.HeaderImage },
];

<DataEditor {...rest} columns={columns} />
` }), _jsx(Wrapper, { height: 200, children: _jsx(DataEditor, { getCellContent: basicGetCellContent, columns: [
                        {
                            title: "Name",
                            width: 250,
                            icon: GridColumnIcon.HeaderString,
                            overlayIcon: GridColumnIcon.RowOwnerOverlay,
                        },
                        { title: "Age", width: 120, icon: GridColumnIcon.HeaderNumber },
                        { title: "Avatar", width: 100, icon: GridColumnIcon.HeaderImage },
                    ], rows: 50 }) }), _jsx(Marked, { children: `
# Header theming

Headers can be provided with individual theme overrides which themes both the header and its column cells.` }), _jsx(Highlight, { children: `
const columns: GridColumn[] = [
    { title: "Name", id="name", width: 250, icon: GridColumnIcon.HeaderString },
    { title: "Age", id="age", width: 100, icon: GridColumnIcon.HeaderNumber, themeOverride: {
        bgIconHeader: "#00967d",
        textDark: "#00c5a4",
        textHeader: "#00c5a4",
    } },
    { title: "Avatar", id="avatar", width: 80, icon: GridColumnIcon.HeaderImage },
];

<DataEditor {...rest} columns={columns} />
` }), _jsx(Wrapper, { height: 200, children: _jsx(DataEditor, { getCellContent: basicGetCellContent, columns: [
                        { title: "Name", width: 250, icon: GridColumnIcon.HeaderString },
                        {
                            title: "Age",
                            width: 100,
                            icon: GridColumnIcon.HeaderNumber,
                            themeOverride: {
                                bgIconHeader: "#00967d",
                                textDark: "#00c5a4",
                                textHeader: "#00c5a4",
                            },
                        },
                        { title: "Avatar", width: 80, icon: GridColumnIcon.HeaderImage },
                    ], rows: 50 }) })] }));
};
GridColumns.storyName = "03. Grid Columns";
