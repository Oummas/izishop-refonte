import { rest } from "msw";

export const handlers = [
  rest.get("/api/landing", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title:
          "Pensez à l'occassion c'est la meme qualité c'est juste le prix qui baisse",
        slider: [
          {
            id: 1,
            image: "https://via.placeholder.com/300x200",
            title: "Product 1",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            id: 2,
            image: "https://via.placeholder.com/300x200",
            title: "Product 2",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        ],

        topProducts: [
          {
            id: 1,
            title: "Product 1",
            price: 100,
            description: "Description 1",
            image: "https://via.placeholder.com/150",
          },
          {
            id: 2,

            title: "Product 2",
            price: 200,
            description: "Description 2",
            image: "https://via.placeholder.com/150",
          },
          {
            id: 3,
            title: "Product 3",
            price: 300,
            description: "Description 3",
            image: "https://via.placeholder.com/150",
          },
        ],
      })
    );
  }),
];
