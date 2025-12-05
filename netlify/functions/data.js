let DATA = {
    participantes: [],
    misiones: []
};

export async function handler(event) {
    if (event.httpMethod === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify(DATA)
        };
    }

    if (event.httpMethod === "POST") {
        const body = JSON.parse(event.body);

        if (body.participantes) DATA.participantes = body.participantes;
        if (body.misiones) DATA.misiones = body.misiones;

        return {
            statusCode: 200,
            body: JSON.stringify({ ok: true })
        };
    }

    return {
        statusCode: 405,
        body: "Método no permitido"
    };
}