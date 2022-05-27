import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start({
    onUnhandledRequest: "warn"
  });
}

hydrate(<RemixBrowser />, document);
