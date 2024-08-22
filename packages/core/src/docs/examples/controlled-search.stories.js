import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { useEventListener } from "../../common/utils.js";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, defaultProps, useAllMockedKinds, } from "../../data-editor/stories/utils.js";
import { CompactSelection } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Controlling search results", description: _jsx(_Fragment, { children: _jsxs(Description, { children: ["Search results can be controlled via ", _jsx(PropName, { children: "searchResults" }), ". You can implement any search algorithm you want, even a silly one."] }) }), children: _jsx(Story, {}) }) })),
    ],
};
export const ControlledSearch = () => {
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
    const [searchValue, setSearchValue] = React.useState("");
    const searchResults = React.useMemo(() => {
        const result = [];
        for (let i = 0; i < searchValue.length; i++) {
            result.push([3, i]);
        }
        return result;
    }, [searchValue.length]);
    return (_jsx(DataEditor, { ...defaultProps, searchResults: searchResults, getCellContent: getCellContent, getCellsForSelection: true, gridSelection: selection, onGridSelectionChange: setSelection, columns: cols, onCellEdited: setCellValue, onColumnResize: onColumnResize, searchValue: searchValue, onSearchValueChange: setSearchValue, showSearch: showSearch, onSearchClose: () => {
            setShowSearch(false);
            setSearchValue("");
        }, rows: 10_000 }));
};
