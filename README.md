# Cook Genius AI

Cook Genius AI is a web application that generates cooking recipes based on user-provided ingredients. Utilizing AI-powered inference from Hugging Face's Mixtral model, the application suggests recipes with relevant ingredients, formatted in markdown for easy readability.

### Click link below to test my project
<https://67c07cfb1c1f010dc52ce127--cosmic-zabaione-fda4e3.netlify.app/>

## Usage

- Enter ingredients into the input field and click Add Ingredient.

- Click Get Recipe button to generate a recipe based on your ingredients.

- The generated recipe will be displayed in Markdown format.

## Features

- Add ingredients to your list

- Generate a recipe suggestion based on available ingredients

- Displays the AI-generated recipe in a readable markdown format

- Button visibility adapts dynamically based on ingredient availability

## Technologies Used

- React: For building the frontend UI

- Hugging Face Inference API: To generate recipes using the Mixtral model

- UUID: For unique key generation in lists

- React Markdown: For rendering recipe output in a structured format

- dotenv: For managing environment variables

## Installation

Clone the repository:
``` git clone https://github.com/OrcunGokoluk/cook-genius-ai.git cd cook-genius-ai ```

Install dependencies:
``` npm install ```

Create a .env file and add your Hugging Face API token:
``` VITE_HF_ACCESS_TOKEN = your_token ```

Start the development server:
``` npm run dev ```

