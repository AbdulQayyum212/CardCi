export type Pokedex = {
  assets?: Asset[];
};

export type Asset = {
  fileName?: string;
  fileSize?: number;
  height?: number;
  type?: string;
  uri?: string;
  width?: number;
};
