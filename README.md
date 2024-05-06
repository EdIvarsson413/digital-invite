# About
This project is an custom digital invitation, based in templates that arein network

## Database
The project is using Prisma as database orm. The schema is in [scheme.prisma](./prisma/schema.prisma).

#### Database: PostgreSQL

## .env
You need this variables:
+ DATABASE_URL: Give to prisma the local database or cloud db link
+ NEXT_PUBLIC_BACKEND_URL:
    - For avoid warnings of Next, you have to put the complete url. For ex: http://localhost:3000.
    - Only the domain, the functions already have the missing url content.

