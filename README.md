# tgo_task

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

-JWT_SECRET:  This is a secret key for generating jwt token (string).

- x_app_id:  This is the id you get from Nutritionix account  (string).

- x_app_key: This is the key you get from Nutritionix account (string).



After you've set these environmental variables in the .env file at the root of the project, and intsall node modules using  `npm install`

Now you can run `npm start` in the terminal and the application should work.
