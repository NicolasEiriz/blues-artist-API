document.querySelector('button').addEventListener('click', getName)

async function getName(){

  let artistName = document.querySelector('input').value

  try{ 
    const res = await fetch (`https://blues-api-project.herokuapp.com/api/bluesArtist/${artistName}`)
    const data = await res.json()
    
    console.log(data)
    document.querySelector('h2').innerText = (data['birthName']) //here is the to "data.birthName"

} catch(err){
    console.log(err);
}
}
