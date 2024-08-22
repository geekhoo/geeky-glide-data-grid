import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useMemo } from "@storybook/addons";
import { BuilderThemeWrapper } from "../../stories/story-utils.js";
import { GridCellKind } from "../../internal/data-grid/data-grid-types.js";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { styled } from "@linaria/react";
export default {
    title: "Tests/TestCases/Bugs",
    decorators: [
        (Story) => (_jsx(BuilderThemeWrapper, { width: 1000, height: 800, children: _jsx(Story, {}) })),
    ],
};
const bug70Gen = ([, row]) => ({
    allowOverlay: true,
    kind: GridCellKind.Number,
    data: row,
    displayData: row.toString(),
});
const ignore = () => undefined;
const Bug70Style = styled.div `
    display: flex;
    flex-direction: column;

    > a {
        margin-bottom: 20px;
    }
`;
export function Bug70() {
    const cols = [
        { title: "Col1", width: 100 },
        { title: "Col2", width: 100 },
    ];
    return (_jsxs(Bug70Style, { className: "App", children: [_jsx("p", { children: "To cause error: scroll down at least one row, edit a cell in Col2, and hit Tab" }), _jsx("a", { href: "https://github.com/glideapps/glide-data-grid/issues/70", target: "_blank", rel: "noreferrer", children: "Original report" }), _jsx(DataEditor, { width: 500, height: 500, rows: 100, columns: cols, getCellContent: bug70Gen, onCellEdited: ignore })] }));
}
const filterColumnsGen = ([col, row]) => ({
    allowOverlay: true,
    kind: GridCellKind.Text,
    data: `${col} - ${row}`,
    displayData: `${col} - ${row}`,
});
const filteringColumns = [
    { title: "Col AAAA", width: 120 },
    { title: "Col AAA", width: 120 },
    { title: "Col AA", width: 120 },
    { title: "Col A", width: 120 },
    { title: "Col", width: 120 },
];
export function FilterColumns() {
    const [searchText, setSearchText] = useState("");
    const cols = useMemo(() => {
        if (searchText === "") {
            return filteringColumns;
        }
        return filteringColumns.filter(c => c.title.toLowerCase().includes(searchText.toLowerCase()));
    }, [searchText]);
    const onInputChange = (e) => {
        setSearchText(e.target.value);
    };
    return (_jsxs("div", { children: [_jsx("input", { value: searchText, onChange: onInputChange }), _jsx(DataEditor, { width: 1000, height: 500, rows: 100, columns: cols, getCellContent: filterColumnsGen, smoothScrollX: true, smoothScrollY: true })] }));
}
