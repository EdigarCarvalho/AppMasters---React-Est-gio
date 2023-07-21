# React Project

Frontend Internship project primarily using React and TypeScript.

The project aims to consume an API with game information and display some of that game information on the frontend. It encompasses concepts such as design, responsiveness, fetching data, error handling, styling, among others. Below are the main requirements for this project:

## Functional Requirements part 1

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

## Requirements part 2
The biggest differential of the second stage was the need to use firebase both for authentication with the login/password method, as well as a database (FireStore) to store information such as which games were evaluated and/or favorited

👉 Item that has been updated, to be clearer

- Use Firebase to authenticate using email/password
- Have a 🩶 for the user to favorite the game directly in the list, turning red when marked
- Save the user's favorite games in firebase, in realtime or firestore
- Having a “Favorites” button that only shows favorite games, allowing you to search and filter these games. It can be in the list already presented or in a separate one if you prefer.
- Next to the heart, have ★★★★ for the user to evaluate the game, being able to score one by one. That is, he can choose 1, 2, 3 or all 4.
- Having a way to sort by rating, seeing the best (or worst) first, clicking again to reverse the order.
- When loading the interface, leave the red ❤️ for favorite items and the yellow ⭐️ for rated items
- When accessing without being authenticated, the 🩶 and ★ icons must be visible, but clicking will request authentication
- 👉 When obtaining API games and firebase data, present. Keep loading for games. It doesn't need to load while waiting for firebase, because firebase will return the data faster and it can be complicated to “wait for firebase” if it is “listening for firebase”.
- Authentication must take place in the frontend `/auth/` route, using the firebase “E-mail/password” provider, where the user will be able to create an account or access the existing account (if only using this route)
- Choose an item to apply an animation with CSS, it can be when favorite, or rate, or when items appear
  
  ![Screenshot from 2023-07-20 23-46-59](https://github.com/EdigarCarvalho/AppMasters---React-Est-gio/assets/106999716/403cb065-dd8b-47a4-b4c4-825b865c9c48)
![Screenshot from 2023-07-20 23-47-39](https://github.com/EdigarCarvalho/AppMasters---React-Est-gio/assets/106999716/48a3547a-45a3-4846-b246-f18a968becd8)
