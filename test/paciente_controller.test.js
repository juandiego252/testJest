
import request from 'supertest';
import { loginPaciente, perfilPaciente, listarPacientes } from "../src/controllers/paciente_controller";
import app from '../src/index';

describe("Pruebas para loginPaciente", () => {
    it("Debería devolver un token y datos del paciente si las credenciales son válidas", async () => {
        // Simula una solicitud HTTP con credenciales válidas
        const req = { body: { email: "juan252@correo.com", password: "123445" } };
        const res = { status: jest.fn(), json: jest.fn() };
        // Llama a la función de inicio de sesión
        await loginPaciente(req, res);
        // Verifica que se haya llamado al método json con los datos correctos
        expect(res.json).toHaveBeenCalledWith({
            token: expect.any(String),
            nombre: expect.any(String),
            propietario: expect.any(String),
            emailP: expect.any(String),
            celular: expect.any(String),
            convencional: expect.any(String),
            _id: expect.any(String),
        });
    });
});

// Ejemplo de prueba para la función de ver el perfil del paciente
describe("Pruebas para perfilPaciente", () => {
    it("Debería devolver los datos del paciente sin ciertos campos sensibles", () => {
        // Simula una solicitud HTTP con un paciente autenticado
        const req = { pacienteBDD: { /* Datos del paciente */ } };
        const res = { status: jest.fn(), json: jest.fn() };

        // Llama a la función de ver el perfil
        perfilPaciente(req, res);

        // Verifica que se haya llamado al método json con los datos correctos
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
            /* Datos del paciente sin campos sensibles */
        }));
    });
});

describe("Pruebas para listarPacientes", () => {
    it("Debería devolver una lista de pacientes activos", async () => {
        // Simula una solicitud HTTP con un veterinario autenticado
        const req = { veterinarioBDD: { /* Datos del veterinario */ } };
        const res = { status: jest.fn(), json: jest.fn() };

        // Llama a la función de listar pacientes
        await listarPacientes(req, res);

        // Verifica que se haya llamado al método json con la lista correcta de pacientes
        expect(res.json).toHaveBeenCalledWith(expect.arrayContaining([
            // Datos de pacientes  
        ]));
    });
});
