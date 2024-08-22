import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
interface Props {
    width: number;
    height: number;
    useMoreTopPadding?: boolean;
    figmaDoc?: string;
    context?: any;
}
export declare class BuilderThemeWrapper extends React.PureComponent<React.PropsWithChildren<Props>> {
    render(): React.ReactNode;
}
export declare const SimpleThemeWrapper: React.FC;
export {};
