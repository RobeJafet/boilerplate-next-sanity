'use client'

import Image from "next/image";
import { blurHashToDataURL } from "@/lib/blurhashDataURL";
import { urlFor } from "@/sanity/lib/image"
;


interface ImageWithBlurProps {
    image: Image;
    sizes?: string;
    loading?: "lazy" | "eager";
    optionalAlt: string;
    classContainer?: string;
    classesImg?: string;
    noBlur?: boolean;
}

export default function ImageComponent({ ...props  }: ImageWithBlurProps ) {
    const { image, sizes, loading, optionalAlt, classContainer = '', classesImg = '', noBlur = false } = props;

    const width = image.asset.metadata.dimensions.width;
    const height = image.asset.metadata.dimensions.height;
    const blurhash = image.asset.metadata.blurHash;
    const base64Image = blurHashToDataURL(blurhash);

    return (
        <picture className={`relative w-full bg-cover bg-black bg-no-repeat block ${classContainer} `} style={ noBlur ? {backgroundColor: '#195F54'} : { backgroundImage: `url(${base64Image})` }}>
            <Image
                src={urlFor(image).url()}
                width={width}
                height={height}
                sizes={sizes}
                alt={image.alt || optionalAlt}
                loading={loading || "lazy"}
                className={`w-full h-auto opacity-0 transition-opacity ${classesImg}`}
                style={image.hotspot ? {
                    objectPosition: `${image.hotspot.x * 100}% ${image.hotspot.y * 100}%`,
                    objectFit: 'cover'
                } : undefined}
                quality={100}
                onLoad={(e) => {
                    e.currentTarget.classList.remove("opacity-0");
                }}
            />
        </picture>
        
    );
}