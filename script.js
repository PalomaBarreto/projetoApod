const botao = $('#buscar')
const titulo = $('#titulo')
const explicacao = $('#texto')
const img = $('#resultado')
let obj

botao.on('click', function (e)
{
  e.preventDefault()
  console.log('funcionou');
  pedido()
})

function pedido(data)
{
  $(`#data`).val()
  
  $.ajax
  ({url: `https://api.nasa.gov/planetary/apod?api_key=hdMOlndVmBUifRwy4vXW97lzCjGOLBYEs8qNr59T&date=` +  $(`#data`).val(),
  
  success: function(result)
  {
    console.log(result);
    obj = result
    titulo.html(`${obj.title}`)
    explicacao.html(`${obj.explanation}`)
    if (obj.media_type != "video")
    {
      img.html(`
      <img width = '500' heigth = '500' id="foto" src="${obj.url}" alt=""></img>
      `)
             
    }

    else 
    {
      img.html(`
      <iframe id="video" src="${obj.url}"></iframe>
      `)
    
    }
    
  }})

}