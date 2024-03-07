import express from 'express'
import fs from 'fs';

const router= express.Router()
const contactPath='src/services/empleados.json'

const empleados=JSON.parse(fs.readFileSync(contactPath,'utf-8'));

router.get('/' ,(req,res)=>{
   console.log(empleados)
   res.send(empleados)
})

router.get('/:id', (req, res) => {
   const idAsked: string = req.params.id; 
   for(let temp of empleados){
      if(temp.id == idAsked){
         console.log(temp)
         res.send(temp)
      }
   }
   res.status(404).send('Empleado no encontrado');
});

router.get('/empleados/:empresa', (req, res) => {
   const empresaAsked = req.params.empresa; 
   
   const empleadosEncontrados = empleados.filter((temp: any)=> temp.empresa.nombre === empresaAsked);

   if (empleadosEncontrados.length > 0) {
      res.send(empleadosEncontrados);
   } else {
      res.status(404).send('No se encontraron empleados para esa empresa');
   }
});


router.post('/',(req,res)=>{
   res.send('saving a contact')
})

export default router