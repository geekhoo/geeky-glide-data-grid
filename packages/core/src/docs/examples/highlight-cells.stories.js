import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import {} from "../../data-editor/data-editor.js";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { CompactSelection } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "HighlightCells", description: _jsxs(Description, { children: ["The ", _jsx(PropName, { children: "highlightRegions" }), " prop can be set to provide additional hinting or context for the current selection."] }), children: _jsx(Story, {}) }) })),
    ],
};
export const HighlightCells = () => {
    const { cols, getCellContent } = useMockDataGenerator(100);
    const [gridSelection, setGridSelection] = React.useState({
        columns: CompactSelection.empty(),
        rows: CompactSelection.empty(),
    });
    const highlights = React.useMemo(() => {
        if (gridSelection.current === undefined)
            return undefined;
        const [col, row] = gridSelection.current.cell;
        return [
            {
                color: "#44BB0022",
                range: {
                    x: col + 2,
                    y: row,
                    width: 10,
                    height: 10,
                },
                style: "solid",
            },
            {
                color: "#b000b021",
                range: {
                    x: col,
                    y: row + 2,
                    width: 1,
                    height: 1,
                },
            },
        ];
    }, [gridSelection]);
    return (_jsx(DataEditor, { ...defaultProps, rowMarkers: "both", freezeColumns: 1, highlightRegions: highlights, gridSelection: gridSelection, onGridSelectionChange: setGridSelection, getCellContent: getCellContent, columns: cols, verticalBorder: c => c > 0, rows: 1000 }));
};
