import React from "react";
declare const _default: {
    title: string;
    decorators: ((Story: React.ComponentType) => import("react/jsx-runtime").JSX.Element)[];
};
export default _default;
interface ImperativeScrollProps {
    paddingY: number;
    paddingX: number;
    vAlign?: "start" | "center" | "end";
    hAlign?: "start" | "center" | "end";
}
export declare const ImperativeScroll: React.VFC<ImperativeScrollProps>;
