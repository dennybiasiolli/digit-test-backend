# digit-test-backend

NodeJS JWT Authentication API

For documentation and instructions check out https://jasonwatmore.com/post/2018/08/06/nodejs-jwt-authentication-tutorial-with-example-api


#### Running project

Make an `npm install` and after that you can do `npm run start`.

The project starts at http://localhost:4000/ and uses a JWT token authentication.

- authentication url: `/users/authenticate`

    accepts a `POST` call with a JSON body like

    ```json
    {
        "username": "username",
        "password": "password"
    }
    ```

- userinfo url: `/users/me`

    accepts a `GET` call with an `Authorization` header like

    ```
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU5NjI3NjE2NiwiZXhwIjoxNTk2ODgwOTY2fQ.3bJVNN_zJYX860jG-ft7RmmumZPvoA6qPkLY_WLBDcg
    ```

    **Note**: this header is returned by the `/users/authenticate` POST call
