# TO DO list

## Expenses data handling for each user

- Change how data is stored in the server: DONE
- add userId attribute to each element, DONE
- show only data that is specific to that user DONE
- pass shop data as first uppercase then all lowercase letters DONE

## Budget cards updates

- Change so budget cards show only specific users data:
- - expense by month card DONE
- - expense by year card DONE
- - expense by shop card: DONE
- - - filter shops, doesn't show data right now, specifically Lidl shop FIXED
- Remove filter by userId from cards, data is already passed filtered DONE
- Add diagrams
- Add more filters to budget page

## Add local storage handlers

- pass data more quickly between routes
- keep user logged in on page reload

## Add register user button

- Add register user form DONE
- check if user doesn't exist DONE
- add user to the database DONE
- Register user form validation
- Register user password check (check if password is strong enough)
- Delete user

## Write tests

- Write tests for expense and user creation

## Misc

- Make that data from AppContext passes already filtered by user, will make code faster DONE
- clean code, refactor
- Add loading handlers
