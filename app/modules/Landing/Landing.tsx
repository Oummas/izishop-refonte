import { Card } from "~/components/Card/Card";
import { useLandingConfig } from "./hooks/useLandingConfig";

export const Landing = () => {
  const config = useLandingConfig();
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-xl p-4">{config?.title}</h1>
      <img
        src="https://via.placeholder.com/700x400"
        width={700}
        height={400}
        srcSet={`
        https://via.placeholder.com/70x40 300w,
        https://via.placeholder.com/700x400 500w,
        https://via.placeholder.com/900x400 700w,
        https://via.placeholder.com/1400x800 1000w`}
        sizes="80vw"
        alt="presentation best products"
      />
      <div className="flex w-full flex-col overflow-auto p-3">
        <h2>Les Meilleurs produits </h2>
        <div className="flex">
          {config?.topProducts &&
            config?.topProducts?.map((product: any) => (
              <Card key={product.id} product={product} />
            ))
            }
        </div>
      </div>
    </div>
  );
};
