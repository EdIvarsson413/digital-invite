import bcrypt from 'bcrypt'
import { nanoid } from 'nanoid'
import prisma from '../../../../src/lib/prisma'

// Function to hash the unique password in site
const hashPassword = async ( password: string ) => {
    const salt = await bcrypt.genSalt( 10 );
    return await bcrypt.hash( password, salt );
}

// Function to match password between the password in db
const matchPassword = async ( password: string, originalPassword: string ) => {
    return await bcrypt.compare( password, originalPassword );
}

// "Login"
const POST = async ( request: Request ) => {
    const { password: pass } = await request.json();

    try {
        // Find the password
        const access = await prisma.access.findFirst({
            where: { auxField: 'auxField' },
            select: { password: true },
        })

        // Password still exist?
        let authenticated: boolean;
        if( access ) {
            // Compare passwords n' give response
            authenticated = await matchPassword( pass, access?.password );
            return Response.json({ authenticated })
        } else
            return Response.json({ error: true, msg: 'La Contraseña No Existe' })

    } catch( error ) {
        console.log(error);
    } finally {
        prisma.$disconnect();
    }
}

const PUT = async ( request: Request ) => {
    const { password: pass, newPassword } = await request.json();

    try {
        // Find the password
        const access = await prisma.access.findFirst({
            where: { auxField: 'auxField' },
            select: { id: true, 
                password:true 
            },
        })

        // Password still exist?
        if( access ) {
            // Passwords matched?
            if( await matchPassword( pass, access.password )) {
                // Update password field
                await prisma.access.update({
                    where: {
                        id: access.id
                    },
                    data: {
                        password: await hashPassword( newPassword )
                    }
                })
                return Response.json({ error: false, msg: 'Contraseña Cambiada' })
            } else 
                return Response.json({ error: true, msg: 'Las Contraseñas No Coinciden' })
            
        } else
            return Response.json({ error: true, msg: 'La Contraseña No Existe' })

    } catch( error ) {
        console.log(error);
    } finally {
        prisma.$disconnect();
    }
}


export { POST, PUT }