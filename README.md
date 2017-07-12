# Choice-based Chatbot Adventure Game

This choice-based chat game allows the user to select an answer from a number of questions. Each answer should lead to a different question (or route through the dark maze), resulting in a fail/pass endgame or more questions.

## Installation Instructions

- `$ git clone ` this repo
- `$ bundle install` to install dependencies from Gemfile
- To create databases run `createdb chatbot_development` and `createdb chatbot_test`
- `$ rails db:migrate` to create required user tables

## Usage Instructions
- `$ rails server` to start up the server on port 3000
- Navigate to "http://localhost:3000/" to register as a new user (unless already signed in, in which case you will be taken straight to the chat)
- Once signed up/in, send the first pre-written message to the bot
- After the bot has typed out its response, you will be presented with several different message choices

- `rspec` to run tests

![](https://github.com/rorymcgit/chatbot/blob/master/firstQuestion_grab.png)

## Technologies Used

- Ruby
- Rails
- RSpec
- Javascript
- jQuery
- PostgreSQL 

## Approach

I spent a large amount of time planning, in particular around the architecture of the web app and data structures for the question/answer tree. I ended up settling on using JSON to serve the [questions and answers](https://github.com/rorymcgit/chatbot/blob/master/public/questions.json) as this made more sense for the tree structure (where each answer leads to a different route) than a relational database. I also spent a lot of time looking up and trying to adhere to best practices for Rails apps.

I drew my question/answer tree, along with several entity relationship diagrams during planning which I would be keen to talk through.

I was relatively unfamiliar with Rails, having only used it once in the past for a few days. In the allocated time frame I was doubtful I would complete all the tasks, and therefore set out an MVP to reach by plotting some user stories. The MVP of course does not include all the required specs. I just about reached my MVP, although the Javascript written in the last few hours is not clean and needs a refactor. The question/answer tree only goes one node deep too. The user stories are below.

MVP:
```
As a new user, 
So I can use the site,
I want to sign up with an email and password.

As an existing user, 
So I can use the site,
I want to sign in with my registered email and password.

As signed in user, 
So I can leave the site,
I want to sign out.

As a signed in user,
So I can begin the chat game,
I want to send a prewritten message to the game-master bot.

As a user in the chat,
So I know what to do,
I want the bot to reply after I have sent my message.

As a user in the chat,
So I can keep playing,
I want to select from multiple answers and send them back.
```

Some high-level stories for V2 (future)
```
As a user in the chat,
So the game eventually ends,
I want my message choices to ultimately end in a pass or a fail.

As an admin,
So I can make changes,
I want to log in and see the admin interface.
```


## Future features/improvements
- Refactor of javascript/jQuery script in conversation.js
- Tests to support views
- Admin user functionality, to add to users table, and an admin UI
- End game scenario
- Feature test using Capybara
