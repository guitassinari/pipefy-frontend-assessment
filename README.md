# Test Coverage


# The Assessment
This assessment was build to validate your developer skills using our main stack (React + GraphQL). Keep in mind that UI and performance walk together to deliver the best experience.

Your main objective is to deliver a list of Pipes (sorted by name), with the number of cards that belong to it. Once the pipes are totally listed, we want to see a small interaction to load some Pipe's cards (paginated following the GraphQL pattern) in a button click, loading more cards at an user's interaction (like a button click). You can load these cards inside a modal, for example.

You don't need to develop the best layout in this phase. Feel free to create your visual representation of Pipefy or replicate the visual structure that we already have.

## Visual Representation
![image](https://user-images.githubusercontent.com/5097397/127360349-7231b194-0a8c-4c31-af6c-886005bc8d6c.png)

**OBS: You don't need to develop the favorite and "add new pipe" interactions. Don't worry about the Pipe's icons.**

## What we will evaluate
- A semantic HTML;
- A well structured CSS (feel free to use any lib, preprocessor or pure CSS);
- How clean and readable your code is;
- Your vision about frontend's architecture;

## Bonus
- TypeScript usage;
- Unit and/or integration tests;
- Usage of a state management layer (like Redux, Mobx or even GraphQL cache);
- Functional programming approach;

# App Instructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run this App you will need to create a .env file and add these 2 variables in it:

```
REACT_APP_PIPEFY_API_URL=https://app.pipefy.com/queries
REACT_APP_PIPEFY_API_TOKEN=<API_TOKEN>
```

The `API_TOKEN` was sent in the same email that you received with this assessment's link.

## API
You can access our API documentation with the below link:

[Pipefy's GraphQL Playground](https://app.pipefy.com/graphiql)

## Tips
1. You can use the `organization` query to load all pipes. The other (cards) query is very simple to find in our documentation;
2. We already configured Apollo Provider for your;
3. Use the `@apollo/client` dependency to extract the `useQuery` hook, and the `gql`;  

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
