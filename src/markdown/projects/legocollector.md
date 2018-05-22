Originally my goal for this project was to learn **Flask**, but in order to learn Flask I had to learn several other technologies as well, making this project an enormous learning experience.

In order to get Flask running in Docker, I had to learn how to use **Docker-Compose**, which I will be using in every project from now on. I also had to figure out how to get **Travis CI** to work with a multilingual repository (Python on the back end, React Javascript on the front end), and also how to deploy them separately. I also had to learn how to run tests in Python (ultimately I settled for **pytest**) as part of the CI/CD process in Travis.

I also got more experience with relational databases, using **Postgresql** with **Sqlalchemy**. I had to learn how to do many-to-many relationships in tables rather than the NoSQL ways I was used to. I also had to update the database on a fixed interval; I experimented with **Celery** and **RabbitMQ** for this, but ultimately I used an **AWS Lambda** to call an endpoint to get around the problem of Heroku sleeping dynos.

Finally, I implemented **JSON Web Tokens** for authentication rather than the session cookie approach I had always used previously. On the client side, I tried out **Styled Components** and found them to be a really great solution that declutters the project structure; deleting all those CSS files was really satisfying!
