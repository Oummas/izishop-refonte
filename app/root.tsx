import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Layout } from "./layout/Layout";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/dist/output.css" },
];

export default function App() {
  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
        <Scripts />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  );
}
