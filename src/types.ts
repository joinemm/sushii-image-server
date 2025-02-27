export interface ScreenshotOptions {
    omitBackground: boolean;
    type: "jpeg" | "png";
    quality?: number;
    fullPage?: boolean;
}

export interface Body {
    url?: string;
    html?: string;

    width?: string;
    height?: string;

    imageFormat?: string;
    quality?: string;
    scaleFactor?: string;
}

export interface TemplateBodyContext extends Body {
    context?: { [key: string]: string };
}

export interface TemplateBodyName extends TemplateBodyContext {
    templateName: string;
}

export interface TemplateBodyHtml extends TemplateBodyContext {
    templateHtml: string;
}

export type TemplateBody = TemplateBodyName | TemplateBodyHtml;

export interface Dimensions {
    width: number;
    height: number;
}

export type Dimension = "width" | "height";

export type ImageFormat = "png" | "jpeg";

export type ResponseType = "image/png" | "image/jpeg";
