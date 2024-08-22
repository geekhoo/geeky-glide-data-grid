import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { useEventListener } from "../../common/utils.js";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, defaultProps, useAllMockedKinds } from "../../data-editor/stories/utils.js";
import { CompactSelection } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Filtering down to search results", description: _jsx(_Fragment, { children: _jsx(Description, { children: "You can update your grid however you want based on search inputs." }) }), children: _jsx(Story, {}) }) })),
    ],
};
export const SearchAsFilter = () => {
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
    return (_jsx(DataEditor, { ...defaultProps, searchResults: [], getCellContent: getCellContent, getCellsForSelection: true, gridSelection: selection, onGridSelectionChange: setSelection, columns: cols, onCellEdited: setCellValue, onColumnResize: onColumnResize, searchValue: searchValue, onSearchValueChange: setSearchValue, showSearch: showSearch, onSearchClose: () => {
            setShowSearch(false);
            setSearchValue("");
        }, rows: searchValue.length === 0 ? 10_000 : searchValue.length }));
};
