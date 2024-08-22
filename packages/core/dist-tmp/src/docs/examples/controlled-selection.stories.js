import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { CompactSelection } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(Story, {}) })),
    ],
};
export const ControlledSelection = () => {
    const { cols, getCellContent } = useMockDataGenerator(30, true, true);
    const [selection, setSelection] = React.useState({
        columns: CompactSelection.empty(),
        rows: CompactSelection.empty(),
    });
    return (_jsx(BeautifulWrapper, { title: "Controlled Selection", description: _jsxs(Description, { children: ["The selection of the grid can be controlled via ", _jsx(PropName, { children: "GridSelection" }), " and", " ", _jsx(PropName, { children: "onGridSelectionChange" }), ".", _jsx("input", { type: "range", min: 0, max: 29, value: selection.current?.cell[0] ?? 0, onChange: e => {
                        const newCol = e.target.valueAsNumber;
                        setSelection(cv => ({
                            ...cv,
                            current: {
                                cell: [newCol, cv.current?.cell[1] ?? 0],
                                range: {
                                    x: newCol,
                                    y: cv.current?.cell[1] ?? 0,
                                    width: 1,
                                    height: 1,
                                },
                                rangeStack: [],
                            },
                        }));
                    } }), _jsx("input", { type: "range", min: 0, max: 99, value: selection.current?.cell[1] ?? 0, onChange: e => {
                        const newRow = e.target.valueAsNumber;
                        setSelection(cv => ({
                            ...cv,
                            current: {
                                cell: [cv.current?.cell[0] ?? 0, newRow],
                                range: {
                                    x: cv.current?.cell[0] ?? 0,
                                    y: newRow,
                                    width: 1,
                                    height: 1,
                                },
                                rangeStack: [],
                            },
                        }));
                    } })] }), children: _jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, gridSelection: selection, onGridSelectionChange: setSelection, columns: cols, rows: 100, rowMarkers: "both" }) }));
};
