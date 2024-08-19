-- Enable foreign key checks
SET FOREIGN_KEY_CHECKS = 0;
-- Create tables
CREATE TABLE IF NOT EXISTS User (
    id CHAR(36) PRIMARY KEY,
    email VARCHAR(255),
    name VARCHAR(255)
);
CREATE TABLE IF NOT EXISTS Ingredient (
    id CHAR(36) PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255)
);
CREATE TABLE IF NOT EXISTS Recipe (
    id CHAR(36) PRIMARY KEY,
    name VARCHAR(255),
    steps TEXT
);
CREATE TABLE IF NOT EXISTS MealPlan (
    id CHAR(36) PRIMARY KEY,
    startDate DATE,
    endDate DATE,
    userFK CHAR(36),
    FOREIGN KEY (userFK) REFERENCES User(id)
);
CREATE TABLE IF NOT EXISTS MealPlanRecipe (
    id CHAR(36) PRIMARY KEY,
    mealPlanFK CHAR(36),
    recipeFK CHAR(36),
    userFK CHAR(36),
    FOREIGN KEY (mealPlanFK) REFERENCES MealPlan(id),
    FOREIGN KEY (recipeFK) REFERENCES Recipe(id),
    FOREIGN KEY (userFK) REFERENCES User(id)
);
CREATE TABLE IF NOT EXISTS IngredientRecipe (
    id CHAR(36) PRIMARY KEY,
    ingredientFK CHAR(36),
    recipeFK CHAR(36),
    FOREIGN KEY (ingredientFK) REFERENCES Ingredient(id),
    FOREIGN KEY (recipeFK) REFERENCES Recipe(id)
);
CREATE TABLE IF NOT EXISTS GroceryList (
    id CHAR(36) PRIMARY KEY,
    mealPlanFK CHAR(36),
    ingredientFK CHAR(36),
    userFK CHAR(36),
    quantity VARCHAR(255),
    FOREIGN KEY (mealPlanFK) REFERENCES MealPlan(id),
    FOREIGN KEY (ingredientFK) REFERENCES Ingredient(id),
    FOREIGN KEY (userFK) REFERENCES User(id)
);
-- Insert initial data
INSERT INTO User (id, email, name)
VALUES (UUID(), 'daniel@danieljcox.dev', 'god');
-- Create API user
CREATE USER 'API_FTtJ1bwzwBG8' @'%' IDENTIFIED BY 'xqay5laFJ8yJgQuv';
GRANT SELECT,
    INSERT,
    UPDATE,
    DELETE ON theRecipe.* TO 'API_FTtJ1bwzwBG8' @'%';
-- Create Admin user for management client
CREATE USER 'CB_Y3vc93oQdRuf' @'%' IDENTIFIED BY '1rr1sNaWZINQhVVg';
GRANT ALL PRIVILEGES ON *.* TO 'CB_Y3vc93oQdRuf' @'%';
FLUSH PRIVILEGES;
-- Enable foreign key checks
SET FOREIGN_KEY_CHECKS = 1;