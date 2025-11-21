type LocalePage =  'en' | 'es';

type Section = {
    _type: string;
    _key: string;
};

interface Asset {
  _id: string;
  metadata: AssetMetadata;
}

interface AssetMetadata {
  dimensions: {
    width: number;
    height: number;
    aspectRatio: number;
  };
  blurHash: string;
}

type Image = {
    _key: string;
    alt: string;
    asset: Asset;
    hotspot?: { x: number; y: number; height: number; width: number };
};

type Translation = {
    en: {
        slug: string;
        type: "page" | "project" | "home";
    };
    es: {
        slug: string;
        type: "page" | "project" | "home";
    };
};

