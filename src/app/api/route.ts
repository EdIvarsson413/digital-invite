import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const GET = () => {
    return Response.json({ hola: "Invitación - X" })
}

const POST = async ( request: Request ) => {
    // Read the request body
    console.log(await request.json())

    // Insert data into the table
    

    // Return a confirm message to user
    return Response.json({ msj: 'prueba body' })
}

export { GET, POST }