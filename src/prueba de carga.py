import random
import string
import json
import requests

def generar_datos_aleatorios():
    datos_aleatorios = {}

    datos_aleatorios["nombre"] = ''.join(random.choice(string.ascii_letters) for _ in range(5))
    datos_aleatorios["apellido"] = ''.join(random.choice(string.ascii_letters) for _ in range(5))
    datos_aleatorios["direccion"] = ''.join(random.choice(string.ascii_letters) for _ in range(10))
    datos_aleatorios["telefono"] = ''.join(random.choice(string.digits) for _ in range(10))
    datos_aleatorios["email"] = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(10)) + "@example.com"
    datos_aleatorios["password"] = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(8))

    return datos_aleatorios

# Solicitar la cantidad de veces que se generarán los datos
num_generaciones = int(input("Ingrese la cantidad de veces que se generarán los datos aleatorios: "))

# Convertir a formato JSON y enviar los datos a la URL la cantidad de veces especificada
url = " "
headers = {'Content-Type': 'application/json'}

for _ in range(num_generaciones):
    # Generar datos aleatorios
    datos_aleatorios = generar_datos_aleatorios()

    # Convertir a formato JSON
    json_datos = json.dumps(datos_aleatorios)

    # Enviar los datos a la URL
    response = requests.post(url, data=json_datos, headers=headers)

    # Obtener la respuesta del servidor
    if response.status_code == 200:
        print("Datos enviados correctamente.")
    else:
        print("Error al enviar los datos. Código de respuesta:", response.status_code)
