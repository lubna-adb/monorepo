import { prisma } from '../apps/backend/prisma/db';

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "Leo Tobing", email: "leo@example.com" },
      { name: "John Doe", email: "john@example.com" },
      { name: "Jane Smith", email: "jane@example.com" },
    ]
  });
}

main();