import fs from "fs/promises";
import path from "path";
import GalleryClient from "./GalleryClient";

export const dynamic = "force-dynamic";

const imageExtensions = new Set([
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".gif",
    ".avif",
]);

const formatAltText = (fileName) =>
    fileName
        .replace(/\.[^.]+$/, "")
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();

async function getGalleryImages() {
    const galleryDirectory = path.join(process.cwd(), "public", "gallery");

    try {
        const entries = await fs.readdir(galleryDirectory, { withFileTypes: true });

        return entries
            .filter((entry) => entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
            .map((entry, index) => ({
                id: entry.name,
                src: `/gallery/${encodeURIComponent(entry.name)}`,
                alt: formatAltText(entry.name),
                featured: index % 7 === 0 || index % 11 === 0,
            }));
    } catch (error) {
        if (error.code === "ENOENT") {
            return [];
        }

        throw error;
    }
}

export default async function GalleryPage() {
    const images = await getGalleryImages();

    return <GalleryClient images={images} />;
}
