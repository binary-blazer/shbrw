export interface WindowOptions {
    width?: number;
    height?: number;
    noJS?: boolean;
}

export interface CLIArgs {
    url: string;
    width: number;
    height: number;
    optimized: boolean;
    noJS: boolean;
}