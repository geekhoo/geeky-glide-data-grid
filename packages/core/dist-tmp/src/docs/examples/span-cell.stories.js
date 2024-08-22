import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable sonarjs/no-duplicate-string */
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { GridCellKind } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Spans", description: _jsxs(Description, { children: ["By setting the ", _jsx(PropName, { children: "span" }), " of a cell you can create spans in your grid. All cells within a span must return consistent data for defined behavior.", _jsxs(MoreInfo, { children: ["Spans will always be split if they span frozen and non-frozen columns. By default selections are always expanded to include a span. This can be disabled using the", " ", _jsx(PropName, { children: "spanRangeBehavior" }), " prop."] })] }), children: _jsx(Story, {}) }) })),
    ],
};
export const SpanCell = () => {
    const { cols, getCellContent } = useMockDataGenerator(100, true, true);
    const mangledGetCellContent = React.useCallback(cell => {
        const [col, row] = cell;
        if (row === 6 && col >= 3 && col <= 4) {
            return {
                kind: GridCellKind.Text,
                allowOverlay: false,
                data: "Span Cell that is very long and will go past the cell limits",
                span: [3, 4],
                displayData: "Span Cell that is very long and will go past the cell limits",
            };
        }
        if (row === 5) {
            return {
                kind: GridCellKind.Text,
                allowOverlay: false,
                data: "Span Cell that is very long and will go past the cell limits",
                span: [0, 99],
                displayData: "Span Cell that is very long and will go past the cell limits",
            };
        }
        return getCellContent(cell);
    }, [getCellContent]);
    const getCellsForSelection = React.useCallback((selection) => {
        const result = [];
        for (let y = selection.y; y < selection.y + selection.height; y++) {
            const row = [];
            for (let x = selection.x; x < selection.x + selection.width; x++) {
                row.push(mangledGetCellContent([x, y]));
            }
            result.push(row);
        }
        return result;
    }, [mangledGetCellContent]);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: mangledGetCellContent, getCellsForSelection: getCellsForSelection, columns: cols, freezeColumns: 2, rows: 300, rowMarkers: "both" }));
};
