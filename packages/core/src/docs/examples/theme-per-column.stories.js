import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, defaultProps, useAllMockedKinds } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Theme per column", description: _jsx(_Fragment, { children: _jsx(Description, { children: "Each column can provide theme overrides for rendering that column." }) }), children: _jsx(Story, {}) }) })),
    ],
};
export const ThemePerColumn = () => {
    const { cols, getCellContent, onColumnResize, setCellValue } = useAllMockedKinds();
    const realCols = React.useMemo(() => {
        const c = [...cols];
        c[3] = {
            ...c[3],
            themeOverride: {
                textDark: "#009CA6",
                bgIconHeader: "#009CA6",
                accentColor: "#009CA6",
                accentLight: "#009CA620",
                fgIconHeader: "#FFFFFF",
                baseFontStyle: "600 13px",
            },
        };
        c[4] = {
            ...c[4],
            themeOverride: {
                textDark: "#009CA6",
                bgIconHeader: "#009CA6",
                accentColor: "#009CA6",
                accentLight: "#009CA620",
                fgIconHeader: "#FFFFFF",
                baseFontStyle: "600 13px",
            },
        };
        c[9] = {
            ...c[9],
            themeOverride: {
                textDark: "#009CA6",
                bgIconHeader: "#009CA6",
                accentColor: "#009CA6",
                accentLight: "#009CA620",
                fgIconHeader: "#FFFFFF",
            },
        };
        c[10] = {
            ...c[10],
            themeOverride: {
                textDark: "#009CA6",
                bgIconHeader: "#009CA6",
                accentColor: "#009CA6",
                accentLight: "#009CA620",
                fgIconHeader: "#FFFFFF",
            },
        };
        return c;
    }, [cols]);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: realCols, onCellEdited: setCellValue, onColumnResize: onColumnResize, rows: 1000 }));
};
