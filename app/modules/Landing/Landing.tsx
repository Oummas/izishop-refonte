import { Card } from "~/components/Card/Card";

export const Landing = ({ config }) => {
  return (
    <div>
      <div>
        <h1 className="flex items-center">Bienvenue sur Izi shop</h1>
        <img src="https://picsum.photos/1200/500" alt="" />
      </div>
      <div className="flex  flex-col">
          <h2>Nouveau produits</h2>
        <div className="flex overflow-auto">
          <Card product={config} />
          <Card product={config} />
          <Card product={config} />
          <Card product={config} />
          <Card product={config} />
          <Card product={config} />
          <Card product={config} />
          <Card product={config} />
          <Card product={config} />
          <Card product={config} />
          <Card product={config} />
          <Card product={config} />
        </div>
      </div>
    </div>
  );
};
