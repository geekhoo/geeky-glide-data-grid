import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { CompactSelection } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Group collapse", description: _jsxs(_Fragment, { children: [_jsxs(Description, { children: ["Through clever usage of ", _jsx(PropName, { children: "onGroupHeaderClicked" }), " you can implement group collapsing. This is a very basic version however it is possible to go much further."] }), _jsx(MoreInfo, { children: "Cells under a certain size will not attempt to render to save some frames." })] }), children: _jsx(Story, {}) }) })),
    ],
};
function useCollapsableColumnGroups(cols) {
    const [collapsed, setCollapsed] = React.useState([]);
    const onGroupHeaderClicked = React.useCallback((colIndex, args) => {
        const group = cols[colIndex].group ?? "";
        setCollapsed(cv => (cv.includes(group) ? cv.filter(g => g !== group) : [...cv, group]));
        args.preventDefault();
    }, [cols]);
    const [selectedColumns, setSelectedColumns] = React.useState(CompactSelection.empty());
    const setCols = React.useCallback((newVal, trigger) => {
        if (trigger === "group")
            return;
        setSelectedColumns(newVal);
    }, []);
    const columns = React.useMemo(() => {
        return cols.map(c => {
            if (!collapsed.includes(c.group ?? ""))
                return {
                    ...c,
                    hasMenu: true,
                };
            return {
                ...c,
                width: 8,
                hasMenu: true,
            };
        });
    }, [collapsed, cols]);
    return {
        columns,
        onGroupHeaderClicked,
        selectedColumns,
        onSelectedColumnsChange: setCols,
    };
}
export const ColumnGroupCollapse = () => {
    const { cols, getCellContent } = useMockDataGenerator(100, true, true);
    const groupHeaderArgs = useCollapsableColumnGroups(cols);
    return (_jsx(DataEditor, { ...defaultProps, ...groupHeaderArgs, getCellContent: getCellContent, groupHeaderHeight: 24, rows: 1000, rowMarkers: "both" }));
};
