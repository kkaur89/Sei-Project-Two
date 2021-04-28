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

![Screenshot 2021-04-28 at 14 42 10](https://user-images.githubusercontent.com/77445688/116414016-06264500-a830-11eb-8ea3-fc9b4bf0bd15.png)

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

**Home Page:**
For the homepage, before we added any functionality, we started rendering components in the JSX return section. We added a hero, two search bars (name, ingredient) and a container that would hold popular cocktails using the random api endpoint. The concept was for the user to search the cocktail by either the name or ingredient on the homepage, and then the user would be taken to Cocktail Search page using useHistory.

**Cocktail Search:** 
This component was the page that would render the search results of each cocktail in a grid format. We started by importing useState, useEffect and Axios so that we create our get GET requests to the API. Once we had created the requested, the data was then returned in an array format which we then needed to map through in the JSX. There were two differnet GET requests, one for the name of the cocktail and the other for the ingredient. We used console.log as much as possible to ensure we were capturing the data that was intended.

    const [cocktails, setCocktails] = useState(null)
    const [ingredCocktails, setIngredCocktails] = useState(null)


    useEffect(() => {
      const getData = async() => {
        const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        setCocktails(data.drinks)
        console.log(setCocktails)
      }
      getData()
    }, [])

    useEffect(() => {
      const getData = async() => {
        const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=')
        setIngredCocktails(data.drinks)
        console.log(setIngredCocktails)
      }
      getData()
    }, [])

**Cocktail Card:**
Once we had mapped through the array from the GET request in the cocktail seach component, we were able to pass in the keys the props and access them in the Cocktail Card. The puporse of this component is to format each cocktail within the grid on the previous page. A link to was also added to the card which linked to url of cocktail that was being clicked. This component was then imported into the Cocktail Search and returned within the map method of the get request.

      <div className="columns is-multiline">
        { !cocktails ?
          ingredCocktails.map(cocktail => (
            <CocktailCard key={cocktail.idDrink} {...cocktail}
            />
          ))
          :
          cocktails.map(cocktail => (
            <CocktailCard key={cocktail.idDrink} {...cocktail}
            />
          ))
        }
      </div> 

**Cocktail Show:**
The cocktail show component is the page that would display each cocktail with full information of method and ingredients. We used the table component from Bulma to display ingredient and the measure needed for each. The url for each cocktail was used using the id of the cocktail which we then added to App.js as an additional filepath route ```  <Route path="/cocktail/:id">```.

**A-Z:** 
This component was created by using the search by letter api endpoint. An array was created of letters which were then mapped through in JSX. Each letter was rendered as a button on the page, and then the onClick would handle the return of all the cocktails that have that begin with that letter being clicked.

The main issue we came across was that the below function we used to push the user to cocktail search page after typing something in the search field was not working. 


    const Home = () => {
      const history = useHistory()
      
      const handleChange = event => {
        setCocktailName(event.target.value)
      }
      const handleIngredientChange = event => {
        setIngredientName(event.target.value)
      }
      const handleSubmit = event => {
        console.log(event)
        history.push('/cocktail')
      }

As this was the example that we were given during class, we were unclear as to why this was not working. We exhasted the internet for solutions. The next and final day out course tutors helped us with a fix using ```{useLocation}``` which was unknown to us.

This meant that 
