export default function formatPath(path: string): string {
    return path.replace(/\\/g, "/").replace(/^\/+/, "");
}
