# 🎄 Amigo Invisible 2025

Aplicación web para gestionar el sorteo del Amigo Invisible con misiones secretas.

## Descripción

Sistema que permite:
- Gestionar participantes y misiones desde una interfaz de administración
- Generar enlaces únicos para cada participante con su amigo invisible asignado y misión secreta
- Base de datos en Supabase que se sincroniza automáticamente
- Deploy automático en Netlify

## Tecnologías

- Frontend: HTML/CSS/JavaScript vanilla
- Backend: Supabase (REST API)
- Hosting: Netlify

## Funcionalidades

- ✅ Gestión de participantes y misiones
- ✅ Sorteo automático con reglas de exclusión
- ✅ Generación de enlaces únicos por participante
- ✅ Vista personalizada para cada participante

## Probar Localmente

```bash
./test-local.sh
```

Luego abre http://localhost:8000 en tu navegador.

**Nota:** El script usa Python 3 (o Python 2/PHP si no está disponible) para crear un servidor HTTP simple. Es solo para desarrollo local.

## Tests

Los tests se ejecutan automáticamente cuando abres la app en localhost. Revisa la consola del navegador (F12).

