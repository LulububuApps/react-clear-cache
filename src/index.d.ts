import * as React from 'react';
declare const defaultProps: {
    duration: number;
    auto: boolean;
    storageKey: string;
    basePath: string;
};
declare type OwnProps = {
    children?: any;
} & typeof defaultProps;
export declare const useClearCache: (props?: OwnProps | undefined) => {
    loading: boolean;
    isLatestVersion: boolean;
    emptyCacheStorage: (version?: string | undefined) => Promise<void>;
    latestVersion: string;
};
declare const ClearCache: React.FC<OwnProps>;
export default ClearCache;
