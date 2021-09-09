const bttn = $('#buscar')
const ttl = $('#titulo')
const hj = $('#diaAtual')
const exp = $('#texto')
const img = $('#midia')

pedidoApi()

bttn.on('click', function (e)
{
  e.preventDefault()
  console.log('funcionou');
  pedidoApi()
})

async function pedidoApi(data)
{
  let key = 'hdMOlndVmBUifRwy4vXW97lzCjGOLBYEs8qNr59T'
  var obj = await $.ajax
  ({url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${$('#inputData').val()}`,
  
  success: function(result)
  {
    obj = result
    console.log(obj);
    ttl.html(`${obj.title}`)
    exp.html(`${obj.explanation}`)
    
    if (obj.media_type != "video") 
    {
      img.html(`
      <figure>
      <img id="foto" src="${obj.url}">
      <figcaption> ${obj.date}</figcaption>
      </figure>
      `)
    } 
    
    else if (obj.media_type === "video")
    {
      img.html
      (`
      <iframe id="video" src="${obj.url}"></iframe>
      `)
    }
  }
})
}