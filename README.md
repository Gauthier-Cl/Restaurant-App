    Set up the project:
        Create a new React project using the TypeScript template (e.g., with Create React App or Vite).
        Set up a GitHub repository and make it private.
        Add the necessary dependencies (e.g., React, React Router, etc.) to the project.

    Create the file structure:
        Set up the basic file structure for your React project, including folders for components, pages, models, and other necessary files.
        Create the data.js file and add the provided restaurant data to it.

    Define the restaurant model:
        Inside the models folder, create an interface that matches the structure of a restaurant.
        Export the interface from the file to be used in other parts of the application.

    Create the Context:
        Create a new file (e.g., RestaurantContext.tsx) to define the restaurant context.
        Import the restaurant data from the data.js file and store it in the context's state using the useState hook.
        Set up the context provider component that wraps the entire application and provides the restaurant data to its descendants.

    Implement the home page:
        Create a new file (e.g., HomePage.tsx) for the home page component.
        Use the restaurant data from the context to render a list of restaurant cards.
        Each card should display the restaurant's image, title, and subtitle.
        Add functionality to the favorite button on each card to add/remove the restaurant from the user's favorites list.
        Update the button text and appearance based on whether the restaurant is in the favorites list or not.

    Implement the restaurant details page:
        Create a new file (e.g., RestaurantDetailsPage.tsx) for the restaurant details page component.
        Retrieve the selected restaurant's data from the context based on the provided ID.
        Display the restaurant's details, including the menu, description, and image.

    Implement the favorites page:
        Create a new file (e.g., FavoritesPage.tsx) for the favorites page component.
        Retrieve the list of favorite restaurant IDs from the local storage.
        Use the restaurant data from the context to render a list of favorite restaurant cards.
        Each card should display the same information as the home page cards.
        Add functionality to the favorite button on each card to remove the restaurant from the favorites list.
        Implement a confirmation modal when removing a restaurant from favorites.

    Set up routing:
        Install a routing library (e.g., React Router) if not already included in the project.
        Define the necessary routes for the home page, restaurant details page, and favorites page.
        Configure the routes to render the corresponding components.

    Style the app:
        Apply appropriate styles to the components and pages according to the provided mockups.
        Use CSS or a styling library of your choice to create the desired layout and design.

    Test and refine:
        Test the app's functionality and ensure that all features work as expected.
        Refactor the code, if needed, to improve readability, maintainability, and reusability.
        Test the app's responsiveness and make any necessary adjustments to ensure it works well on different devices.

    Create a private GitHub repository:
        Initialize a Git repository in your project folder.
        Set the remote origin to your private GitHub repository.
        Add the necessary files, commit your code, and push it to the repository.

    Share the repository with the evaluator:
        Add the evaluator as a collaborator to your.