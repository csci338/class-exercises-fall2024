## SQL Questions
1. SELECT - Retrieving Data. Write a query to list the titles and release years of all movies in the film table.

SELECT title, release_year FROM film; 


2. WHERE - Filtering Data. Write a query to find all customers whose last name starts with the letter 'S'.

select first_name, last_name from customer where last_name LIKE 'S%';


3. ORDER BY - Sorting Results. List all films titles and their durations, sorted by their rental duration in descending order. If two films have the same rental duration, sort them alphabetically by title.

SELECT title, rental_duration 
FROM film 
ORDER BY rental_duration DESC, title ASC;


4. JOIN - Combining Tables. Write a query to list all films along with their categories. Show the film title and category name.

Select film.title, category.name
FROM film
INNER JOIN film_category
    on film.film_id = film_category.film_id
inner join category
    on film_category.category_id = category.category_id;


5. AGGREGATE FUNCTIONS - Summarizing Data. Write a query to find the average rental duration for movies in each category.

SELECT category.name, AVG(film.rental_duration) AS average_rental_duration
FROM film
INNER JOIN film_category ON film.film_id = film_category.film_id
INNER JOIN category ON film_category.category_id = category.category_id
GROUP BY category.name
ORDER BY average_rental_duration DESC;


6. COUNT - Counting Rows. Write a query to count how many films are in the Action category.

SELECT COUNT(*) AS action_films_count
FROM film
INNER JOIN film_category ON film.film_id = film_category.film_id
INNER JOIN category ON film_category.category_id = category.category_id
WHERE category.name = 'Action';


7. INSERT - Adding Data. Insert a new customer into the customer table. The new customer should have a first name, last name, email, and be linked to an existing store.

INSERT INTO customer (first_name, last_name, email, store_id,  address_id)
VALUES ('Jacky', 'Till', 'jacky.till@example.com', 1, 1);


8. UPDATE - Modifying Data. Update the rental rate of all films in the Comedy category, increasing it by 10%.

UPDATE film
SET rental_rate = rental_rate * 1.10
WHERE film_id IN (
    SELECT film.film_id 
    FROM film
    INNER JOIN film_category ON film.film_id = film_category.film_id
    INNER JOIN category ON film_category.category_id = category.category_id
    WHERE category.name = 'Comedy'
);



9. DELETE - Removing Data. Write a query to delete all films that have never been rented. Make sure to use a subquery to identify the films that haven't been rented.

DELETE FROM film
WHERE film_id NOT IN (
    SELECT DISTINCT inventory.film_id 
    FROM rental
    JOIN inventory ON rental.inventory_id = inventory.inventory_id 
);

10. CREATE TABLE & ALTER TABLE - Managing Database Structure. Create a new table called movie_reviews with columns for review_id, film_id, reviewer_name, rating, and comments. Then, add a foreign key constraint linking film_id to the film table.

CREATE TABLE movie_reviews (
    review_id INT PRIMARY KEY,
    film_id INT NOT NULL,
    reviewer_name VARCHAR(255),
    rating DECIMAL(2, 1),
    comments TEXT
);

ALTER TABLE movie_reviews
ADD CONSTRAINT fk_film
FOREIGN KEY (film_id) REFERENCES film(film_id);

## SQLAlchemy Questions

1. Understanding SQLAlchemy Automap: How do you think the `AutoModels` class works to dynamically generate SQLAlchemy ORM models from the database schema?

It uses automap_base functionality with MetaData.reflect method retrieves the schema of the database, then automap_base uses this metadata to automatically create Python classes for each table, Lastly, self._base.classes adds the models and opens to be accessed. 

2. Async Database Operations: Explain the use of asynchronous database sessions in this script. Why does the script use AsyncSession instead of a regular Session, and how does this improve the efficiency of database operations?

Asynchronous database sessions allow for the script to perform non-blocking database operations, enabling other tasks to run concurrently.It can improve. Its concurrency allows other task to move forward while waint for responces from the database stop wainting time for the program. It also intergrates well with python event loops and is also better for larger scale tasks.  

3. SQLAlchemy Query Construction: In the `model_examples` function, there is a query that selects all customers whose last names start with the letter "P". See if you can write another questy that selects customers whose first name ends with the letters "n" or "a" using SQLAlchemy syntax.

async with AsyncSession(engine) as session:
    customers = await session.execute(
        select(Customer).where(
            (Customer.first_name.like('%n')) | (Customer.first_name.like('%a'))
        )
    )
    for customer in customers.scalars().all():
        print(customer.first_name)


4. In the `raw_sql_examples` function, there are two ways to execute SQL queries: directly via the engine using conn.execute() and using an ORM session with session.execute(). Discuss the pros and cons of executing raw SQL directly compared to using SQLAlchemy’s ORM methods.
Hint: Consider the trade-offs in terms of readability, safety (e.g., SQL injection risks), and flexibility when using raw SQL versus ORM abstractions.
Raw SQL
Pros:
Allows execution of complex queries or database-specific features not directly supported by SQLAlchemy.
faster for simple queries 
write optimized queries directly
Cons:
harder to read and maintain
Higher risk of SQL injection
Raw SQL ties the application to a specific database system, reducing portability.

ORM Methods
Pros:
the code is easier to write and understand for developers unfamiliar with raw SQL
prevent SQL injection by escaping user input with bulit in mechanisms 
easier migration to different database systems
Cons:
might add unnecessary complexity and overhead
Some advanced database-specific features may not be fully accessible
