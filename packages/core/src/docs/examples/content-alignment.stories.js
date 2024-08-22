import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, defaultProps, useAllMockedKinds, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Content Alignment", description: _jsxs(Description, { children: ["You can customize the content alignment by setting ", _jsx(PropName, { children: "contentAlign" }), " of a cell to ", _jsx(PropName, { children: "left" }), ", ", _jsx(PropName, { children: "right" }), " or ", _jsx(PropName, { children: "center" }), "."] }), children: _jsx(Story, {}) }) })),
    ],
};
export const ContentAlignment = () => {
    const { cols, getCellContent } = useAllMockedKinds();
    const mangledGetCellContent = React.useCallback(cell => {
        const [col, _row] = cell;
        if (col === 3) {
            return {
                ...getCellContent(cell),
                contentAlign: "center",
            };
        }
        if (col === 4) {
            return {
                ...getCellContent(cell),
                contentAlign: "right",
            };
        }
        if (col === 5) {
            return {
                ...getCellContent(cell),
                contentAlign: "left",
            };
        }
        return getCellContent(cell);
    }, [getCellContent]);
    return _jsx(DataEditor, { ...defaultProps, getCellContent: mangledGetCellContent, columns: cols, rows: 300 });
};
