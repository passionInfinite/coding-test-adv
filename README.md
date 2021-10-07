# Ownr Developer Candidate Coding Test

Congratulations, you have been asked to complete our Full Stack candidate proficiency test! 

You will have **48 hours** starting when you receive this test to return the full working source code as a Pull Request against a fork of this repository. Please thoroughly read the attached set of instructions. You will be creating a mini web app that uses React, Node, Express, and Postgres. This app will consist of a backend Express server that will deliver a React app to be rendered in the browser. 

The app that you will be building is a simple image carousel that allows the user to pick between cat or shark photos and then cycle through those photos. An example of a running version of this can be seen here:
https://founded.media/hiring/videos/cat-shark-app.mp4

In addition, you will be adding administrative APIs that allow users to add or delete animal categories, updating the categories available in the UI. 

If you have any questions, require further details or get stuck please do not hesitate to contact Hugh Soong (hugh.soong@rbc.com).

## Requirements

**Core Application**

The Express server, besides delivering whats required for React, should also provide an API endpoint that will return one of 3 possible lists of photo URLs (please see attached lists). Your React app should make a request to your API endpoint to retrieve a photo list. During this request the React app should show a loading state. Once the photo list has been retrieved the loading state should dismiss and the first photo should be shown. The user should now be able to cycle through the photos using left and right arrow buttons. The user can use the UI to toggle between cat photos, shark photos, or both (when both selected they should arrive in a random order). After each change to the desired list the loading state should be shown just like during the initial load and a new request to the photo API endpoint should be made (i.e. Do not cache the photo lists).

**Administrative Endpoints**

The Express server should also expose a number of administrative endpoints. The primary responsibility of these endpoints is to enable the addition or deletion of additional animal categories. When a category is added or removed, the application should be updated to reflect this (e.g. If the `dog` category is added, the UI should display buttons for cats, dogs, and sharks. Categories are shuffled together based on active categories).

These endpoints should be protected, only allowing requests accompanied by a valid authentication token. The server should also expose a `/login` route that returns an authentication token for a valid user. 

### Do

- Be mindful of when to use props vs. state vs. Hooks vs. Context
- Be RESTful
- ES6+
- Use JS best practices
- Be creative

### Don't

- Over think the problem, there's no trick here

### BONUS

- Unit tests
- Add other useful features

## Instructions

### Getting started

- Fork or clone this repository
- **ADD DOCKER INSTRUCTIONS**
- The Postgres database will be pre-loaded with three tables. The `auth` table contains a login with hashed password. The `animal_categories` table contains a table of animal categories. The `animals` table contains animal photos.
- The Photo List below can be used to add new photos to the application using the administrative endpoints. 
- Complete the assignment in a separate branch in your version of the repository

### Submission
There are several ways to submit your completed assignment:

#### PR Method (Preferred)
- Create a PR for `your new branch` -> `master` **in your own repository**
- Do not PR in this repository
- Email hugh.soong@rbc.com with a link to the PR

#### Zip Method
- Zip your completed code
- Email it to hugh.soong@rbc.com

## Photo Lists (UPDATE PHOTOS)

```json
{ 
  "dogs": [
  "https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg",
  "https://founded.media/hiring/photos/sharks/513197047_2f861d56cb_b.jpg",
  "https://founded.media/hiring/photos/sharks/2989909952_b59500107e_o.jpg",
  "https://founded.media/hiring/photos/sharks/4107884442_3baf8985f2_b.jpg",
  "https://founded.media/hiring/photos/sharks/3822452418_ffa66da89d_o.jpg",
  "https://founded.media/hiring/photos/sharks/3800013954_20fea3a9c9_b.jpg",
  "https://founded.media/hiring/photos/sharks/7109693941_250fc6b246_k.jpg",
  "https://founded.media/hiring/photos/sharks/8592704407_75c3c7ff53_h.jpg",
  "https://founded.media/hiring/photos/sharks/14730744390_cebc28aa86_k.jpg",
  "https://founded.media/hiring/photos/sharks/4936728723_91da549b05_b.jpg",
 ],
 "dinosaurs": [
  "https://founded.media/hiring/photos/cats/14157413946_fea785b4d6_k.jpg",
  "https://founded.media/hiring/photos/cats/16175483119_bd7374d8a8_h.jpg",
  "https://founded.media/hiring/photos/cats/13901304865_a444cf4d34_k.jpg",
  "https://founded.media/hiring/photos/cats/8311701653_49ed80202c_k.jpg",
  "https://founded.media/hiring/photos/cats/13336301695_3c06dd41cc_k.jpg",
  "https://founded.media/hiring/photos/cats/38679744435_66279af67c_k.jpg",
  "https://founded.media/hiring/photos/cats/6393395037_9cda69da1a_b.jpg",
  "https://founded.media/hiring/photos/cats/6977309082_44102ddf51_b.jpg",
  "https://founded.media/hiring/photos/cats/11477923503_bbdf86387d_b.jpg",
  "https://founded.media/hiring/photos/cats/4481336172_7f464f180d_b.jpg"
 ]
}
```
