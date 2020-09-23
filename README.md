# quote-comparator
Compare and rate quotes to find your next mortgage.

## Run the project locally

In order to run this project, 

1. Install dependencies:
   ```
    npm install
   ```
2. Run the code:
   ```
    npm start
   ```
You can now view quote-comparator in the browser at http://localhost:3000

## List of libraries used:

1. React
2. Redux
   1. redux-logger: Used to keep track of redux state throughout the application during developement
   2. redux-persist: Used to persist redux state between browser sessions. For a client, the experience of using the app will be better if they don't need to enter parameters every time they refresh the page. Better to use a library than maintain this myself. Avoiding parsing and stringifying JSON also improves performance. 
3. AgGridReact: Used for the quotes display. This library comes with many built-in features like sorting, resizing, formatting etc.
4. react-toastify: Used to show notifications when there are changes made to the grid. Easy to use module that did not need too many additional configurations
5. node-sass: Used for styling. Using sass makes styling a lot cleaner and easier to maintain than pure css.
6. query-string: A helpful library used to change a JSON object into a query string. I used this because it helps with using redux state directly to call the API.