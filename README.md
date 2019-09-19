# Anime Finder

Anime Finder is a web app designed to assist users in finding anime titles that they may be interested in watching based on their preferences.

Created at [Flatiron School](https://github.com/flatiron-school) by [Aaron Chu](https://github.com/aaronchu357) and [John Hill](https://github.com/jmhill91).

## Technologies Used
- ReactJS frontend
- Ruby on Rails backend with PostgreSQL database
- Kitsu API
- React-Router
- JWT
- BCrypt
- Fast JSON Api serializer

#### How are you going to get the many thousand of anime titles for suggestions?
We used an external database, Kitsu API, to populate the seed data of our app. 

#### How do you keep user information safe?
We used BCrypt and JWT to secure our users profiles securely and keep them authenticated while they were logged in.

How does the user navigate around the website?
We used React-Router to provide endpoints that directed the user to different parts of the site.

## Challenges
Working with KitsuAPI, which has a massive database, querying results was extremely time consuming. Therefore, there was a long buffer period when processing the filtered results due to the sheer size of the information. Also, the API design had key information saved in a multidimensional hash and due to this API design, the data we wanted was not in a single endpoint. Therefore we had to design our own relational database that connected the information together.

Another challenge we faced was the time constraint to provide a MVP. Even with the deadline though, we were able to meet MVP and start to work on some of our future goals. These goals include…
- A Search feature where a User can search for specific anime
- The User should be able to update their anime preferences
- An updated UI design for the app to help with presentation 

## Workaround
There were many considerations for the problem of a snail-paced query. Therefore we decided to go back to the code and playfully maneuver where we were fetching data from. In this way, the traffic was partialized and query speeds were much quicker. 
Other possible solutions for dealing with large amounts of data:
- Use a different database management system
- Elastic Search
- Use of pagination in API design
