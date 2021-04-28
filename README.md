# Tipple your Fancy : SEI Project Two

## Contents

- Project Overview
- Project Brief
- Technologies Used
- Project Timeline - 48 Hours
- Bugs
- Wins and Challenges
- Future Improvements
- Key Learnings

## Project Overview

This was a pair coding project, where we were briefed to build a React app using an public API. my coding partner and I chose Cocktails DB API as it is something that appealed to us both and would allow us to be playful with the design. 

This API had many different endpoints, allowing you to search by ingredient, name etc. This then allowed us to make multiple requests and add more features for the user.

Deployed version available **[here](https://tipple-your-fancy.netlify.app)**.

## Project Brief

- Consume a public API
- A working application hosted on the browser
- For the app to have several components
- The app can have a router

## Technologies Used

- React.js
- Javascript (ES6)
- HTML5
- SCSS
- CSS Animation
- React.js
-  **[Cocktail DB API](https://www.thecocktaildb.com/api.php)**
- Axios
- Insomnia REST Client
- Yarn
- react-router-dom
- Bulma CSS Framework

## Project Timeline - 48 hours

### Planning
The first day was spent researching the API, and then breaking down the data in Insomnia. We looked into all six different endpoints to see which one we would need and how we could manipulate them in the front end.

The API returned a max of 100 cocktails per endpoint, with information such as the name, one image, ingredients and measures. 

<img width="717" alt="Screenshot 2021-04-28 at 11 27 32" src="https://user-images.githubusercontent.com/77445688/116390279-c94d5480-a815-11eb-9bd5-0d81d649b8d6.png">

Once we were comfortable with the dataset it was then time create a basic wireframe of the components and how they would all relate to each other. We wanted a homepage with some search functionality that would then return the results on a differnet page in a list. Each cocktail in the list would be clickable so then the user is taken to seperate page where they can read up on the details of the cocktail.

![Screenshot 2021-04-28 at 11 42 36](https://user-images.githubusercontent.com/77445688/116391296-e0407680-a816-11eb-9eee-2ba3f32e062b.png)

### Getting started
Once we were signed off, we started coding our project first by creating the app ```npx create-react-app APP_NAME --template cra-template-ga-ldn```, adding the origin of our repo name to GitHub and pushing up. Then once inside the app we installed ```yarn``` and then ```yarn start``` to run the server.

### Building the Components
**Further Installation:**
- Bulma Framework
- React Router Dom
- Axios

We started off by installing the Bulma Framework so that we could render a basic layout for our homepage. From this we were able to import a navbar, which we then added Links to and then imported this component to App.js which held all of our routers.

**Home Page**
For the homepage, before we added any functionality, we started rendering components in the JSX return section. We hadded a hreo, two search bars and a container that would hold popular cocktails using the random api endpoint.

**Cocktail Search** 
This component was the page that would render the search results of each cocktail in a grid format. We started by importing useState, useEffect and Axios so that we create our get GET requests to the API. Once we had created the requested, the data was then returned in an array format which we then needed to map through in the JSX.

**Cocktail Card**
Once we had mapped through the array from the GET request in the cocktail seach component, we were able to pass in the keys the props and access them in the Cocktail Card. The puporse of this component is to format each cocktail within the grid on the previous page. A link to was also added to the card which linked to url of cocktail that was being clicked. 


