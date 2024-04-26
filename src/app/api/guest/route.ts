import prisma from "@/lib/prisma"
import { nanoid } from "nanoid"

interface Body {
    name: string
    confirmed: boolean
    message: string | null
}

interface GuestConfirmed extends Body {
    confirmedDate: string
    nanouuid: string
}

// Convert date got from database to normal date
const formatDate = ( dateString: string ) => {
    const date = new Date( dateString );

    const day = date.getDate().toString().padStart( 2, '0' );
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

const GET = async () => {
    try {
        // Fetch Guest data
        const list = await prisma.guest.findMany();

        // New guest list (woulb be changes)
        const newList: Array<GuestConfirmed> = [];

        for( var listItem of list ) {
            newList.push({ 
                nanouuid: listItem.nanouuid,
                name: listItem.name,
                confirmed: listItem.confirmed,
                message: listItem.message,

                // Get creation date of confirmation n' convert
                confirmedDate: formatDate( listItem.createdAt.toString() )
            })
        }

        // Return the new list in json
        return Response.json( newList )
    } catch (error) {
        console.log(error);
    } finally {
        prisma.$disconnect()
    }
}

const POST = async ( request: Request ) => {
    // Read the request body
    const { name, confirmed, message } = < Body > await request.json();

    // Insert data into the table
    try {
        await prisma.guest.create({
            data: {
                name: name,
                nanouuid: nanoid(20),
                confirmed: confirmed,
                message: message
            }
        })

        // Return a confirm message to user
        return Response.json({ msg: 'Gracias por tu confirmación!' })
    } catch ( error ) {
        console.log(error)
    } finally {
        prisma.$disconnect()
    }
}

const DELETE = async () => {
    try {
        await prisma.guest.deleteMany()
    } catch (error) {
        console.log(error)
    } finally {
        prisma.$disconnect()
    }


    return Response.json({ msg: 'msg'})
}

export { GET, POST, DELETE }