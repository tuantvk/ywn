export type TypePlatforms = 1 | 2;

export type ResolutionProps = {
  id?: number;
  name: string;
  platform?: TypePlatforms;
  dimensions?: string;
};

export const RESOLUTIONS: ResolutionProps[] = [
  { id: 1, name: 'iPhone XR, XS Max', platform: 1, dimensions: '414x896' },
  { id: 2, name: 'iPhone X, XS', platform: 1, dimensions: '375x812' },
  { id: 3, name: 'iPhone 7, 8', platform: 1, dimensions: '375x667' },
  { id: 4, name: 'iPhone 6, 6S, 7, 8 Plus', platform: 1, dimensions: '414x736' },
  { id: 5, name: 'iPhone 5', platform: 1, dimensions: '320x568' },
  { id: 6, name: 'iPhone 6/6S', platform: 1, dimensions: '375x667' },

  { id: 7, name: 'Nexus 5X, GG Pixel 3, 3XL', platform: 2, dimensions: '412x824' },
  { id: 8, name: 'Nexus 6P, GG Pixel', platform: 2, dimensions: '412x732' },
  { id: 9, name: 'SS Note 5', platform: 2, dimensions: '480x853' },
  { id: 10, name: 'SS S7, S8, SN9', platform: 2, dimensions: '360x740' },
];