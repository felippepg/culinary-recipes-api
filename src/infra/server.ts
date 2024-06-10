import Fastify, { FastifyInstance } from 'fastify';
import recipeRoutes from '../routes/recipe.routes';

const server: FastifyInstance = Fastify({
  logger: true
})

server.register(recipeRoutes);

export const start = async () => {
  try {
    await server.listen({ port: 3000 })

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port

  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
