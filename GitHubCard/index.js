/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml' , 'luishrd', 'bigkne'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardCreator(userInfo){
  // making elements on the page
  //main container
  const newCard = document.createElement('div');

  const userImg = document.createElement('img');

  //sub-container
  const subContainer = document.createElement('div');

  const realName = document.createElement('h3');

  const userName = document.createElement('p');

  const location = document.createElement('p');

  const profile = document.createElement('p');


  // anchor that's nested inside userProfile
  const gitHub = document.createElement('a');

  // back to nested inside the subcontainer
  const followers = document.createElement('p');

  const following = document.createElement('p');

  const bio = document.createElement('p');

  // parent child relationship

  //newCard is parent
  newCard.appendChild(userImg);

  newCard.appendChild(subContainer);

  //sub-container is child of newCard and hold everything else
  subContainer.appendChild(realName);

  subContainer.appendChild(userName);

  subContainer.appendChild(location);

  subContainer.appendChild(profile);

  //profile is the parent of the gitHub link
  profile.appendChild(gitHub);

  subContainer.appendChild(followers);

  subContainer.appendChild(following);

  subContainer.appendChild(bio)

  // element classes
  newCard.classList.add('card');

  subContainer.classList.add('card-info');

  realName.classList.add('name');

  userName.classList.add('username');


  // defining what elements are
  userImg.src =userInfo.avatar_url;

  realName.textContent = userInfo.name;

  userName.textContent =userInfo.login;

  location.textContent = `Location: ${userInfo.location}`;

  gitHub.textContent = `Profile: ${userInfo.html_url}`;

  followers.textContent =`Followers: ${userInfo.followers}`;

  following.textContent = `Following: ${userInfo.following}`;

  bio.textContent =` Bio: ${userInfo.bio}`;

  return newCard; 
}

const placeCards = document.querySelector('.cards')

axios.get('https://api.github.com/users/AlexandroM1234')
.then(response=>{
  const dataObject=response.data
  const card = cardCreator(dataObject)
  placeCards.appendChild(card)
})
.catch(error=>{
  console.log(error)
})

followersArray.forEach(follower=>{
  axios.get(`https://api.github.com/users/${follower}`).then(response=>{
    const arrayCard = cardCreator(response.data);
    placeCards.appendChild(arrayCard)
  })
})
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
