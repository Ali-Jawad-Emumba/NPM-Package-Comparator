import { configureStore } from "@reduxjs/toolkit";
import reducer from "./state/slice";

export const mockStore = configureStore({
    reducer: reducer,
    preloadedState: {
      firstPackageData: {
        "analyzedAt": "2023-01-13T08:02:20.173Z",
        "collected": {
          "metadata": {
            "name": "react",
            "scope": "unscoped",
            "version": "18.2.0",
            "description": "React is a JavaScript library for building user interfaces.",
            "keywords": [
              "react"
            ],
            "date": "2022-06-14T19:46:38.369Z",
            "publisher": {
              "username": "gnoff",
              "email": "jcs.gnoff@gmail.com"
            },
            "maintainers": [
              {
                "username": "gaearon",
                "email": "dan.abramov@gmail.com"
              },
              {
                "username": "acdlite",
                "email": "npm@andrewclark.io"
              },
              {
                "username": "gnoff",
                "email": "jcs.gnoff@gmail.com"
              },
              {
                "username": "fb",
                "email": "opensource+npm@fb.com"
              },
              {
                "username": "trueadm",
                "email": "dg@domgan.com"
              },
              {
                "username": "sophiebits",
                "email": "npm@sophiebits.com"
              }
            ],
            "repository": {
              "type": "git",
              "url": "git+https://github.com/facebook/react.git",
              "directory": "packages/react"
            },
            "links": {
              "npm": "https://www.npmjs.com/package/react",
              "homepage": "https://reactjs.org/",
              "repository": "https://github.com/facebook/react",
              "bugs": "https://github.com/facebook/react/issues"
            },
            "license": "MIT",
            "dependencies": {
              "loose-envify": "^1.1.0"
            },
            "releases": [
              {
                "from": "2022-12-14T00:00:00.000Z",
                "to": "2023-01-13T00:00:00.000Z",
                "count": 25
              },
              {
                "from": "2022-10-15T00:00:00.000Z",
                "to": "2023-01-13T00:00:00.000Z",
                "count": 101
              },
              {
                "from": "2022-07-17T00:00:00.000Z",
                "to": "2023-01-13T00:00:00.000Z",
                "count": 209
              },
              {
                "from": "2022-01-13T00:00:00.000Z",
                "to": "2023-01-13T00:00:00.000Z",
                "count": 434
              },
              {
                "from": "2021-01-13T00:00:00.000Z",
                "to": "2023-01-13T00:00:00.000Z",
                "count": 885
              }
            ],
            "hasSelectiveFiles": true
          },
          "npm": {
            "downloads": [
              {
                "from": "2023-01-12T00:00:00.000Z",
                "to": "2023-01-13T00:00:00.000Z",
                "count": 3385837
              },
              {
                "from": "2023-01-06T00:00:00.000Z",
                "to": "2023-01-13T00:00:00.000Z",
                "count": 17547077
              },
              {
                "from": "2022-12-14T00:00:00.000Z",
                "to": "2023-01-13T00:00:00.000Z",
                "count": 63819506
              },
              {
                "from": "2022-10-15T00:00:00.000Z",
                "to": "2023-01-13T00:00:00.000Z",
                "count": 217736453
              },
              {
                "from": "2022-07-17T00:00:00.000Z",
                "to": "2023-01-13T00:00:00.000Z",
                "count": 426593162
              },
              {
                "from": "2022-01-13T00:00:00.000Z",
                "to": "2023-01-13T00:00:00.000Z",
                "count": 828606518
              }
            ],
            "starsCount": 793
          },
          "github": {
            "homepage": "https://reactjs.org",
            "starsCount": 200439,
            "forksCount": 41607,
            "subscribersCount": 6643,
            "issues": {
              "count": 25023,
              "openCount": 1139,
              "distribution": {
                "3600": 5150,
                "10800": 2435,
                "32400": 2438,
                "97200": 3183,
                "291600": 2278,
                "874800": 2182,
                "2624400": 1716,
                "7873200": 1445,
                "23619600": 1852,
                "70858800": 1705,
                "212576400": 639
              },
              "isDisabled": false
            },
            "contributors": [
              {
                "username": "sammy-SC",
                "commitsCount": 22
              },
              {
                "username": "salazarm",
                "commitsCount": 24
              },
              {
                "username": "wincent",
                "commitsCount": 9
              },
              {
                "username": "bvaughn",
                "commitsCount": 301
              },
              {
                "username": "bgw",
                "commitsCount": 14
              },
              {
                "username": "kassens",
                "commitsCount": 72
              },
              {
                "username": "SanderSpies",
                "commitsCount": 8
              },
              {
                "username": "trueadm",
                "commitsCount": 429
              },
              {
                "username": "keyz",
                "commitsCount": 26
              },
              {
                "username": "aickin",
                "commitsCount": 18
              },
              {
                "username": "acdlite",
                "commitsCount": 1144
              },
              {
                "username": "yangshun",
                "commitsCount": 10
              },
              {
                "username": "raphamorim",
                "commitsCount": 15
              },
              {
                "username": "jgebhardt",
                "commitsCount": 8
              },
              {
                "username": "Simek",
                "commitsCount": 15
              },
              {
                "username": "motiz88",
                "commitsCount": 10
              },
              {
                "username": "elas7",
                "commitsCount": 13
              },
              {
                "username": "DarkScorpion",
                "commitsCount": 10
              },
              {
                "username": "SimenB",
                "commitsCount": 19
              },
              {
                "username": "hristo-kanchev",
                "commitsCount": 9
              },
              {
                "username": "rbalicki2",
                "commitsCount": 8
              },
              {
                "username": "sophiebits",
                "commitsCount": 875
              },
              {
                "username": "cpojer",
                "commitsCount": 56
              },
              {
                "username": "iamdustan",
                "commitsCount": 17
              },
              {
                "username": "joshduck",
                "commitsCount": 21
              },
              {
                "username": "sebmarkbage",
                "commitsCount": 905
              },
              {
                "username": "poteto",
                "commitsCount": 21
              },
              {
                "username": "lunaruan",
                "commitsCount": 118
              },
              {
                "username": "jeffmo",
                "commitsCount": 111
              },
              {
                "username": "eps1lon",
                "commitsCount": 60
              },
              {
                "username": "philipp-spiess",
                "commitsCount": 18
              },
              {
                "username": "petehunt",
                "commitsCount": 205
              },
              {
                "username": "zpao",
                "commitsCount": 822
              },
              {
                "username": "jquense",
                "commitsCount": 18
              },
              {
                "username": "koba04",
                "commitsCount": 67
              },
              {
                "username": "josephsavona",
                "commitsCount": 13
              },
              {
                "username": "tyao1",
                "commitsCount": 19
              },
              {
                "username": "KonstHardy",
                "commitsCount": 7
              },
              {
                "username": "arkist",
                "commitsCount": 14
              },
              {
                "username": "sompylasar",
                "commitsCount": 15
              },
              {
                "username": "sun1one",
                "commitsCount": 8
              },
              {
                "username": "mondaychen",
                "commitsCount": 27
              },
              {
                "username": "yiminghe",
                "commitsCount": 9
              },
              {
                "username": "benjamn",
                "commitsCount": 68
              },
              {
                "username": "subtleGradient",
                "commitsCount": 110
              },
              {
                "username": "mroch",
                "commitsCount": 12
              },
              {
                "username": "Daniel15",
                "commitsCount": 18
              },
              {
                "username": "zertosh",
                "commitsCount": 8
              },
              {
                "username": "RaitoBezarius",
                "commitsCount": 7
              },
              {
                "username": "hramos",
                "commitsCount": 7
              },
              {
                "username": "bhamodi",
                "commitsCount": 8
              },
              {
                "username": "syranide",
                "commitsCount": 69
              },
              {
                "username": "fabiomcosta",
                "commitsCount": 15
              },
              {
                "username": "raunofreiberg",
                "commitsCount": 9
              },
              {
                "username": "necolas",
                "commitsCount": 92
              },
              {
                "username": "taneliang",
                "commitsCount": 9
              },
              {
                "username": "gaearon",
                "commitsCount": 1574
              },
              {
                "username": "DenrizSusam",
                "commitsCount": 7
              },
              {
                "username": "nhunzaker",
                "commitsCount": 94
              },
              {
                "username": "fxxkscript",
                "commitsCount": 9
              },
              {
                "username": "iamchenxin",
                "commitsCount": 13
              },
              {
                "username": "rickhanlonii",
                "commitsCount": 90
              },
              {
                "username": "jimfb",
                "commitsCount": 116
              },
              {
                "username": "yungsters",
                "commitsCount": 93
              },
              {
                "username": "gnoff",
                "commitsCount": 48
              },
              {
                "username": "lucasecdb",
                "commitsCount": 10
              },
              {
                "username": "kmeht",
                "commitsCount": 10
              },
              {
                "username": "andreypopp",
                "commitsCount": 9
              },
              {
                "username": "behnammodi",
                "commitsCount": 8
              },
              {
                "username": "flarnie",
                "commitsCount": 67
              },
              {
                "username": "ianobermiller",
                "commitsCount": 7
              },
              {
                "username": "jaredly",
                "commitsCount": 9
              },
              {
                "username": "fisherwebdev",
                "commitsCount": 10
              },
              {
                "username": "onionymous",
                "commitsCount": 7
              },
              {
                "username": "marocchino",
                "commitsCount": 45
              },
              {
                "username": "camsong",
                "commitsCount": 8
              },
              {
                "username": "dependabot[bot]",
                "commitsCount": 48
              },
              {
                "username": "aweary",
                "commitsCount": 61
              },
              {
                "username": "NE-SmallTown",
                "commitsCount": 22
              },
              {
                "username": "JoshuaGross",
                "commitsCount": 9
              },
              {
                "username": "bl00mber",
                "commitsCount": 14
              },
              {
                "username": "rickbeerendonk",
                "commitsCount": 9
              },
              {
                "username": "vjeux",
                "commitsCount": 140
              },
              {
                "username": "waldreiter",
                "commitsCount": 14
              },
              {
                "username": "Andarist",
                "commitsCount": 10
              },
              {
                "username": "tomocchino",
                "commitsCount": 13
              },
              {
                "username": "chenglou",
                "commitsCount": 126
              },
              {
                "username": "TheSavior",
                "commitsCount": 30
              },
              {
                "username": "Biki-das",
                "commitsCount": 8
              },
              {
                "username": "andrewdavey",
                "commitsCount": 7
              },
              {
                "username": "RReverser",
                "commitsCount": 9
              },
              {
                "username": "chicoxyzzy",
                "commitsCount": 29
              },
              {
                "username": "kohei-takata",
                "commitsCount": 39
              },
              {
                "username": "ivanzotov",
                "commitsCount": 11
              },
              {
                "username": "hzoo",
                "commitsCount": 8
              },
              {
                "username": "clemmy",
                "commitsCount": 9
              },
              {
                "username": "mcsheffrey",
                "commitsCount": 21
              },
              {
                "username": "joecritch",
                "commitsCount": 9
              },
              {
                "username": "jddxf",
                "commitsCount": 9
              },
              {
                "username": "threepointone",
                "commitsCount": 16
              }
            ],
            "commits": [
              {
                "from": "2023-01-06T00:00:00.000Z",
                "to": "2023-01-13T00:00:00.000Z",
                "count": 12
              },
              {
                "from": "2022-12-14T00:00:00.000Z",
                "to": "2023-01-13T00:00:00.000Z",
                "count": 25
              },
              {
                "from": "2022-10-15T00:00:00.000Z",
                "to": "2023-01-13T00:00:00.000Z",
                "count": 161
              },
              {
                "from": "2022-07-17T00:00:00.000Z",
                "to": "2023-01-13T00:00:00.000Z",
                "count": 356
              },
              {
                "from": "2022-01-13T00:00:00.000Z",
                "to": "2023-01-13T00:00:00.000Z",
                "count": 721
              }
            ],
            "statuses": [
              {
                "context": "ci/circleci: test_fuzz",
                "state": "success"
              },
              {
                "context": "ci/circleci: setup",
                "state": "success"
              },
              {
                "context": "ci/circleci: Publish to Experimental channel",
                "state": "success"
              },
              {
                "context": "ci/circleci: Publish to Next channel",
                "state": "success"
              }
            ]
          },
          "source": {
            "files": {
              "readmeSize": 1162,
              "testsSize": 381150,
              "hasChangelog": true
            },
            "badges": [
              {
                "urls": {
                  "original": "https://img.shields.io/npm/v/react.svg?style=flat",
                  "shields": "https://img.shields.io/npm/v/react.svg",
                  "content": "https://img.shields.io/npm/v/react.json"
                },
                "info": {
                  "service": "npm",
                  "type": "version",
                  "modifiers": {
                    "type": "v"
                  }
                }
              },
              {
                "urls": {
                  "original": "https://circleci.com/gh/facebook/react.svg?circle-token=:circle-token",
                  "service": "https://circleci.com/gh/facebook/react.svg",
                  "shields": "https://img.shields.io/circleci/project/github/facebook/react.svg",
                  "content": "https://img.shields.io/circleci/project/github/facebook/react.json"
                },
                "info": {
                  "service": "circleci",
                  "type": "build"
                }
              }
            ],
            "linters": [
              "editorconfig",
              "eslint",
              "prettier"
            ],
            "coverage": 0.86
          }
        },
        "evaluation": {
          "quality": {
            "carefulness": 1,
            "tests": 0.679,
            "health": 1,
            "branding": 0.7
          },
          "popularity": {
            "communityInterest": 249582,
            "downloadsCount": 72578817.6666667,
            "downloadsAcceleration": -10757.7024733638,
            "dependentsCount": 0
          },
          "maintenance": {
            "releasesFrequency": 1,
            "commitsFrequency": 1,
            "openIssues": 1,
            "issuesDistribution": 0.323121463126083
          }
        },
        "score": {
          "final": 0.929621500215532,
          "detail": {
            "quality": 0.902269335310431,
            "popularity": 0.915890884787554,
            "maintenance": 0.96679682841931
          }
        }
      },
      secondPackageData: {
        "analyzedAt": "2022-11-15T05:08:56.815Z",
        "collected": {
          "metadata": {
            "name": "redux",
            "scope": "unscoped",
            "version": "4.2.0",
            "description": "Predictable state container for JavaScript apps",
            "keywords": [
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
              "elm"
            ],
            "date": "2022-04-18T21:55:15.566Z",
            "publisher": {
              "username": "acemarke",
              "email": "mark.erikson@gmail.com"
            },
            "maintainers": [
              {
                "username": "gaearon",
                "email": "dan.abramov@gmail.com"
              },
              {
                "username": "timdorr",
                "email": "timdorr@timdorr.com"
              },
              {
                "username": "acdlite",
                "email": "npm@andrewclark.io"
              },
              {
                "username": "acemarke",
                "email": "mark.erikson@gmail.com"
              }
            ],
            "repository": {
              "type": "git",
              "url": "git+https://github.com/reduxjs/redux.git"
            },
            "links": {
              "npm": "https://www.npmjs.com/package/redux",
              "homepage": "http://redux.js.org",
              "repository": "https://github.com/reduxjs/redux",
              "bugs": "https://github.com/reduxjs/redux/issues"
            },
            "license": "MIT",
            "dependencies": {
              "@babel/runtime": "^7.9.2"
            },
            "devDependencies": {
              "@babel/cli": "^7.8.4",
              "@babel/core": "^7.9.0",
              "@babel/node": "^7.8.7",
              "@babel/plugin-external-helpers": "^7.8.3",
              "@babel/plugin-proposal-object-rest-spread": "^7.9.5",
              "@babel/plugin-transform-runtime": "^7.9.0",
              "@babel/preset-env": "^7.9.5",
              "@babel/preset-flow": "^7.9.0",
              "@babel/preset-typescript": "^7.9.0",
              "@babel/register": "^7.9.0",
              "@rollup/plugin-babel": "^5.3.0",
              "@rollup/plugin-node-resolve": "^7.1.3",
              "@rollup/plugin-replace": "^2.3.2",
              "@types/jest": "^25.2.1",
              "@types/node": "^13.13.4",
              "@typescript-eslint/eslint-plugin": "^2.29.0",
              "@typescript-eslint/parser": "^2.29.0",
              "babel-eslint": "^10.1.0",
              "babel-jest": "^25.4.0",
              "cross-env": "^7.0.2",
              "eslint": "^6.8.0",
              "eslint-config-react-app": "^5.2.1",
              "eslint-import-resolver-typescript": "^2.0.0",
              "eslint-plugin-flowtype": "^4.7.0",
              "eslint-plugin-import": "^2.20.2",
              "eslint-plugin-jsx-a11y": "^6.2.3",
              "eslint-plugin-react": "^7.19.0",
              "eslint-plugin-react-hooks": "^3.0.0",
              "glob": "^7.1.6",
              "jest": "^25.4.0",
              "prettier": "^2.0.5",
              "rimraf": "^3.0.2",
              "rollup": "^2.7.2",
              "rollup-plugin-terser": "^5.3.0",
              "rollup-plugin-typescript2": "^0.27.0",
              "rxjs": "^6.5.5",
              "typescript": "^3.8.3",
              "typings-tester": "^0.3.2"
            },
            "releases": [
              {
                "from": "2022-10-16T00:00:00.000Z",
                "to": "2022-11-15T00:00:00.000Z",
                "count": 1
              },
              {
                "from": "2022-08-17T00:00:00.000Z",
                "to": "2022-11-15T00:00:00.000Z",
                "count": 1
              },
              {
                "from": "2022-05-19T00:00:00.000Z",
                "to": "2022-11-15T00:00:00.000Z",
                "count": 1
              },
              {
                "from": "2021-11-15T00:00:00.000Z",
                "to": "2022-11-15T00:00:00.000Z",
                "count": 2
              },
              {
                "from": "2020-11-15T00:00:00.000Z",
                "to": "2022-11-15T00:00:00.000Z",
                "count": 8
              }
            ],
            "hasTestScript": true,
            "hasSelectiveFiles": true,
            "readme": "# \u003Ca href='http://redux.js.org'\u003E\u003Cimg src='https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67' height='60' alt='Redux Logo' aria-label='redux.js.org' /\u003E\u003C/a\u003E\n\nRedux is a predictable state container for JavaScript apps.  \n(Not to be confused with a WordPress framework – [Redux Framework](https://reduxframework.com/).)\n\nIt helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as [live code editing combined with a time traveling debugger](https://github.com/reduxjs/redux-devtools).\n\nYou can use Redux together with [React](https://reactjs.org), or with any other view library.  \nIt is tiny (2kB, including dependencies).\n\n\u003E **Note**: We are currently planning a rewrite of the Redux docs. Please take some time to **[fill out this survey on what content is most important in a docs site](https://docs.google.com/forms/d/e/1FAIpQLSfzIkY3fXZ8PrQKScYMK0YoEgALfAK2qQ0mOj1_ibKv2qDTuQ/viewform)**. Thanks!\n\n[![build status](https://img.shields.io/travis/reduxjs/redux/master.svg?style=flat-square)](https://travis-ci.org/reduxjs/redux)\n[![npm version](https://img.shields.io/npm/v/redux.svg?style=flat-square)](https://www.npmjs.com/package/redux)\n[![npm downloads](https://img.shields.io/npm/dm/redux.svg?style=flat-square)](https://www.npmjs.com/package/redux)\n[![redux channel on discord](https://img.shields.io/badge/discord-%23redux%20%40%20reactiflux-61dafb.svg?style=flat-square)](https://discord.gg/0ZcbPKXt5bZ6au5t)\n[![Changelog #187](https://img.shields.io/badge/changelog-%23187-lightgrey.svg?style=flat-square)](https://changelog.com/187)\n\n## Learn Redux\n\nWe have a variety of resources available to help you learn Redux, no matter what your background or learning style is.\n\n### Just the Basics\n\nIf you're brand new to Redux and want to understand the basic concepts, see:\n\n- The **[Motivation](https://redux.js.org/introduction/motivation)** behind building Redux, the **[Core Concepts](https://redux.js.org/introduction/coreconcepts)**, and the **[Three Principles](https://redux.js.org/introduction/threeprinciples)**.\n- The **[basic tutorial in the Redux docs](https://redux.js.org/basics)**\n- Redux creator Dan Abramov's **free [\"Getting Started with Redux\" video series](https://egghead.io/series/getting-started-with-redux)** on Egghead.io\n- Redux co-maintainer Mark Erikson's **[\"Redux Fundamentals\" slideshow](http://blog.isquaredsoftware.com/2018/03/presentation-reactathon-redux-fundamentals/)** and **[list of suggested resources for learning Redux](http://blog.isquaredsoftware.com/2017/12/blogged-answers-learn-redux/)**\n- If you learn best by looking at code and playing with it, check out our list of **[Redux example applications](https://redux.js.org/introduction/examples)**, available as separate projects in the Redux repo, and also as interactive online examples on CodeSandbox.\n- The **[Redux Tutorials](https://github.com/markerikson/react-redux-links/blob/master/redux-tutorials.md)** section of the **[React/Redux links list](https://github.com/markerikson/react-redux-links)**. Here's a top list of our recommended tutorials:\n  - Dave Ceddia's posts [What Does Redux Do? (and when should you use it?)](https://daveceddia.com/what-does-redux-do/) and [How Redux Works: A Counter-Example](https://daveceddia.com/how-does-redux-work/) are a great intro to the basics of Redux and how to use it with React, as is this post on [React and Redux: An Introduction](http://jakesidsmith.com/blog/post/2017-11-18-redux-and-react-an-introduction/).\n  - Valentino Gagliardi's post [React Redux Tutorial for Beginners: Learning Redux in 2018](https://www.valentinog.com/blog/react-redux-tutorial-beginners/) is an excellent extended introduction to many aspects of using Redux.\n  - The CSS Tricks article [Leveling Up with React: Redux](https://css-tricks.com/learning-react-redux/) covers the Redux basics well.\n  - This [DevGuides: Introduction to Redux](http://devguides.io/redux/) tutorial covers several aspects of Redux, including actions, reducers, usage with React, and middleware.\n\n### Intermediate Concepts\n\nOnce you've picked up the basics of working with actions, reducers, and the store, you may have questions about topics like working with asynchronous logic and AJAX requests, connecting a UI framework like React to your Redux store, and setting up an application to use Redux:\n\n- The **[\"Advanced\" docs section](https://redux.js.org/advanced)** covers working with async logic, middleware, routing.\n- The Redux docs **[\"Learning Resources\"](https://redux.js.org/introduction/learning-resources)** page points to recommended articles on a variety of Redux-related topics.\n- Sophie DeBenedetto's 8-part **[Building a Simple CRUD App with React + Redux](http://www.thegreatcodeadventure.com/building-a-simple-crud-app-with-react-redux-part-1/)** series shows how to put together a basic CRUD app from scratch.\n\n### Real-World Usage\n\nGoing from a TodoMVC app to a real production application can be a big jump, but we've got plenty of resources to help:\n\n- Redux creator Dan Abramov's **[free \"Building React Applications with Idiomatic Redux\" video series](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)** builds on his first video series and covers topics like middleware, routing, and persistence.\n- The **[Redux FAQ](https://redux.js.org/faq)** answers many common questions about how to use Redux, and the **[\"Recipes\" docs section](https://redux.js.org/recipes)** has information on handling derived data, testing, structuring reducer logic, and reducing boilerplate.\n- Redux co-maintainer Mark Erikson's **[\"Practical Redux\" tutorial series](http://blog.isquaredsoftware.com/series/practical-redux/)** demonstrates real-world intermediate and advanced techniques for working with React and Redux (also available as **[an interactive course on Educative.io](https://www.educative.io/collection/5687753853370368/5707702298738688)**).\n- The **[React/Redux links list](https://github.com/markerikson/react-redux-links)** has categorized articles on working with [reducers and selectors](https://github.com/markerikson/react-redux-links/blob/master/redux-reducers-selectors.md), [managing side effects](https://github.com/markerikson/react-redux-links/blob/master/redux-side-effects.md), [Redux architecture and best practices](https://github.com/markerikson/react-redux-links/blob/master/redux-architecture.md), and more.\n- Our community has created thousands of Redux-related libraries, addons, and tools. The **[\"Ecosystem\" docs page](https://redux.js.org/introduction/ecosystem)** lists our recommendations, and there's a complete listing available in the **[Redux addons catalog](https://github.com/markerikson/redux-ecosystem-links)**.\n- If you're looking to learn from actual application codebases, the addons catalog also has a list of **[purpose-built examples and real-world applications](https://github.com/markerikson/redux-ecosystem-links/blob/master/apps-and-examples.md)**.\n\nFinally, Mark Erikson is teaching a series of **[Redux workshops through Workshop.me](#redux-workshops)**. Check the [workshop schedule](https://workshop.me/?a=mark) for upcoming dates and locations.\n\n### Help and Discussion\n\nThe **[#redux channel](https://discord.gg/0ZcbPKXt5bZ6au5t)** of the **[Reactiflux Discord community](http://www.reactiflux.com)** is our official resource for all questions related to learning and using Redux. Reactiflux is a great place to hang out, ask questions, and learn - come join us!\n\n## Before Proceeding Further\n\nRedux is a valuable tool for organizing your state, but you should also consider whether it's appropriate for your situation. Don't use Redux just because someone said you should - take some time to understand the potential benefits and tradeoffs of using it.\n\nHere are some suggestions on when it makes sense to use Redux:\n\n- You have reasonable amounts of data changing over time\n- You need a single source of truth for your state\n- You find that keeping all your state in a top-level component is no longer sufficient\n\nYes, these guidelines are subjective and vague, but this is for good reason. The point at which you should integrate Redux into your application is different for every user and different for every application.\n\n\u003E **For more thoughts on how Redux is meant to be used, see:**\u003Cbr\u003E\n\u003E\n\u003E - **[You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)**\u003Cbr\u003E\n\u003E - **[The Tao of Redux, Part 1 - Implementation and Intent](http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)**\u003Cbr\u003E\n\u003E - **[The Tao of Redux, Part 2 - Practice and Philosophy](http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/)**\n\u003E - **[Redux FAQ](https://redux.js.org/faq)**\n\n## Developer Experience\n\nDan Abramov (author of Redux) wrote Redux while working on his React Europe talk called [“Hot Reloading with Time Travel”](https://www.youtube.com/watch?v=xsSnOQynTHs). His goal was to create a state management library with a minimal API but completely predictable behavior. Redux makes it possible to implement logging, hot reloading, time travel, universal apps, record and replay, without any buy-in from the developer.\n\n## Influences\n\nRedux evolves the ideas of [Flux](http://facebook.github.io/flux/), but avoids its complexity by taking cues from [Elm](https://github.com/evancz/elm-architecture-tutorial/).  \nEven if you haven't used Flux or Elm, Redux only takes a few minutes to get started with.\n\n## Installation\n\nTo install the stable version:\n\n```sh\nnpm install --save redux\n```\n\nThis assumes you are using [npm](https://www.npmjs.com/) as your package manager.\n\nIf you're not, you can [access these files on unpkg](https://unpkg.com/redux/), download them, or point your package manager to them.\n\nMost commonly, people consume Redux as a collection of [CommonJS](https://github.com/webpack/docs/wiki/commonjs) modules. These modules are what you get when you import `redux` in a [Webpack](https://webpack.js.org/), [Browserify](http://browserify.org/), or a Node environment. If you like to live on the edge and use [Rollup](https://rollupjs.org), we support that as well.\n\nIf you don't use a module bundler, it's also fine. The `redux` npm package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/redux/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. For example, you can drop a UMD build as a [`\u003Cscript\u003E` tag](https://unpkg.com/redux/dist/redux.js) on the page, or [tell Bower to install it](https://github.com/reduxjs/redux/pull/1181#issuecomment-167361975). The UMD builds make Redux available as a `window.Redux` global variable.\n\nThe Redux source code is written in ES2015 but we precompile both CommonJS and UMD builds to ES5 so they work in [any modern browser](http://caniuse.com/#feat=es5). You don't need to use Babel or a module bundler to [get started with Redux](https://github.com/reduxjs/redux/blob/master/examples/counter-vanilla/index.html). You can even use the ES module build that's available at [`es/redux.mjs`](https://unpkg.com/redux/es/) which can be referenced using `type=\"module\"` in your `script` tag or as a standard `import`.\n\n### Complementary Packages\n\nMost likely, you'll also need [the React bindings](https://github.com/reduxjs/react-redux) and [the developer tools](https://github.com/reduxjs/redux-devtools).\n\n```sh\nnpm install --save react-redux\nnpm install --save-dev redux-devtools\n```\n\nNote that unlike Redux itself, many packages in the Redux ecosystem don't provide UMD builds, so we recommend using CommonJS module bundlers like [Webpack](https://webpack.js.org/) and [Browserify](http://browserify.org/) for the most comfortable development experience.\n\n## The Gist\n\nThe whole state of your app is stored in an object tree inside a single _store_.  \nThe only way to change the state tree is to emit an _action_, an object describing what happened.  \nTo specify how the actions transform the state tree, you write pure _reducers_.\n\nThat's it!\n\n```js\nimport { createStore } from 'redux'\n\n/**\n * This is a reducer, a pure function with (state, action) =\u003E state signature.\n * It describes how an action transforms the state into the next state.\n *\n * The shape of the state is up to you: it can be a primitive, an array, an object,\n * or even an Immutable.js data structure. The only important part is that you should\n * not mutate the state object, but return a new object if the state changes.\n *\n * In this example, we use a `switch` statement and strings, but you can use a helper that\n * follows a different convention (such as function maps) if it makes sense for your\n * project.\n */\nfunction counter(state = 0, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1\n    case 'DECREMENT':\n      return state - 1\n    default:\n      return state\n  }\n}\n\n// Create a Redux store holding the state of your app.\n// Its API is { subscribe, dispatch, getState }.\nlet store = createStore(counter)\n\n// You can use subscribe() to update the UI in response to state changes.\n// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.\n// However it can also be handy to persist the current state in the localStorage.\n\nstore.subscribe(() =\u003E console.log(store.getState()))\n\n// The only way to mutate the internal state is to dispatch an action.\n// The actions can be serialized, logged or stored and later replayed.\nstore.dispatch({ type: 'INCREMENT' })\n// 1\nstore.dispatch({ type: 'INCREMENT' })\n// 2\nstore.dispatch({ type: 'DECREMENT' })\n// 1\n```\n\nInstead of mutating the state directly, you specify the mutations you want to happen with plain objects called _actions_. Then you write a special function called a _reducer_ to decide how every action transforms the entire application's state.\n\nIf you're coming from Flux, there is a single important difference you need to understand. Redux doesn't have a Dispatcher or support many stores. Instead, there is just a single store with a single root reducing function. As your app grows, instead of adding stores, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. This is exactly like how there is just one root component in a React app, but it is composed out of many small components.\n\nThis architecture might seem like an overkill for a counter app, but the beauty of this pattern is how well it scales to large and complex apps. It also enables very powerful developer tools, because it is possible to trace every mutation to the action that caused it. You can record user sessions and reproduce them just by replaying every action.\n\n## Learn Redux from Its Authors\n\n### Redux Video Tutorials by Dan Abramov\n\n#### Getting Started with Redux\n\n**[Getting Started with Redux](https://egghead.io/series/getting-started-with-redux)** is a video course consisting of 30 videos narrated by [Dan Abramov](https://twitter.com/dan_abramov), author of Redux. It is designed to complement the “Basics” part of the docs while bringing additional insights about immutability, testing, Redux best practices, and using Redux with React. **This course is free and will always be.**\n\n\u003E [“Great course on egghead.io by @dan_abramov - instead of just showing you how to use #redux, it also shows how and why redux was built!”](https://twitter.com/sandrinodm/status/670548531422326785)  \n\u003E Sandrino Di Mattia\n\n\u003E [“Plowing through @dan_abramov 'Getting Started with Redux' - its amazing how much simpler concepts get with video.”](https://twitter.com/chrisdhanaraj/status/670328025553219584)  \n\u003E Chris Dhanaraj\n\n\u003E [“This video series on Redux by @dan_abramov on @eggheadio is spectacular!”](https://twitter.com/eddiezane/status/670333133242408960)  \n\u003E Eddie Zaneski\n\n\u003E [“Come for the name hype. Stay for the rock solid fundamentals. (Thanks, and great job @dan_abramov and @eggheadio!)”](https://twitter.com/danott/status/669909126554607617)  \n\u003E Dan\n\n\u003E [“This series of videos on Redux by @dan_abramov is repeatedly blowing my mind - gunna do some serious refactoring”](https://twitter.com/gelatindesign/status/669658358643892224)  \n\u003E Laurence Roberts\n\nSo, what are you waiting for?\n\n#### [Watch the free \"Getting Started with Redux\" video series](https://egghead.io/series/getting-started-with-redux)\n\n\u003E Note: If you enjoyed Dan's course, consider supporting Egghead by [buying a subscription](https://egghead.io/pricing). Subscribers have access to the source code of every example in my videos and tons of advanced lessons on other topics, including JavaScript in depth, React, Angular, and more. Many [Egghead instructors](https://egghead.io/instructors) are also open source library authors, so buying a subscription is a nice way to thank them for the work that they've done.\n\n#### Building React Applications with Idiomatic Redux\n\nThe **[Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)** course is a second free video series by Dan Abramov. It picks up where the first series left off, and covers practical production ready techniques for building your React and Redux applications: advanced state management, middleware, React Router integration, and other common problems you are likely to encounter while building applications for your clients and customers. As with the first series, **this course will always be free**.\n\n#### [Watch the free \"Idiomatic Redux\" video series](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)\n\n### Practical Redux course\n\n**[Practical Redux](https://www.educative.io/collection/5687753853370368/5707702298738688/)** is a paid interactive course by Redux co-maintainer [Mark Erikson](https://twitter.com/acemarke). The course is designed to show how to apply the basic concepts of Redux to building something larger than a TodoMVC application. It includes real-world topics like:\n\n- Adding Redux to a new Create-React-App project and configuring Hot Module Replacement for faster development\n- Controlling your UI behavior with Redux\n- Using the Redux-ORM library to manage relational data in your Redux store\n- Building a master/detail view to display and edit data\n- Writing custom advanced Redux reducer logic to solve specific problems\n- Optimizing performance of Redux-connected form inputs\n\nAnd much more!\n\nThe course is based on Mark's original free **[\"Practical Redux\" blog tutorial series](http://blog.isquaredsoftware.com/series/practical-redux/)**, but with updated and improved content.\n\n### Redux Fundamentals Workshop\n\nRedux co-maintainer [Mark Erikson](https://twitter.com/acemarke) has put together a [**Redux Fundamentals workshop**, and slides are available here](https://blog.isquaredsoftware.com/2018/06/redux-fundamentals-workshop-slides/). They cover:\n\n- The history and purpose of Redux\n- Reducers and actions, and working with a Redux store\n- Using Redux with React\n- Using and writing Redux middleware\n- Working with AJAX calls and other side effects\n- Unit testing Redux apps\n- Real-world Redux app structure and development\n\n## Documentation\n\n- [Introduction](http://redux.js.org/introduction)\n- [Basics](http://redux.js.org/basics)\n- [Advanced](http://redux.js.org/advanced)\n- [Recipes](http://redux.js.org/recipes)\n- [FAQ](http://redux.js.org/faq)\n- [Troubleshooting](http://redux.js.org/troubleshooting)\n- [Glossary](http://redux.js.org/glossary)\n- [API Reference](http://redux.js.org/api)\n\nFor PDF, ePub, and MOBI exports for offline reading, and instructions on how to create them, please see: [paulkogel/redux-offline-docs](https://github.com/paulkogel/redux-offline-docs).\n\nFor Offline docs, please see: [devdocs](http://devdocs.io/redux/)\n\n## Examples\n\nAlmost all examples have a corresponding CodeSandbox sandbox. This is an interactive version of the code that you can play with online.\n\n- [**Counter Vanilla**](https://redux.js.org/introduction/examples#counter-vanilla): [Source](https://github.com/reduxjs/redux/tree/master/examples/counter-vanilla)\n- [**Counter**](https://redux.js.org/introduction/examples#counter): [Source](https://github.com/reduxjs/redux/tree/master/examples/counter) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter)\n- [**Todos**](https://redux.js.org/introduction/examples#todos): [Source](https://github.com/reduxjs/redux/tree/master/examples/todos) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos)\n- [**Todos with Undo**](https://redux.js.org/introduction/examples#todos-with-undo): [Source](https://github.com/reduxjs/redux/tree/master/examples/todos-with-undo) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos-with-undo)\n- [**Todos w/ Flow**](https://redux.js.org/introduction/examples#todos-flow): [Source](https://github.com/reduxjs/redux/tree/master/examples/todos-flow)\n- [**TodoMVC**](https://redux.js.org/introduction/examples#todomvc): [Source](https://github.com/reduxjs/redux/tree/master/examples/todomvc) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todomvc)\n- [**Shopping Cart**](https://redux.js.org/introduction/examples#shopping-cart): [Source](https://github.com/reduxjs/redux/tree/master/examples/shopping-cart) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/shopping-cart)\n- [**Tree View**](https://redux.js.org/introduction/examples#tree-view): [Source](https://github.com/reduxjs/redux/tree/master/examples/tree-view) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/tree-view)\n- [**Async**](https://redux.js.org/introduction/examples#async): [Source](https://github.com/reduxjs/redux/tree/master/examples/async) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/async)\n- [**Universal**](https://redux.js.org/introduction/examples#universal): [Source](https://github.com/reduxjs/redux/tree/master/examples/universal)\n- [**Real World**](https://redux.js.org/introduction/examples#real-world): [Source](https://github.com/reduxjs/redux/tree/master/examples/real-world) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/real-world)\n\nIf you're new to the NPM ecosystem and have troubles getting a project up and running, or aren't sure where to paste the gist above, check out [simplest-redux-example](https://github.com/jackielii/simplest-redux-example) that uses Redux together with React and Browserify.\n\n## Testimonials\n\n\u003E [“Love what you're doing with Redux”](https://twitter.com/jingc/status/616608251463909376)  \n\u003E Jing Chen, creator of Flux\n\n\u003E [“I asked for comments on Redux in FB's internal JS discussion group, and it was universally praised. Really awesome work.”](https://twitter.com/fisherwebdev/status/616286955693682688)  \n\u003E Bill Fisher, author of Flux documentation\n\n\u003E [“It's cool that you are inventing a better Flux by not doing Flux at all.”](https://twitter.com/andrestaltz/status/616271392930201604)  \n\u003E André Staltz, creator of Cycle\n\n## Thanks\n\n- [The Elm Architecture](https://github.com/evancz/elm-architecture-tutorial) for a great intro to modeling state updates with reducers;\n- [Turning the database inside-out](https://www.confluent.io/blog/turning-the-database-inside-out-with-apache-samza/) for blowing my mind;\n- [Developing ClojureScript with Figwheel](https://www.youtube.com/watch?v=j-kj2qwJa_E) for convincing me that re-evaluation should “just work”;\n- [Webpack](https://webpack.js.org/concepts/hot-module-replacement/) for Hot Module Replacement;\n- [Flummox](https://github.com/acdlite/flummox) for teaching me to approach Flux without boilerplate or singletons;\n- [disto](https://github.com/threepointone/disto) for a proof of concept of hot reloadable Stores;\n- [NuclearJS](https://github.com/optimizely/nuclear-js) for proving this architecture can be performant;\n- [Om](https://github.com/omcljs/om) for popularizing the idea of a single state atom;\n- [Cycle](https://github.com/cyclejs/cycle-core) for showing how often a function is the best tool;\n- [React](https://github.com/facebook/react) for the pragmatic innovation.\n\nSpecial thanks to [Jamie Paton](http://jdpaton.github.io) for handing over the `redux` NPM package name.\n\n## Logo\n\nYou can find the official logo [on GitHub](https://github.com/reduxjs/redux/tree/master/logo).\n\n## Change Log\n\nThis project adheres to [Semantic Versioning](http://semver.org/).  \nEvery release, along with the migration instructions, is documented on the GitHub [Releases](https://github.com/reduxjs/redux/releases) page.\n\n## Patrons\n\nThe work on Redux was [funded by the community](https://www.patreon.com/reactdx).  \nMeet some of the outstanding companies that made it possible:\n\n- [Webflow](https://github.com/webflow)\n- [Ximedes](https://www.ximedes.com/)\n\n[See the full list of Redux patrons](PATRONS.md), as well as the always-growing list of [people and companies that use Redux](https://github.com/reduxjs/redux/issues/310).\n\n## License\n\n[MIT](LICENSE.md)"
          },
          "npm": {
            "downloads": [
              {
                "from": "2022-11-14T00:00:00.000Z",
                "to": "2022-11-15T00:00:00.000Z",
                "count": 1623914
              },
              {
                "from": "2022-11-08T00:00:00.000Z",
                "to": "2022-11-15T00:00:00.000Z",
                "count": 8616799
              },
              {
                "from": "2022-10-16T00:00:00.000Z",
                "to": "2022-11-15T00:00:00.000Z",
                "count": 35849222
              },
              {
                "from": "2022-08-17T00:00:00.000Z",
                "to": "2022-11-15T00:00:00.000Z",
                "count": 107157522
              },
              {
                "from": "2022-05-19T00:00:00.000Z",
                "to": "2022-11-15T00:00:00.000Z",
                "count": 203388641
              },
              {
                "from": "2021-11-15T00:00:00.000Z",
                "to": "2022-11-15T00:00:00.000Z",
                "count": 385242543
              }
            ],
            "starsCount": 245
          },
          "github": {
            "homepage": "https://redux.js.org",
            "starsCount": 58888,
            "forksCount": 15339,
            "subscribersCount": 1328,
            "issues": {
              "count": 4331,
              "openCount": 57,
              "distribution": {
                "3600": 1338,
                "10800": 596,
                "32400": 770,
                "97200": 501,
                "291600": 287,
                "874800": 217,
                "2624400": 204,
                "7873200": 156,
                "23619600": 120,
                "70858800": 107,
                "212576400": 35
              },
              "isDisabled": false
            },
            "contributors": [
              {
                "username": "gaearon",
                "commitsCount": 618
              },
              {
                "username": "markerikson",
                "commitsCount": 293
              },
              {
                "username": "timdorr",
                "commitsCount": 225
              },
              {
                "username": "cellog",
                "commitsCount": 42
              },
              {
                "username": "ellbee",
                "commitsCount": 39
              },
              {
                "username": "acdlite",
                "commitsCount": 32
              },
              {
                "username": "emmenko",
                "commitsCount": 25
              },
              {
                "username": "omnidan",
                "commitsCount": 23
              },
              {
                "username": "mindjuice",
                "commitsCount": 22
              },
              {
                "username": "chentsulin",
                "commitsCount": 21
              },
              {
                "username": "hedgerh",
                "commitsCount": 21
              },
              {
                "username": "aikoven",
                "commitsCount": 16
              },
              {
                "username": "AaronPowell96",
                "commitsCount": 15
              },
              {
                "username": "mikekidder",
                "commitsCount": 13
              },
              {
                "username": "maxhallinan",
                "commitsCount": 13
              },
              {
                "username": "slorber",
                "commitsCount": 11
              },
              {
                "username": "msutkowski",
                "commitsCount": 10
              },
              {
                "username": "frankychung",
                "commitsCount": 9
              },
              {
                "username": "coryhouse",
                "commitsCount": 9
              },
              {
                "username": "Andarist",
                "commitsCount": 9
              },
              {
                "username": "Shrugsy",
                "commitsCount": 9
              },
              {
                "username": "vramana",
                "commitsCount": 8
              },
              {
                "username": "ChrisJamesC",
                "commitsCount": 8
              },
              {
                "username": "nickmccurdy",
                "commitsCount": 8
              },
              {
                "username": "knowbody",
                "commitsCount": 7
              },
              {
                "username": "webpro",
                "commitsCount": 7
              },
              {
                "username": "ghengeveld",
                "commitsCount": 7
              },
              {
                "username": "davezuko",
                "commitsCount": 7
              },
              {
                "username": "CodinCat",
                "commitsCount": 7
              },
              {
                "username": "klequis",
                "commitsCount": 7
              },
              {
                "username": "andrewmcgivery",
                "commitsCount": 7
              },
              {
                "username": "vslinko",
                "commitsCount": 6
              },
              {
                "username": "danmaz74",
                "commitsCount": 6
              },
              {
                "username": "mjethani",
                "commitsCount": 6
              },
              {
                "username": "pierrickouw",
                "commitsCount": 6
              },
              {
                "username": "tonyspiro",
                "commitsCount": 6
              },
              {
                "username": "Igorbek",
                "commitsCount": 6
              },
              {
                "username": "Christopher-Warren",
                "commitsCount": 6
              },
              {
                "username": "phryneas",
                "commitsCount": 6
              },
              {
                "username": "moroshko",
                "commitsCount": 5
              },
              {
                "username": "johanneslumpe",
                "commitsCount": 5
              },
              {
                "username": "camsong",
                "commitsCount": 5
              },
              {
                "username": "pedrottimark",
                "commitsCount": 5
              },
              {
                "username": "JamieDixon",
                "commitsCount": 5
              },
              {
                "username": "just-boris",
                "commitsCount": 5
              },
              {
                "username": "sbakkila",
                "commitsCount": 5
              },
              {
                "username": "mwilc0x",
                "commitsCount": 5
              },
              {
                "username": "aroyan",
                "commitsCount": 5
              },
              {
                "username": "ooflorent",
                "commitsCount": 4
              },
              {
                "username": "rwillrich",
                "commitsCount": 4
              },
              {
                "username": "aaronjensen",
                "commitsCount": 4
              },
              {
                "username": "kolodny",
                "commitsCount": 4
              },
              {
                "username": "Bjvanminnen",
                "commitsCount": 4
              },
              {
                "username": "aweary",
                "commitsCount": 4
              },
              {
                "username": "gcanti",
                "commitsCount": 4
              },
              {
                "username": "JoeCortopassi",
                "commitsCount": 4
              },
              {
                "username": "erweixin",
                "commitsCount": 4
              },
              {
                "username": "MirceaUngureanu",
                "commitsCount": 4
              },
              {
                "username": "falinsky",
                "commitsCount": 4
              },
              {
                "username": "xphong",
                "commitsCount": 4
              },
              {
                "username": "djhojd",
                "commitsCount": 3
              },
              {
                "username": "voter101",
                "commitsCount": 3
              },
              {
                "username": "michalkvasnicak",
                "commitsCount": 3
              },
              {
                "username": "quicksnap",
                "commitsCount": 3
              },
              {
                "username": "gbezyuk",
                "commitsCount": 3
              },
              {
                "username": "tappleby",
                "commitsCount": 3
              },
              {
                "username": "glifchits",
                "commitsCount": 3
              },
              {
                "username": "dbrans",
                "commitsCount": 3
              },
              {
                "username": "stoikerty",
                "commitsCount": 3
              },
              {
                "username": "jzlxiaohei",
                "commitsCount": 3
              },
              {
                "username": "ream88",
                "commitsCount": 3
              },
              {
                "username": "markfinger",
                "commitsCount": 3
              },
              {
                "username": "fshowalter",
                "commitsCount": 3
              },
              {
                "username": "benlesh",
                "commitsCount": 3
              },
              {
                "username": "SimenB",
                "commitsCount": 3
              },
              {
                "username": "jridgewell",
                "commitsCount": 3
              },
              {
                "username": "kmerhi",
                "commitsCount": 3
              },
              {
                "username": "wmertens",
                "commitsCount": 3
              },
              {
                "username": "wbreakell",
                "commitsCount": 3
              },
              {
                "username": "brigand",
                "commitsCount": 3
              },
              {
                "username": "TrySound",
                "commitsCount": 3
              },
              {
                "username": "krawaller",
                "commitsCount": 3
              },
              {
                "username": "SamyPesse",
                "commitsCount": 3
              },
              {
                "username": "matiasleidemer",
                "commitsCount": 3
              },
              {
                "username": "raunofreiberg",
                "commitsCount": 3
              },
              {
                "username": "muhajirdev",
                "commitsCount": 3
              },
              {
                "username": "sveinpg",
                "commitsCount": 3
              },
              {
                "username": "nielsbom",
                "commitsCount": 3
              },
              {
                "username": "matthew-gerstman",
                "commitsCount": 3
              },
              {
                "username": "numb86",
                "commitsCount": 3
              },
              {
                "username": "MatanBobi",
                "commitsCount": 3
              },
              {
                "username": "sbaudray",
                "commitsCount": 3
              },
              {
                "username": "saintmalik",
                "commitsCount": 3
              },
              {
                "username": "mehagar",
                "commitsCount": 3
              },
              {
                "username": "38elements",
                "commitsCount": 3
              },
              {
                "username": "jakeboone02",
                "commitsCount": 3
              },
              {
                "username": "ryota-murakami",
                "commitsCount": 3
              },
              {
                "username": "jamiehodge",
                "commitsCount": 2
              },
              {
                "username": "skevy",
                "commitsCount": 2
              },
              {
                "username": "khtdr",
                "commitsCount": 2
              }
            ],
            "commits": [
              {
                "from": "2022-11-08T00:00:00.000Z",
                "to": "2022-11-15T00:00:00.000Z",
                "count": 2
              },
              {
                "from": "2022-10-16T00:00:00.000Z",
                "to": "2022-11-15T00:00:00.000Z",
                "count": 4
              },
              {
                "from": "2022-08-17T00:00:00.000Z",
                "to": "2022-11-15T00:00:00.000Z",
                "count": 15
              },
              {
                "from": "2022-05-19T00:00:00.000Z",
                "to": "2022-11-15T00:00:00.000Z",
                "count": 59
              },
              {
                "from": "2021-11-15T00:00:00.000Z",
                "to": "2022-11-15T00:00:00.000Z",
                "count": 136
              }
            ]
          },
          "source": {
            "files": {
              "readmeSize": 17390,
              "testsSize": 127568,
              "hasChangelog": true
            },
            "badges": [
              {
                "urls": {
                  "original": "https://img.shields.io/travis/reduxjs/redux/master.svg?style=flat-square",
                  "service": "https://api.travis-ci.org/reduxjs/redux.svg?branch=master",
                  "shields": "https://img.shields.io/travis/reduxjs/redux/master.svg",
                  "content": "https://img.shields.io/travis/reduxjs/redux/master.json"
                },
                "info": {
                  "service": "travis",
                  "type": "build",
                  "modifiers": {
                    "branch": "master"
                  }
                }
              },
              {
                "urls": {
                  "original": "https://img.shields.io/npm/v/redux.svg?style=flat-square",
                  "shields": "https://img.shields.io/npm/v/redux.svg",
                  "content": "https://img.shields.io/npm/v/redux.json"
                },
                "info": {
                  "service": "npm",
                  "type": "version",
                  "modifiers": {
                    "type": "v"
                  }
                }
              },
              {
                "urls": {
                  "original": "https://img.shields.io/npm/dm/redux.svg?style=flat-square",
                  "shields": "https://img.shields.io/npm/dm/redux.svg",
                  "content": "https://img.shields.io/npm/dm/redux.json"
                },
                "info": {
                  "service": "npm",
                  "type": "downloads",
                  "modifiers": {
                    "type": "dm"
                  }
                }
              }
            ],
            "linters": [
              "editorconfig",
              "eslint",
              "prettier"
            ]
          }
        },
        "evaluation": {
          "quality": {
            "carefulness": 1,
            "tests": 0.6,
            "health": 1,
            "branding": 0.85
          },
          "popularity": {
            "communityInterest": 75900,
            "downloadsCount": 35719174,
            "downloadsAcceleration": 53498.2293188736,
            "dependentsCount": 0
          },
          "maintenance": {
            "releasesFrequency": 0.793065068493151,
            "commitsFrequency": 0.961212328767123,
            "openIssues": 1,
            "issuesDistribution": 0.799835504832272
          }
        },
        "score": {
          "final": 0.92852899031724,
          "detail": {
            "quality": 0.946392065054361,
            "popularity": 0.842062943460406,
            "maintenance": 0.99968383025654
          }
        }
      }
      
    },
  });
