## Rob Majuri - Frontend Challenge Submission

This app is deployed at http://indegobikepulse.herokuapp.com/.

## Installation Instruction

To run the app locally:

* `npm install`
* In the root directory, create a .env file with two variables: `WEATHER_API` and `INDEGO_API`
* Assign to `WEATHER_API` the endpoint that I shared via email
* Assign to INDEGO_API the public endpoint https://www.rideindego.com/stations/json
* `npm start`

## Technologies Used

**Frontend:** JavaScript, jQuery, HTML, CSS
**Frontend Integrations:** Skycons, Google Maps, Google Places
**Backend:** Express, Request-Promise, Axios
**Config:** Webpack, Babel, dotenv

## Project Features

**Autocomplete:** The search input using latitude/longitude bounds to bias the autcomplete suggestions towards locations within Philadelphia. This feature relies on the Google Places API.

**Map:** On initial loading, the map displays markers representing every Indego bike station in Philadelphia. Upon search, the map displays a beach flag representing the user's current location and markers representing the 4 stations closest to the user. When clicked, the markers display basic information regarding that location, incuding the location's name, address, how many bikes are available, and how many parking docks are available.

**Scroll Window:** On initial loading, the side scroll window displays information blocks corresponding to every bike station in Philadelphia, since the map initially loads all stations. When a user submits a search address and the map filters the markers to include only the 4 closest to the user, the scroll window updates accordingly. 

The scroll window contains a couple interactive features. When a user clicks the main header within the each info block, the map zooms into that locations. Also, each info block contains a "See More" button that will cause the info block to expand and display additional information about that station: classic bikes available, smart bikes available, electric bikes available, and trikes available.

**Weather:** In the case of dangerous weather, the app displays a warning that appears just below the header in the same large font as the title "Indego Bike Pulse", but in a reddish-pink, eye-catching color. The warning's entrance is animated by a "shake" feature to make it more emphatic to the user. For the purposes of this app, I've deemed dangerous weather as that which includes extreme heat, below-freezing temperatures, or high winds. 

The animated icons beside the current weather display are from a set of animations offered publically by Skycons.

## Stretch Goals

With more time, here are some things I'd like to add or improve, apart from the goals laid out in the extra section of the original `README`:

* Adjust layout for mobile responsiveness using media queries
* Offer directions to a station that a user selects
* Style map and autocomplete suggestion typeface for consistency with app aesthetics

# Learned

* Next time I deploy to Heroku, create a separate branch for deployment
* By referencing the P'unk Avenue JavaScript style guide, I learned a lot about best practice,particularly in the following areas: avoiding variable littering, where to attach event handlers, cross-platform availablity of code features.

