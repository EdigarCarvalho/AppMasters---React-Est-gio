# React Project

Frontend Internship project primarily using React and TypeScript.

The project aims to consume an API with game information and display some of that game information on the frontend. It encompasses concepts such as design, responsiveness, fetching data, error handling, styling, among others. Below are the main requirements for this project:

## Functional Requirements

The base URL for the API is [https://games-test-api-81e9fb0d564a.herokuapp.com/api/](https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/)

- The project should be built using React or Next.JS.
- Fetch the list of games from `/data`.
- Display a loader while the data is being fetched.
- Present the games in three columns (on desktop).
- Each card should display at least the title and an image.
- Handle responsiveness to ensure it looks good on desktop, tablets, or mobile devices.
- When the API returns `status code` 500, 502, 503, 504, 507, 508, or 509, show the user the message "The server failed to respond, please try refreshing the page."
- If the API returns any other errors, display the message "The server is currently unable to respond, please try again later."
- When making a request, do not wait for more than 5 seconds for a response. If the data takes longer than 5 seconds to return, show the message "The server took too long to respond, please try again later."
- Whenever displaying a message to the user or having the data ready to be presented, hide the loader.
- Include a search field that allows users to search for games by title, with case-insensitive search.
- Once you have the data, check which `genre` values were returned and allow the user to select one of them. Then, filter to display only games of the selected genre.
