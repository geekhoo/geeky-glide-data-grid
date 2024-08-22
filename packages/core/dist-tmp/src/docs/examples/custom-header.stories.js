import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, useMockDataGenerator, defaultProps } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Custom Drawing", description: _jsx(Description, { children: "You can draw over or under most objects in the grid." }), children: _jsx(Story, {}) }) })),
    ],
};
export const CustomDrawing = () => {
    const { cols, getCellContent } = useMockDataGenerator(1000, true, true);
    const drawHeader = React.useCallback((args, draw) => {
        const { ctx, rect } = args;
        ctx.beginPath();
        ctx.rect(rect.x, rect.y, rect.width, rect.height);
        const lg = ctx.createLinearGradient(0, rect.y, 0, rect.y + rect.height);
        lg.addColorStop(0, "#ff00d934");
        lg.addColorStop(1, "#00a2ff34");
        ctx.fillStyle = lg;
        ctx.fill();
        draw(); // draw at end to draw under the header
    }, []);
    const drawCell = React.useCallback((args, draw) => {
        draw(); // draw up front to draw over the cell
        const { ctx, rect } = args;
        const size = 7;
        ctx.beginPath();
        ctx.moveTo(rect.x + rect.width - size, rect.y + 1);
        ctx.lineTo(rect.x + rect.width, rect.y + size + 1);
        ctx.lineTo(rect.x + rect.width, rect.y + 1);
        ctx.closePath();
        ctx.save();
        ctx.fillStyle = "#ff0000";
        ctx.fill();
        ctx.restore();
    }, []);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, drawHeader: drawHeader, drawCell: drawCell, rows: 3000, rowMarkers: "both" }));
};
