import { jsx as _jsx } from "react/jsx-runtime";
import { cleanup, render } from "@testing-library/react";
import * as React from "react";
import noop from "lodash/noop.js";
import { GridCellKind, getDefaultTheme, isObjectEditorCallbackResult } from "../src/index.js";
import { assert } from "../src/common/support.js";
import { imageCellRenderer } from "../src/cells/image-cell.js";
import { expect, describe, it, afterEach } from "vitest";
import { mergeAndRealizeTheme } from "../src/common/styles.js";
function getMockEditorTarget() {
    return {
        x: 0,
        y: 0,
        width: 100,
        height: 32,
    };
}
function get2dContext() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (ctx === null) {
        throw new Error("Cannot get a 2d context");
    }
    return ctx;
}
const getImgCell = () => {
    return {
        kind: GridCellKind.Image,
        data: ["img1.jpg", "img2.jpg"],
        readonly: false,
        allowOverlay: true,
    };
};
// TODO: We can test the editor _much_ more.
// Let's do that.
describe("Image cell", () => {
    afterEach(() => {
        cleanup();
    });
    it("Renders the right accessibilty string", async () => {
        const cell = getImgCell();
        const accessibilityString = imageCellRenderer.getAccessibilityString(cell);
        expect(accessibilityString).toBe("img1.jpg, img2.jpg");
    });
    it("Measures a reasonable size", async () => {
        const cell = getImgCell();
        const ctx = get2dContext();
        const autoSize = imageCellRenderer.measure?.(ctx, cell, mergeAndRealizeTheme(getDefaultTheme()));
        expect(autoSize).toBe(100);
    });
    it("Renders its editor (smoke test)", async () => {
        const cell = getImgCell();
        const Editor = imageCellRenderer.provideEditor?.(cell);
        const target = getMockEditorTarget();
        assert(!isObjectEditorCallbackResult(Editor));
        assert(Editor !== undefined);
        const result = render(_jsx(Editor, { onChange: noop, theme: getDefaultTheme(), onFinishedEditing: noop, isHighlighted: false, value: cell, target: target, forceEditMode: false }));
        // Check if the element is actually there
        await result.findByTestId("GDG-default-image-overlay-editor");
    });
    it("Renders a custom editor (smoke test)", async () => {
        const cell = getImgCell();
        const Editor = imageCellRenderer.provideEditor?.(cell);
        assert(Editor !== undefined);
        const target = getMockEditorTarget();
        assert(!isObjectEditorCallbackResult(Editor));
        const CustomEditor = () => {
            return (_jsx("div", { "data-testid": "GDG-custom-image-overlay-editor", children: _jsx("p", { children: "I am an editor, trust me" }) }));
        };
        const result = render(_jsx(Editor, { imageEditorOverride: CustomEditor, theme: getDefaultTheme(), onChange: noop, onFinishedEditing: noop, isHighlighted: false, value: cell, target: target, forceEditMode: false }));
        // Check if the element is actually there
        await result.findByTestId("GDG-custom-image-overlay-editor");
    });
});
