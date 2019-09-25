*server hosted at*: https://design-your-life-backend.herokuapp.com/

*Endpoints* 

To register a user make a post request to /api/auth/register
    send JSON Object with {username, password, email}

To login a user make a post request to /api/auth/login
    send JSON Object with {username, password}
    Endpoint will return a JWT Token that will need to be saved to local storage as authorization
    JWT Token can be decoded and will include the user's email and userId.

To add an activity post make a post request to /api/activity
    send JWT Token saved in local storage as headers
    send JSON Object with {userId, activityName, category, duration, descriptiion, createdDate, energyLevel, enjoymentLevel}

To view all activities created by a user make a get request to /api/activity/:userId (replace :userId with the user's id)
    This will return all activities created by the user as a json object

To view a single activity send a get request to /api/acitivity/:activityId (replace :activityId with the acitivityId that you want to view) 
    This will return the activity with the matching activityId

To update an activity send a put request to /api/acitivity/:activityId (replace :activityId with the acitivityId that you want to update) 

To delete and activity send a delete request to /api/acitivity/:activityId (replace :activityId with the acitivityId that you want to delete) 

To add an activity post make a post request to /api/reflection
    send JWT Token saved in local storage as headers
    send JSON Object with {userId, reflectionDate, reflectionText}

To view all reflectoins created by a user make a get request to /api/reflection/user/:userId (replace :userId with the user's id)
    This will return all reflections created by the user as a json object

To view a single reflection send a get request to /api/reflection/:reflectionId (replace :reflectionId with the reflectionId that you want to view) 
    This will return the reflecton with the matching reflectionId

To update an reflection send a put request to /api/reflection/:reflectionId (replace :reflectionId with the reflectionId that you want to update) 

To delete a reflection send a delete request to /api/reflection/:reflectionId (replace :reflectionId with the reflectionId that you want to delete) 