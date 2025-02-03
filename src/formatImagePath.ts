export default function formatImagePath(imagePath: string): string {
    return imagePath.replace(/\\/g, '/').replace(/^\/+/, '');
}