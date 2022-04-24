# Sign up (users.js)
- creates a new user schema
- connects to SignUpPage.js in frontend
    - creates form for username, name, and password
- compares passwords
    - error message pops up if passwords do not match
- checks if email exists in db
    - if not, creates new user and saves into db using mongoDB
    - interactions: createdAt and updatedAt
        - time and date for creation and updating

# Login (users.js)
- post request (takes info from body)
- tokens generated when users login
    - if token exists, error is thrown (user is already logged in)
    - if token doesn't exist, user is found in db
        - password from body is matched with user
        - generate token for login
- LoginPage.js
    - users are wrapped in a form
    -onSubmit property equals a function that calls API when triggered

# Update user info (users.js)
- call user db and search for specific ID in body of current page
    - stored into user
- user makes changes to update user info
- either take current user, or take whatever was changed
- once info is retrieved, user.save
- UpdateProfile.js
    - API called on handle submit
        - info is put in

# Delete user account
- find ID in body and delete
    - built in feature in mongodb
- Profile.js
    - simple ID passed in
    - account deleted on click
- bootstrap feature (pop up for delete)

# Logout user
- on click, delete token for user
    - user does not have access to dashboard
- navigate for routing
- updates token in mongoDB (updates time user logged out)