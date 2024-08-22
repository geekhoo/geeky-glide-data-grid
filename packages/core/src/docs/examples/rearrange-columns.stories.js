import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Rearrange Columns", description: _jsxs(Description, { children: ["Columns can be rearranged by drag and dropping, as long as you respond to the", " ", _jsx(PropName, { children: "onColumnMoved" }), " callback."] }), children: _jsx(Story, {}) }) })),
    ],
};
export const RearrangeColumns = () => {
    const { cols, getCellContent } = useMockDataGenerator(60);
    // This is a dirty hack because the mock generator doesn't really support changing this. In a real data source
    // you should track indexes properly
    const [sortableCols, setSortableCols] = React.useState(cols);
    const onColMoved = React.useCallback((startIndex, endIndex) => {
        setSortableCols(old => {
            const newCols = [...old];
            const [toMove] = newCols.splice(startIndex, 1);
            newCols.splice(endIndex, 0, toMove);
            return newCols;
        });
    }, []);
    const onColProposeMove = React.useCallback((_startIndex, endIndex) => {
        return endIndex !== 3;
    }, []);
    const getCellContentMangled = React.useCallback(([col, row]) => {
        const remappedCol = cols.findIndex(c => c.title === sortableCols[col].title);
        return getCellContent([remappedCol, row]);
    }, [cols, getCellContent, sortableCols]);
    return (_jsx(DataEditor, { ...defaultProps, freezeColumns: 1, rowMarkers: "both", getCellContent: getCellContentMangled, onColumnProposeMove: onColProposeMove, columns: sortableCols, onColumnMoved: onColMoved, columnSelectionBlending: "mixed", rangeSelectionBlending: "mixed", rows: 1000 }));
};
