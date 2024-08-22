import * as React from "react";
import { type EditableGridCell, type GridCell, type GridColumn, type Item } from "../../internal/data-grid/data-grid-types.js";
import type { DataEditorProps } from "../data-editor.js";
/**
 * Attempts to copy data between grid cells of any kind.
 */
export declare function lossyCopyData<T extends EditableGridCell>(source: EditableGridCell, target: T): EditableGridCell;
export type GridColumnWithMockingInfo = GridColumn & {
    getContent(): GridCell;
};
export declare function getGridColumn(columnWithMock: GridColumnWithMockingInfo): GridColumn;
export declare const ColumnAddButton: import("@linaria/react").StyledComponent<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Record<never, unknown>>;
export declare const BeautifulStyle: import("@linaria/react").StyledComponent<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & Record<never, unknown>>;
export declare const PropName: import("@linaria/react").StyledComponent<React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement> & Record<never, unknown>>;
export declare const Description: import("@linaria/react").StyledComponent<React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement> & Record<never, unknown>>;
export declare const MoreInfo: import("@linaria/react").StyledComponent<React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement> & Record<never, unknown>>;
interface BeautifulProps {
    title: string;
    description?: React.ReactNode;
    className?: string;
    scale?: string;
}
export declare const BeautifulWrapper: React.FC<BeautifulProps>;
export declare class ContentCache {
    private cachedContent;
    get(col: number, row: number): import("../../internal/data-grid/data-grid-types.js").TextCell | import("../../internal/data-grid/data-grid-types.js").ImageCell | import("../../internal/data-grid/data-grid-types.js").BooleanCell | import("../../internal/data-grid/data-grid-types.js").MarkdownCell | import("../../internal/data-grid/data-grid-types.js").UriCell | import("../../internal/data-grid/data-grid-types.js").NumberCell | import("../../internal/data-grid/data-grid-types.js").CustomCell<{}> | import("../../internal/data-grid/data-grid-types.js").BubbleCell | import("../../internal/data-grid/data-grid-types.js").RowIDCell | import("../../internal/data-grid/data-grid-types.js").LoadingCell | import("../../internal/data-grid/data-grid-types.js").ProtectedCell | import("../../internal/data-grid/data-grid-types.js").DrilldownCell | undefined;
    set(col: number, row: number, value: GridCell): void;
}
export declare function useMockDataGenerator(numCols: number, readonly?: boolean, group?: boolean): {
    cols: GridColumn[];
    getCellContent: ([col, row]: Item) => GridCell;
    onColumnResize: (column: GridColumn, newSize: number) => void;
    setCellValue: ([col, row]: Item, val: GridCell) => void;
    setCellValueRaw: ([col, row]: Item, val: GridCell) => void;
};
export declare const KeyName: import("@linaria/react").StyledComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & Record<never, unknown>>;
export declare const defaultProps: Partial<DataEditorProps>;
export declare function clearCell(cell: GridCell): GridCell;
export declare function useAllMockedKinds(): {
    cols: GridColumn[];
    getCellContent: ([col, row]: Item) => GridCell;
    onColumnResize: (column: GridColumn, newSize: number) => void;
    setCellValue: ([col, row]: Item, val: GridCell, noDisplay?: boolean, forceUpdate?: boolean) => void;
};
export {};
