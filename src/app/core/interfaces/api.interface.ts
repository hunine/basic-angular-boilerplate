export interface ApiRequestOption {
    customHeader: {
        [header: string]: string | string[];
    };
    retryCount?: number;
}
