export interface Slider {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface TopProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface LandingConfiguration {
  title: string;
  slider: Slider[];
  topProducts: TopProduct[];
}
