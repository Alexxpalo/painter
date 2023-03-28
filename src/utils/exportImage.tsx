import html2canvas from "html2canvas";

interface ExportImageProps {
    fileName: string;
    element: HTMLElement | null;
}

const exportImage = async ({ element, fileName }: ExportImageProps) => {

    if (!element) {
        return;
    }
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png");
    downloadImage(image, fileName);
};

const downloadImage = (image: string, fileName: string) => {
    const link = window.document.createElement("a");
    const linkStyle = link.style;
    linkStyle.display = "none";
    link.download = fileName;
    link.href = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    link.remove();
};

export default exportImage;
