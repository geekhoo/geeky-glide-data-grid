import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, defaultProps, useAllMockedKinds, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(Story, {}) })),
    ],
};
const darkTheme = {
    accentColor: "#8c96ff",
    accentLight: "rgba(202, 206, 255, 0.253)",
    textDark: "#ffffff",
    textMedium: "#b8b8b8",
    textLight: "#a0a0a0",
    textBubble: "#ffffff",
    bgIconHeader: "#b8b8b8",
    fgIconHeader: "#000000",
    textHeader: "#a1a1a1",
    textHeaderSelected: "#000000",
    bgCell: "#16161b",
    bgCellMedium: "#202027",
    bgHeader: "#212121",
    bgHeaderHasFocus: "#474747",
    bgHeaderHovered: "#404040",
    bgBubble: "#212121",
    bgBubbleSelected: "#000000",
    bgSearchResult: "#423c24",
    borderColor: "rgba(225,225,225,0.2)",
    drilldownBorder: "rgba(225,225,225,0.4)",
    linkColor: "#4F5DFF",
    headerFontStyle: "bold 14px",
    baseFontStyle: "13px",
    fontFamily: "Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif",
};
const hotdogStand = {
    accentColor: "#8c96ff",
    accentLight: "rgba(202, 206, 255, 0.253)",
    textDark: "#ffffff",
    textMedium: "rgba(255, 255, 255, 0.9)",
    textLight: "rgba(255, 255, 255, 0.7)",
    textBubble: "#000000",
    bgIconHeader: "#880000",
    fgIconHeader: "#ff5555",
    textHeader: "rgba(0, 0, 0, 0.9)",
    textHeaderSelected: "#000000",
    bgCell: "#ff0000",
    bgCellMedium: "#ff4d4d",
    bgHeader: "#f3f300",
    bgHeaderHasFocus: "#eeee00",
    bgHeaderHovered: "#e0e000",
    bgBubble: "#ffff00",
    bgBubbleSelected: "#ffff00",
    bgSearchResult: "#423c24",
    borderColor: "#ffff00",
    drilldownBorder: "#ffff00",
    linkColor: "#4F5DFF",
    headerFontStyle: "bold 14px",
    baseFontStyle: "13px",
    fontFamily: "Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif",
    roundingRadius: 6,
};
export const ThemeSupport = () => {
    const { cols, getCellContent, onColumnResize, setCellValue } = useAllMockedKinds();
    const [theme, setTheme] = React.useState({});
    const [numRows, setNumRows] = React.useState(1000);
    const onRowAppended = React.useCallback(() => {
        const newRow = numRows;
        setNumRows(cv => cv + 1);
        for (let c = 0; c < 6; c++) {
            setCellValue([c, newRow], {
                displayData: "",
                data: "",
            });
        }
    }, [numRows, setCellValue]);
    return (_jsx(BeautifulWrapper, { title: "Theme support", description: _jsxs(_Fragment, { children: [_jsxs(Description, { children: ["DataGrid respects the theme provided by the ", _jsx(PropName, { children: "theme" }), " prop."] }), _jsxs(MoreInfo, { children: [_jsx("button", { onClick: () => setTheme({}), children: "Light" }), " or", " ", _jsx("button", { onClick: () => setTheme(darkTheme), children: "Dark" }), " even", " ", _jsx("button", { onClick: () => setTheme(hotdogStand), children: "Hotdog Stand" })] })] }), children: _jsx(DataEditor, { ...defaultProps, theme: theme, getCellContent: getCellContent, columns: cols, onRowAppended: onRowAppended, trailingRowOptions: {
                tint: true,
                sticky: true,
            }, onCellEdited: setCellValue, onColumnResize: onColumnResize, rows: numRows }) }));
};
