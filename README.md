# digitalPaaniasssignment
## Tech Stack

- Node.js: A JavaScript runtime environment for building server-side applications.
- Express.js: A web application framework for Node.js used to create APIs.
- bcryptjs: A library for hashing passwords securely.
- jsonwebtoken: A library for generating and verifying JSON Web Tokens (JWT) for user authentication.
- ## Functionality of Routes

### User Routes

1. **Sign Up**
   - Endpoint: POST /v1/users/signup
   - Description: Registers a new user with a username and password. The password is securely hashed before storing it in the database.
   - 
   - ![Screenshot (83)](https://github.com/Deepak9664/digitalPaaniasssignment/assets/110588982/6820ebbb-c45f-46a2-8ddd-1ad66f9c4b40)


2. **Login**
   - Endpoint: POST /v1/users/login
   - Description: Authenticates a user by comparing the hashed password stored in the database with the provided password. If the authentication is successful, a JWT token is generated and returned to the client for subsequent requests.
   - ![Screenshot (85)](https://github.com/Deepak9664/digitalPaaniasssignment/assets/110588982/ded4225a-ee42-447f-88a0-8b3b2fad3721)
  
3. 1. **Create Book**
   - Endpoint: POST /v1/books
   - Description: Creates a new book entry with a title, author, and publication year. Requires authentication with a valid JWT token.
   - ![Screenshot (86)](https://github.com/Deepak9664/digitalPaaniasssignment/assets/110588982/753b9576-2fd5-47f9-94b5-d22c519f72a8)
   - ![Screenshot (90)](https://github.com/Deepak9664/digitalPaaniasssignment/assets/110588982/7ae77182-5f72-4b37-9f2e-f889ceace1b6)



2. **Get All Books**
   - Endpoint: GET /v1/books
   - Description: Retrieves all books stored in the database.
   - ![Screenshot (87)](https://github.com/Deepak9664/digitalPaaniasssignment/assets/110588982/37912932-b029-4525-86fc-3911c54b709f)


3. **Filter Books by Author**
   - Endpoint: GET /v1/books/author?author={author_name}
   - Description: Retrieves books filtered by the specified author name.
   - ![Screenshot (88)](https://github.com/Deepak9664/digitalPaaniasssignment/assets/110588982/627c06fd-dfbb-4866-b30c-e267ac0fb05c)


4. **Filter Books by Publication Year**
   - Endpoint: GET /v1/books/publicationYear?publicationYear={year}
   - Description: Retrieves books filtered by the specified publication year.
   - ![Screenshot (89)](https://github.com/Deepak9664/digitalPaaniasssignment/assets/110588982/6d8e0b39-678d-4cf4-a38d-96e41d0f933f)
  
   - ## Authentication

- User authentication is implemented using JSON Web Tokens (JWT).
- When a user signs up or logs in, a JWT token is generated and returned.
- For routes that require authentication (e.g., creating a book), the client must include the JWT token in the request headers.
- The server verifies the JWT token before allowing access to protected routes. If the token is invalid or expired, the server returns a 401 Unauthorized error.
![Screenshot (91)](https://github.com/Deepak9664/digitalPaaniasssignment/assets/110588982/5a13ece0-09dd-4785-b5f8-a8b59445d274)
![Screenshot (92)](https://github.com/Deepak9664/digitalPaaniasssignment/assets/110588982/bbd6fd18-eaf8-4a47-a535-822908f5d131)




