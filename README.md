Setting up the project
1. npm init -> initialise the repository
2. create Readme.md file 
3. create a .gitignore file
4. create a public folder which will have temp folder carrying media uploaded temporarily and then transferred to our storage from there
5. create .gitkeep file inside temp
6. create .env file in home
7. create src folder
8. create files -> touch app.js constants.js index.js
9. create directories -> mkdir controllers db middlewares routes models utils
10. Install prettier 
11. add .prettierignore file which will consist of filenames to not be considered for formatting
12. create .prettierrc file which will have instructions for formatting including singleQuote, bracketSpacing, tabWidth, semi, trailingComma

13. npm i dotenv mongoose express
14. whenever connecting to a database, wrap it with a try catch or use promise
    Database is always in another continent, so it takes time. always use async await
    
