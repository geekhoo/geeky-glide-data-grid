import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, defaultProps, useAllMockedKinds, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Row Hover Effect", description: _jsxs(Description, { children: ["Through careful usage of the ", _jsx(PropName, { children: "onItemHovered" }), " callback it is possible to easily create a row hover effect."] }), children: _jsx(Story, {}) }) })),
    ],
};
export const RowHover = () => {
    const { cols, getCellContent } = useAllMockedKinds();
    const [hoverRow, setHoverRow] = React.useState(undefined);
    const onItemHovered = React.useCallback((args) => {
        const [_, row] = args.location;
        setHoverRow(args.kind !== "cell" ? undefined : row);
    }, []);
    const getRowThemeOverride = React.useCallback(row => {
        if (row !== hoverRow)
            return undefined;
        return {
            bgCell: "#f7f7f7",
            bgCellMedium: "#f0f0f0",
        };
    }, [hoverRow]);
    return (_jsx(DataEditor, { ...defaultProps, rowMarkers: "both", onItemHovered: onItemHovered, getCellContent: getCellContent, getRowThemeOverride: getRowThemeOverride, columns: cols, rows: 300 }));
};
