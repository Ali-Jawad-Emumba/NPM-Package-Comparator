import { configureStore } from "@reduxjs/toolkit";
import reducer from "../../../state/slice";

export const mockStore = configureStore({
  reducer: reducer,
  preloadedState: {
    firstPackageData: {
      collected: {
        metadata: {
          name: "react",
          description:
            "React is a JavaScript library for building user interfaces.",
          keywords: ["react"],
          date: "2022-06-14T19:46:38.369Z",
          publisher: {
            username: "gnoff",
            email: "jcs.gnoff@gmail.com",
          },
          maintainers: [
            {
              username: "gaearon",
              email: "dan.abramov@gmail.com",
            },
          ],
          repository: {
            type: "git",
            url: "git+https://github.com/facebook/react.git",
            directory: "packages/react",
          },
          links: {
            npm: "https://www.npmjs.com/package/react",
            homepage: "https://reactjs.org/",
            repository: "https://github.com/facebook/react",
            bugs: "https://github.com/facebook/react/issues",
          },
          license: "MIT",
        },
        npm: {
          downloads: [
            {
              from: "2023-01-12T00:00:00.000Z",
              to: "2023-01-13T00:00:00.000Z",
              count: 3385837,
            },
            {
              from: "2023-01-06T00:00:00.000Z",
              to: "2023-01-13T00:00:00.000Z",
              count: 17547077,
            },
            {
              from: "2022-12-14T00:00:00.000Z",
              to: "2023-01-13T00:00:00.000Z",
              count: 63819506,
            },
            {
              from: "2022-10-15T00:00:00.000Z",
              to: "2023-01-13T00:00:00.000Z",
              count: 217736453,
            },
            {
              from: "2022-07-17T00:00:00.000Z",
              to: "2023-01-13T00:00:00.000Z",
              count: 426593162,
            },
            {
              from: "2022-01-13T00:00:00.000Z",
              to: "2023-01-13T00:00:00.000Z",
              count: 828606518,
            },
          ],
          starsCount: 793,
        },
        evaluation: {
          quality: {
            carefulness: 1,
            tests: 0.679,
            health: 1,
          },
          popularity: {
            communityInterest: 249582,
            downloadsCount: 72578817.6666667,
          },
        },
      },
    },
    secondPackageData: {
      collected: {
        metadata: {
          name: "redux",
          description: "Predictable state container for JavaScript apps",
          keywords: [
            "redux",
            "reducer",
            "state",
            "predictable",
            "functional",
            "immutable",
            "hot",
            "live",
            "replay",
            "flux",
            "elm",
          ],
          date: "2022-04-18T21:55:15.566Z",
          publisher: {
            username: "acemarke",
            email: "mark.erikson@gmail.com",
          },
          maintainers: [
            {
              username: "gaearon",
              email: "dan.abramov@gmail.com",
            },
          ],
          repository: {
            type: "git",
            url: "git+https://github.com/reduxjs/redux.git",
          },
          links: {
            npm: "https://www.npmjs.com/package/redux",
            homepage: "http://redux.js.org",
            repository: "https://github.com/reduxjs/redux",
            bugs: "https://github.com/reduxjs/redux/issues",
          },
          license: "MIT",
        },
        npm: {
          downloads: [
            {
              from: "2022-11-14T00:00:00.000Z",
              to: "2022-11-15T00:00:00.000Z",
              count: 1623914,
            },
          ],
          starsCount: 245,
        },
        evaluation: {
          quality: {
            carefulness: 1,
            tests: 0.6,
            health: 1,
          },
          popularity: {
            communityInterest: 75900,
            downloadsCount: 35719174,
          },
        },
      },
    },
  },
});
