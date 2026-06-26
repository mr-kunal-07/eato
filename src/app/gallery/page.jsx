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

const encodePathSegment = (segment) => encodeURIComponent(segment);

async function getImagesFromPublicFolder(folderName, options = {}) {
    const folderDirectory = path.join(process.cwd(), "public", folderName);
    const folderPath = folderName
        .split("/")
        .map(encodePathSegment)
        .join("/");

    try {
        const entries = await fs.readdir(folderDirectory, { withFileTypes: true });

        return entries
            .filter((entry) => entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
            .map((entry, index) => ({
                id: `${folderName}/${entry.name}`,
                src: `/${folderPath}/${encodeURIComponent(entry.name)}`,
                alt: formatAltText(entry.name),
                featured: options.featured ? index % 7 === 0 || index % 11 === 0 : false,
            }));
    } catch (error) {
        if (error.code === "ENOENT") {
            return [];
        }

        throw error;
    }
}

export default async function GalleryPage() {
    const [images, carouselImages] = await Promise.all([
        getImagesFromPublicFolder("gallery", { featured: true }),
        getImagesFromPublicFolder("gallery-carousel"),
    ]);

    return <GalleryClient images={images} carouselImages={carouselImages} />;
}
