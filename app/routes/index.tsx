import type { LoaderFunction } from "@remix-run/node";

import { useLoaderData } from "@remix-run/react";
import { Landing } from "~/modules/Landing/Landing";


export const loader: LoaderFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return {
    data: await response.json(),
  };
};

export default function Index() {
  const data = useLoaderData();

  return (
    <Landing config={data}/>
  );
}
