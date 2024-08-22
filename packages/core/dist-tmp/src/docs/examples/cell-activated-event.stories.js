import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, KeyName, defaultProps, useAllMockedKinds, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(Story, {}) })),
    ],
};
export const CellActivatedEvent = p => {
    const { cols, getCellContent, onColumnResize, setCellValue } = useAllMockedKinds();
    const getCellContentMangled = React.useCallback((item) => {
        const result = getCellContent(item);
        if (item[0] === 3) {
            return {
                ...result,
                activationBehaviorOverride: "single-click",
                hoverEffect: true,
            };
        }
        return result;
    }, [getCellContent]);
    const [lastActivated, setLastActivated] = React.useState(undefined);
    const onCellActivated = React.useCallback((cell) => {
        setLastActivated(cell);
    }, []);
    return (_jsx(BeautifulWrapper, { title: "Cell Activated event", description: _jsxs(_Fragment, { children: [_jsxs(Description, { children: ["When you tap ", _jsx(KeyName, { children: "Enter" }), ", ", _jsx(KeyName, { children: "Space" }), " or double click a cell, that cell is activated. You can track this with ", _jsx(PropName, { children: "onCellActivated" }), "."] }), _jsxs(MoreInfo, { children: ["Last activated cell:", " ", lastActivated === undefined ? "none" : `(${lastActivated[0]}, ${lastActivated[1]})`] })] }), children: _jsx(DataEditor, { ...defaultProps, 
            // editorBloom={[-1, -4]}
            cellActivationBehavior: p.cellActivationBehavior, getCellContent: getCellContentMangled, 
            //initialSize={[849, 967]}
            //scrollOffsetY={10_000}
            getCellsForSelection: true, columns: cols, onCellEdited: setCellValue, onColumnResize: onColumnResize, onCellActivated: onCellActivated, rows: 10_000 }) }));
};
CellActivatedEvent.argTypes = {
    cellActivationBehavior: {
        control: { type: "select" },
        options: ["double-click", "single-click", "second-click"],
    },
};
CellActivatedEvent.args = {
    cellActivationBehavior: "second-click",
};
