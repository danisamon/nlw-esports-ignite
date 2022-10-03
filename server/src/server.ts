import express, { response } from 'express'

const app = express()

app.get('/games', (request, response) => {
    return response.json([
        
    ])
});

app.post('/ads', (request, response) => {
    return response.json([
        
    ])
});
app.get('/ads/:id/discord', (request, response) => {
    const adId = request.params.id;
    
        return response.send([
               
    
        ])
    });

app.get('/games/:id/ads', (request, response) => {
const gameId = request.params.id;

    return response.send([
        {id:1, name: 'Anuncio1'},
        {id:2, name: 'Anuncio2'},
        {id:3, name: 'Anuncio3'},
        {id:3, name: 'Anuncio3'}


    ])
})

app.listen(3333)