# weater_app
1. Create react Vite project with tailwind css framework.
2. Now I Create four component Forecast.JSX, Inputs.jsx, TempratureAndDetails.JSX, TimeAndLocation. js.
3. Create a WeatherService.js file in the service folder to manage all functionality in the project.
4. Create a .env file for managing secret information.
5. Use the .gitignore file to hide node_modules and the .env file for the user. 
6. Use https://api.openweathermap.org API for managing current and daily basic weather in different places in the whole country.

7. In Forecast.JSX component User can show different day weather temperatures,
8. In Input.JSX component User can able to search for different location names, Write the location in the search bar, and after 3 seconds include the time to write the location name in the search bar user get a result. In that area, I use debounce method to prevent every time API call when writing the location name.
9. In TempratureAndDetails.JSX component User can show today's weather temperature and today's high and low temperatures.
10. In TimeAndLocation.JSX component User can show the current date and timezone.
