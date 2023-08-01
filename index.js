const request = require('supertest');
const assert = require('assert');
const express=require('express');
const morgan=require('morgan');
const app=express();
const port = 3000

app.use(express.json())

app.get('/misitio', (req,res)=>{
 res.send('Bienvenido a mi sitio web');
});
app.listen(port, ()=>{
 console.log('Servidor escuchando en el puerto ' + port);
})

app.get('/misitio/about', (req,res)=>{
    res.send('<h1>Acerca de nosotros</h1>');
});

app.get('/misitio/gastos', (req,res)=>{
    res.json(
    {
    gasto:'Salud',
    monto:14575.60,
    informacion:'Corresponde a consultas médicas, pagos de seguros, medicinas'
    }
    );
});

app.post('/misitio/calculos', (req,res)=>{
    res.send('<h1>Cálculo impuesto a la renta</h1>');
});

app.post('/misitio/calculos', (req,res)=>{
    console.log(req.body)
    console.log(req.params);
    res.send('Cálculo impuesto a la renta')
});

app.post('/misitio/usuarios/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario nuevo registrado');
})

app.put('/misitio/usuarios/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario actualizado');
})
   
app.delete('/misitio/usuarios/:id', (req,res)=>{
    res.send('Usuario '+ (req.params.id) +' borrado');
});

app.get('/misitio/usuarios/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario obtenido');
})

let gastosVivienda = {
    monto: 1500
};

app.put('/misitio/gastos/vivienda', (req, res) => {
    const nuevoMonto = req.body.monto;
    gastosVivienda.monto = nuevoMonto;  
    res.json({ mensaje: 'Monto actualizado' });
});

app.delete('/misitio/gastos/vivienda', (req, res) => {
    const nuevoMonto = req.body.monto;
    gastosVivienda.monto = nuevoMonto;
    res.json({ mensaje: 'Monto borrado' });
});


