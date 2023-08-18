# weater_app
1. Create react Vite project with tailwind css framework.
2. Now I Create four component Forecast.JSX, Inputs.jsx, TempratureAndDetails.JSX, TimeAndLocation. js.
3. Create a WeatherServiceContext.JSX context file to manage all functionality in the project.
4. Add Loader Animation in the App.JSX component
5. Create a .env file for managing secret information.
6. Use the .gitignore file to hide node_modules and the .env file for the user. 
7. Use https://api.openweathermap.org API to manage current and daily basic weather in different places in the country.

8. In Forecast.JSX component User can show different day weather temperatures,
9. In Input.JSX component User can search for different location names, Write the location in the search bar, and after 2.5 seconds including the time to write the location name in the search bar user get a result. In that area, I use debounce method to prevent every time API call when writing the location name.
10. In TempratureAndDetails.JSX component User can show today's weather temperature and high and low temperatures.
11. In TimeAndLocation.JSX component User can show the current date and timezone.
