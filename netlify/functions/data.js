import { getStore } from "@netlify/blobs";

export async function handler(event) {
    const store = getStore("amigo-invisible");

    if (event.httpMethod === "GET") {
        const participantes = (await store.get("participantes")) || [];
        const misiones = (await store.get("misiones")) || [];

        return {
            statusCode: 200,
            body: JSON.stringify({ participantes, misiones })
        };
    }

    if (event.httpMethod === "POST") {
        const body = JSON.parse(event.body);

        if (body.participantes) await store.set("participantes", body.participantes);
        if (body.misiones) await store.set("misiones", body.misiones);

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