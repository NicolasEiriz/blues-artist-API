const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')




update.addEventListener('click', _ =>{
  fetch('/artist', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      stageName: 'Blues Albums',
      birthName: 'Delta Blues by Robert Johnson'
    })
  })
  .then(res =>{
    if (res.ok) return res.json()
  })
  .then(response =>{
    console.log(response);
    window.location.reload(true)
  }) //send PUT request
})

deleteButton.addEventListener('click', _ =>{
  fetch('/artist',{
    method: 'delete',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
      stageName: 'Blues Albums'
    })
  })

  .then(res=>{
    if (res.ok) return res.json()
  })
  .then(data => {
    window.location.reload()
  })
})

