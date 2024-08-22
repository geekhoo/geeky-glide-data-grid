import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { GridCellKind } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
import range from "lodash/range.js";
import { faker } from "@faker-js/faker";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Wrapping Text", description: _jsxs(Description, { children: ["Text cells can have wrapping text by setting the ", _jsx(PropName, { children: "allowWrapping" }), " prop to true."] }), children: _jsx(Story, {}) }) })),
    ],
};
export const WrappingText = p => {
    const { cols, getCellContent, onColumnResize } = useMockDataGenerator(6);
    const suffix = React.useMemo(() => {
        return range(0, 100).map(() => faker.lorem.sentence(p.length));
    }, [p.length]);
    const mangledGetCellContent = React.useCallback(i => {
        const [col, row] = i;
        if (col === 0) {
            return {
                kind: GridCellKind.Text,
                allowOverlay: true,
                displayData: `${row},\n${suffix[row % suffix.length]}`,
                data: `${row}, \n${suffix}`,
                allowWrapping: true,
                contentAlign: p.alignment,
            };
        }
        return getCellContent(i);
    }, [getCellContent, p.alignment, suffix]);
    return (_jsx(DataEditor, { ...defaultProps, rowHeight: 80, getCellContent: mangledGetCellContent, columns: cols, rows: 1000, onColumnResize: onColumnResize, experimental: {
            hyperWrapping: p.hyperWrapping,
        } }));
};
WrappingText.args = {
    alignment: "left",
    length: 20,
    hyperWrapping: false,
};
WrappingText.argTypes = {
    alignment: {
        control: { type: "select" },
        options: ["left", "center", "right"],
    },
    length: {
        control: {
            type: "range",
            min: 2,
            max: 200,
        },
    },
};
