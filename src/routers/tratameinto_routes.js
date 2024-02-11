import {Router} from 'express'
const router = Router()
import { validacionTratamiento } from '../middlewares/validacionTratamiento.js';
import {
    detalleTratamiento,
    registrarTratamiento,
    actualizarTratamiento,
    eliminarTratamiento,
    cambiarEstado
} from "../controllers/tratamiento_controller.js";

import verificarAutenticacion from "../middlewares/autenticacion.js";

// Ruta para crear el tratamiento
router.post('/tratamiento/registro',verificarAutenticacion,validacionTratamiento,registrarTratamiento)

// Ruta para ver el detalle del tratamiento
router.get('/tratamiento/:id',verificarAutenticacion,detalleTratamiento)

// Ruta para actualizar el tratamiento
router.put('/tratamiento/:id',verificarAutenticacion,actualizarTratamiento)

// Ruta para eliminar el tratamiento 
router.delete('/tratamiento/:id',verificarAutenticacion,eliminarTratamiento)

// Ruta para listar los tratamientos
router.post('/tratamiento/estado/:id',verificarAutenticacion,cambiarEstado)


export default router