const update = document.querySelector('#update-button')

update.addEventListener('click', _ =>{
  fetch('/artist', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      stageName: 'Blues Albums',
      birthName: 'Delta Blues by Robert Johnson'
    })
  }) //send PUT request
})


