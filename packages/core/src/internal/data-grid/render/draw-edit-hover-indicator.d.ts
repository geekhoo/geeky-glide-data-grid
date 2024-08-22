import type { FullTheme } from "../../../common/styles.js";
import type { Rectangle, HoverEffectTheme } from "../../../index.js";
export declare function drawEditHoverIndicator(ctx: CanvasRenderingContext2D, theme: FullTheme, effectTheme: HoverEffectTheme | undefined, displayData: string, rect: Rectangle, hoverAmount: number, overrideCursor: ((cursor: React.CSSProperties["cursor"] | undefined) => void) | undefined): void;
