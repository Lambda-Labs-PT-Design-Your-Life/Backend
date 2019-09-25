<h1>Design Your Life - Backend</h1>

<b>With NodeJS, Postgres, and JWT</b>

<strong><h2>Setup</h2></strong>

<em>Let's get started</em>

`Download the repo, clone, and install into the directory of your choice`

<strong>Install dependencies</strong>

`Navigate into the backend folder, open your terminal, and type "npm install"`

<strong>Testing endpoints</strong>

`Simply type "npm test" and the testing will begin`

<strong>Start the server</strong>

`Open your terminal and type "npm start"`

Now you are ready to test your endpoints.

<strong><h2>Endpoints</h2></strong>

The database consists of three tables (Users, Activities, and Reflections)

To register a new user, send a post request to `https://design-your-life-backend.herokuapp.com/api/auth/register`

This register endpoint takes in three required fields:

```
{
    username: string,
    password: string,
    email: string
}
```

This will return the id of the user you just created, which is auto-generated.

Now you can head over to login at `https://design-your-life-backend.herokuapp.com/api/auth/login`

```
{
    username: string
    password: string
}
```

<em>If correct login information is entered, you should receive back an object with your your userId, and a JWT token.</em>

```
{
    token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9xxxxxxx....
    userId: 1,
}
```

<em><strong>This token is required to access all other endpoints.

You must mount this token into headers as `authorization: ${token}`</strong></em>

After you have successfully logged in and mounted your token, you can head over to either:

`https://design-your-life-backend.herokuapp.com/api/activity`

or

`https://design-your-life-backend.herokuapp.com/api/reflection`

This get request will return a list of activities or reflections that belong to the user you are logged in as.

To post, activities takes in 9 fields, all required:

```
{
	userId: integer,
	activityName: string,
	category: string,
	duration: string,
	description: string,
	createdDate: string,
	energyLevel: integer,
	engagementLevel: integer,
	enjoymentLevel: integer
}
```

Reflections takes in 5 required fields:

```
{
	userId: integer,
	week: string,
	reflectionText: string,
	insights: string,
	trends: string
}
```

Both activities and reflections auto-generate an id

If you navigate to either activity or reflection endpoint with an id at the end (`https://design-your-life-backend.herokuapp.com/api/reflection/1`), this will fetch you the reflection or activity matching that id. You can also post an update(put) to these endpoints.

If you navigate to either activtiy or reflection endpoint with /user/ with a userId at the end (`https://design-your-life-backend.herokuapp.com/api/reflection/user/1`), this will fetch you the reflections or activities that have been created by the user matching with the id.
