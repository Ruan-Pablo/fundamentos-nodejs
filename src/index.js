const express = require('express');
const moon = require('nodemon')
const app = express();

/**
 * GET    - buscar
 * POST   - criar
 * PUT    - alterar
 * PATCH  - alterar específica
 * DELETE - deletar
 */

app.get("/courses", (request, response)=>{
    return response.json(['curso 1', 'curso 2', 'curso 3'])
})

app.post("/courses", (request, response) => {
    return response.json()
})

app.put("/courses/:id", (request, response) => {
    return response.json(['curso 1', 'curso 2', 'curso 3'])
})

app.patch("/courses/:id", (request, response) =>{
    return response.json()
})

app.delete("/courses/:id", (request, response) => {
    return response.json()
})

app.listen(3000);