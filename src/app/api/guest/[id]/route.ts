import prisma from "@/lib/prisma"

const GET = async ( request: Request, { params }: { params: { id: string } } ) => {
    return Response.json({ params })
}

const PUT = async ( request: Request, { params }: { params: { id: string } } ) => {
    try {
        // Find confirmation
        const confirmedFetch = await prisma.guest.findFirst({
            where: { nanouuid: params.id }
        })

        // Confirmed exists
        if( confirmedFetch ) {
            await prisma.guest.update({
                where: { id: confirmedFetch.id }, 
                data: {
                    confirmed: !confirmedFetch.confirmed
                }
            })
        } else 
            return Response.json({ msg: 'El Invitado No Existe' })

    } catch( error ) {
        console.log(error)
    } finally {
        prisma.$disconnect()
    }
}

const DELETE = async ( request: Request, { params }: { params: { id: string } } ) => {
    try {
        // Find confirmation
        const confirmedFetch = await prisma.guest.findFirst({
            where: { nanouuid: params.id }
        })

        // Confirmed exists
        if( confirmedFetch ) {
            await prisma.guest.delete({
                where: { id: confirmedFetch.id }
            })

            return Response.json({ msg: 'Invitado Eliminado' })
        } else 
            return Response.json({ msg: 'El Invitado No Existe' })

    } catch( error ) {
        console.log(error)
    } finally {
        prisma.$disconnect()
    }
}

export { GET, PUT, DELETE }