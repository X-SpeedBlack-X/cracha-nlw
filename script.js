const linksSocialMedia = {
  github: "X-SpeedBlack-X",
  youtube: "rocketseat",
  facebook: "isaquee.s",
  instagram: "_isaque.s_",
  twitter: "X_SpeedBlack_X" 
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children) {
    const social = (li.getAttribute('class'))

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }

  /* for(let i = 0; i <=10; i++) {
    alert(i)
  } */
  //i = i + 1
  // i++

  /*  document.getElementById('userName').textContent = 'Isaque' */
  /* userName.textContent = 'Lucas' */
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json() )
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userGitHubLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
  })
}
getGitHubProfileInfos()