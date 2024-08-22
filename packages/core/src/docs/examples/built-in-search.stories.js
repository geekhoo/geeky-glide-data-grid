import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { useEventListener } from "../../common/utils.js";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, KeyName, defaultProps, useAllMockedKinds, } from "../../data-editor/stories/utils.js";
import { CompactSelection } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Search is easy", description: _jsxs(_Fragment, { children: [_jsxs(Description, { children: ["Search for any data in your grid by setting ", _jsx(PropName, { children: "showSearch" }), "."] }), _jsxs(MoreInfo, { children: ["In this story, ", _jsx(KeyName, { children: "Ctrl" }), " (", _jsx(KeyName, { children: "\u2318" }), " on Mac) +", " ", _jsx(KeyName, { children: "f" }), " toggles the search bar. Make sure you're focused on the Data Grid!"] })] }), children: _jsx(Story, {}) }) })),
    ],
};
export const BuiltInSearch = () => {
    const { cols, getCellContent, onColumnResize, setCellValue } = useAllMockedKinds();
    const [showSearch, setShowSearch] = React.useState(false);
    const [selection, setSelection] = React.useState({
        rows: CompactSelection.empty(),
        columns: CompactSelection.empty(),
    });
    useEventListener("keydown", React.useCallback(event => {
        if ((event.ctrlKey || event.metaKey) && event.code === "KeyF") {
            setShowSearch(cv => !cv);
            event.stopPropagation();
            event.preventDefault();
        }
    }, []), window, false, true);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, getCellsForSelection: true, gridSelection: selection, onGridSelectionChange: setSelection, columns: cols, onCellEdited: setCellValue, onColumnResize: onColumnResize, showSearch: showSearch, onSearchClose: () => setShowSearch(false), rows: 10_000 }));
};
