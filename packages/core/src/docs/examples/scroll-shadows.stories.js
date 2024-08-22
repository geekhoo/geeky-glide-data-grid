import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, useMockDataGenerator, defaultProps } from "../../data-editor/stories/utils.js";
import { CompactSelection } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Scroll Shadows", description: _jsx(_Fragment, { children: _jsx(Description, { children: "You can enable and disable the horizontal/vertical scroll shadows." }) }), children: _jsx(Story, {}) }) })),
    ],
};
export const ScrollShadows = () => {
    const { cols, getCellContent } = useMockDataGenerator(6);
    const [selection, setSelection] = React.useState({
        rows: CompactSelection.empty(),
        columns: CompactSelection.empty(),
    });
    const onSelectionChange = React.useCallback((newSel) => {
        let newRows = CompactSelection.empty();
        if (newSel.current !== undefined) {
            newRows = newRows.add([newSel.current.range.y, newSel.current.range.y + newSel.current.range.height]);
        }
        for (const b of newSel.current?.rangeStack ?? []) {
            newRows = newRows.add([b.y, b.y + b.height]);
        }
        setSelection({
            ...newSel,
            rows: newRows,
        });
    }, []);
    const theme = React.useMemo(() => ({
        accentLight: "#b1f6ff",
        horizontalBorderColor: "transparent",
        headerBottomBorderColor: "rgba(115, 116, 131, 0.16)",
    }), []);
    const getRowThemeOverride = React.useCallback(row => (row % 2 === 0 ? undefined : { bgCell: "#f5f5f6" }), []);
    return (_jsx(DataEditor, { ...defaultProps, rowMarkers: "number", gridSelection: selection, onGridSelectionChange: onSelectionChange, fixedShadowX: false, headerHeight: 26, drawFocusRing: false, rowHeight: 22, fixedShadowY: false, getRowThemeOverride: getRowThemeOverride, verticalBorder: false, getCellContent: getCellContent, columns: cols, rows: 1000, theme: theme }));
};
