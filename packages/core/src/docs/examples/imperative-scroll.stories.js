import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import {} from "../../data-editor/data-editor.js";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, defaultProps, useAllMockedKinds, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(Story, {}) })),
    ],
};
export const ImperativeScroll = p => {
    const { cols, getCellContent, onColumnResize, setCellValue } = useAllMockedKinds();
    const ref = React.useRef(null);
    const onClick = () => {
        ref.current?.scrollTo(4, 99, "both", p.paddingX, p.paddingY, {
            vAlign: p.vAlign,
            hAlign: p.hAlign,
        });
    };
    return (_jsx(BeautifulWrapper, { title: "Imperative scrolling", description: _jsxs(_Fragment, { children: [_jsxs(Description, { children: ["You can imperatively scroll to a cell by calling ", _jsx(PropName, { children: "scrollTo" }), " on a DataEditor ref."] }), _jsxs(MoreInfo, { children: ["Click ", _jsx("button", { onClick: onClick, children: "Here" }), " to scroll to column 4 row 100"] })] }), children: _jsx(DataEditor, { ...defaultProps, ref: ref, rowMarkers: "clickable-number", getCellContent: getCellContent, columns: cols, onCellEdited: setCellValue, onColumnResize: onColumnResize, rows: 10_000 }) }));
};
ImperativeScroll.args = {
    paddingY: 0,
    paddingX: 0,
    vAlign: "start",
    hAlign: "start",
};
ImperativeScroll.argTypes = {
    paddingY: 0,
    paddingX: 0,
    vAlign: {
        control: { type: "select" },
        options: ["start", "center", "end", undefined],
    },
    hAlign: {
        control: { type: "select" },
        options: ["start", "center", "end", undefined],
    },
};
