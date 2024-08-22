import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
import { GridCellKind } from "../../internal/data-grid/data-grid-types.js";
import {} from "../../data-editor/row-grouping.js";
import { useRowGrouping } from "../../data-editor/row-grouping-api.js";
import _ from "lodash";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Row Grouping", description: _jsxs(Description, { children: ["The ", _jsx(PropName, { children: "rowGrouping" }), " prop can be used to group and even fold rows."] }), children: _jsx(Story, {}) }) })),
    ],
};
export const RowGrouping = (p) => {
    const { cols, getCellContent } = useMockDataGenerator(100);
    const rows = 1000;
    const [rowGrouping, setRowGrouping] = React.useState(() => ({
        groups: [
            {
                headerIndex: 0,
                isCollapsed: false,
            },
            {
                headerIndex: 10,
                isCollapsed: true,
                subGroups: [
                    {
                        headerIndex: 15,
                        isCollapsed: false,
                    },
                    {
                        headerIndex: 20,
                        isCollapsed: false,
                    },
                ],
            },
            {
                headerIndex: 30,
                isCollapsed: false,
            },
        ],
        height: 55,
        navigationBehavior: "block",
        selectionBehavior: "block-spanning",
        themeOverride: {
            bgCell: "rgba(0, 100, 255, 0.1)",
        },
    }));
    const { mapper, getRowGroupingForPath, updateRowGroupingByPath } = useRowGrouping(rowGrouping, rows);
    const onCellClicked = React.useCallback((item) => {
        const { path, isGroupHeader } = mapper(item);
        if (isGroupHeader && item[0] === 0) {
            const group = getRowGroupingForPath(rowGrouping.groups, path);
            setRowGrouping(prev => {
                const result = {
                    ...prev,
                    groups: updateRowGroupingByPath(prev.groups, path, { isCollapsed: !group.isCollapsed }),
                };
                return result;
            });
        }
    }, [getRowGroupingForPath, mapper, rowGrouping.groups, updateRowGroupingByPath]);
    const getCellContentMangled = React.useCallback(item => {
        const { path, isGroupHeader, originalIndex } = mapper(item);
        if (item[0] === 0) {
            return {
                kind: GridCellKind.Text,
                data: `Row ${JSON.stringify(path)}`,
                displayData: `Row ${JSON.stringify(path)}`,
                allowOverlay: false,
            };
        }
        else if (isGroupHeader) {
            return {
                kind: GridCellKind.Loading,
                allowOverlay: false,
                // span: [1, cols.length - 1],
            };
        }
        return getCellContent(originalIndex);
    }, [getCellContent, mapper]);
    return (_jsx(DataEditor, { ...defaultProps, rowGrouping: rowGrouping, height: "100%", rowMarkers: "both", freezeColumns: p.freezeColumns, getRowThemeOverride: (_row, groupRow, _contentRow) => {
            if (groupRow % 2 === 0) {
                return {
                    bgCell: "rgba(0, 0, 0, 0.1)",
                };
            }
            return undefined;
        }, onCellClicked: onCellClicked, getCellContent: getCellContentMangled, columns: cols, 
        // verticalBorder={false}
        rows: rows }));
};
