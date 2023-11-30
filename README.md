# Countries Info

## Description
Countries Info is a dynamic web application designed to provide detailed and up-to-date information about countries around the world. Integrating Google Maps API for visualizing countries' locations, this application is perfect for students, researchers, and anyone interested in learning more about different nations.

## Features
- **Country Search:** Users can search for countries and view detailed information, including capitals, population, languages, currencies, and more.
- **Maps Integration:** Each country's information is complemented with its location displayed on a map, powered by the Google Maps API.
- **User-Friendly Interface:** A clear and attractive user interface makes navigation and interaction simple and effective.

## Technologies Used
- **Frontend:** Developed with React, providing a smooth and reactive user experience. Bootstrap was used for styling to create a responsive and modern user interface.
- **Backend:** Node.js with Express (planned for future expansions and features).
- **Data API:** Information fetched from the REST Countries API.
- **Maps API:** Google Maps API for displaying country locations.
- **Deployment:** Hosted and managed on Vercel for fast and reliable access.

## Accessing the Application
Visit [Countries Info](https://countries-info-git-main-pablosimonestradas-projects.vercel.app/) to explore the application.

## Screenshots

![Untitled](https://github.com/PabloSimonEstrada/Countries-Info/assets/115966506/7e979829-9192-48c8-9665-83f9bcd40ebf)

![Untitled4](https://github.com/PabloSimonEstrada/Countries-Info/assets/115966506/bd6f7bb4-b565-4c6c-8cc9-3b47ed5672e0)

![Untitled3](https://github.com/PabloSimonEstrada/Countries-Info/assets/115966506/1e10ad9d-9a27-4e8e-86ed-4ff22d12c4e4)

![Untitled2](https://github.com/PabloSimonEstrada/Countries-Info/assets/115966506/ef3b28b7-2c99-4e98-9fef-5f85b3f5dd5a)




## How It Works

### Using the Application
Countries Info provides a straightforward and intuitive interface for users to explore information about countries worldwide. Here's how to use it:

- **Country Search:**
  - Upon opening the application, you'll find a text input field labeled "Enter country name."
  - Type the name of the country you're interested in and click the "Search Country" button.

- **Viewing Country Information:**
  - Once a valid country name is entered and the search is initiated, the application displays detailed information about the selected country, including a map showing the country's location using Google Maps.

### Error Handling
The application is designed to handle errors gracefully, ensuring a smooth user experience. Here’s how error handling is managed:

- **Invalid or Empty Input:**
  - If you attempt to search without entering a country name, an alert prompts you to enter a country name.

- **Backend Fetch Errors:**
  - If there's an issue fetching country information from the backend (like network issues or server errors), an error message is displayed alerting the user to try again.

- **No Match Found:**
  - In cases where a country name does not match any country in the API, the application does not display any information, indicating that the entered name might be incorrect or not available in the database.

- **Robust Exception Handling:**
  - The application uses try-catch blocks to handle exceptions during API requests, ensuring that any unforeseen errors are caught and handled appropriately.

## How to Contribute
We welcome community contributions. If you have an idea to improve the application or want to report a bug, feel free to:
- Open an issue.
- Submit a Pull Request with your proposals.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
