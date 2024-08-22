/* eslint-disable sonarjs/no-duplicate-string */
import { describe, it, expect, vi } from "vitest";
import { GridCellKind } from "../src/internal/data-grid/data-grid-types.js";
import { uriCellRenderer } from "../src/cells/uri-cell.js";
import { getDataEditorTheme, mergeAndRealizeTheme } from "../src/common/styles.js";
const baseDrawArgs = {
    cellFillColor: "red",
    col: 0,
    row: 0,
    drawState: [undefined, () => undefined],
    frameTime: 0,
    highlighted: false,
    hoverAmount: 0,
    hyperWrapping: false,
    imageLoader: {},
    overrideCursor: () => undefined,
    requestAnimationFrame: () => undefined,
    spriteManager: {},
};
describe("uriCellRenderer", () => {
    const theme = mergeAndRealizeTheme(getDataEditorTheme());
    const mockCanvasContext = {
        save: vi.fn(),
        restore: vi.fn(),
        textBaseline: "top",
        stroke: vi.fn(),
        measureText: vi.fn(text => ({ width: text.length * 10, actualBoundingBoxAscent: 16 })),
        fillText: vi.fn(),
        beginPath: vi.fn(),
        moveTo: vi.fn(),
        lineTo: vi.fn(),
    };
    it("getAccessibilityString returns correct string", () => {
        const cell = { kind: GridCellKind.Uri, data: "http://example.com", allowOverlay: true };
        expect(uriCellRenderer.getAccessibilityString(cell)).toBe("http://example.com");
    });
    it("draw function applies underline on hover", () => {
        const cell = {
            kind: GridCellKind.Uri,
            data: "http://example.com",
            hoverEffect: true,
            allowOverlay: true,
        };
        const drawArgs = {
            ...baseDrawArgs,
            cell,
            theme,
            hoverAmount: 1,
            ctx: mockCanvasContext,
            rect: { x: 0, y: 0, width: 100, height: 120 },
            hoverX: 10,
            hoverY: 60,
        };
        uriCellRenderer.draw(drawArgs, cell);
        expect(mockCanvasContext.measureText).toHaveBeenCalledWith("http://example.com");
        expect(mockCanvasContext.stroke).toHaveBeenCalled();
    });
    it("onClick triggers onClickUri callback when clicked in the right area", () => {
        const onClickUriMock = vi.fn();
        const cell = {
            kind: GridCellKind.Uri,
            data: "http://example.com",
            hoverEffect: true,
            onClickUri: onClickUriMock,
            allowOverlay: true,
        };
        const drawArgs = {
            ...baseDrawArgs,
            cell,
            theme,
            ctx: mockCanvasContext,
            rect: { x: 0, y: 0, width: 100, height: 120 },
            hoverX: 10,
            hoverY: 10,
        };
        uriCellRenderer.draw(drawArgs, cell);
        uriCellRenderer.onClick?.({
            cell,
            bounds: { x: 0, y: 0, width: 100, height: 120 },
            posX: 10,
            posY: 60,
            theme,
            button: 0,
            buttons: 0,
            ctrlKey: false,
            isEdge: false,
            isTouch: false,
            location: [0, 0],
            metaKey: false,
            preventDefault: () => undefined,
            scrollEdge: [0, 0],
            shiftKey: false,
        });
        expect(onClickUriMock).toHaveBeenCalled();
    });
    it("measure returns correct width", () => {
        const cell = { kind: GridCellKind.Uri, data: "http://example.com", allowOverlay: true };
        const width = uriCellRenderer.measure?.(mockCanvasContext, cell, theme);
        expect(width).toBe("http://example.com".length * 10 + theme.cellHorizontalPadding * 2);
    });
    it("onDelete clears cell data", () => {
        const cell = { kind: GridCellKind.Uri, data: "http://example.com", allowOverlay: true };
        const updatedCell = uriCellRenderer.onDelete?.(cell);
        expect(updatedCell?.data).toBe("");
    });
    it("onPaste updates cell data correctly", () => {
        const cell = { kind: GridCellKind.Uri, data: "http://example.com", allowOverlay: true };
        const pasteData = "http://newexample.com";
        const updatedCell = uriCellRenderer.onPaste(pasteData, cell, {
            rawValue: pasteData,
        });
        expect(updatedCell?.data).toBe(pasteData);
    });
});
