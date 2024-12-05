/** @format */

// app/api-docs/swagger.ts
const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Koi Auction API',
    version: '1.0.0',
    description: 'API documentation for Koi Auction application.',
  },
  servers: [
    {
      url: 'http://localhost:3000/api',
    },
    {
      url: 'https://koi-auction.vercel.app/api',
    },
  ],
  tags: [
    {
      name: 'Server',
    },
    {
      name: 'Authentications',
    },
    {
      name: 'Users',
    },
    {
      name: 'Auctions',
    },
  ],
  paths: {
    '/ping': {
      get: {
        tags: ['Server'],
        summary: 'Ping API',
        description: 'A simple ping endpoint to check server health.',
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string', example: 'pong' },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/auctions': {
      get: {
        tags: ['Auctions'],
        summary: 'List all auctions',
        description: 'Retrieve a list of all auctions available in the system.',
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: { type: 'string', example: '123' },
                      name: { type: 'string', example: 'Auction A' },
                      startTime: { type: 'string', format: 'date-time' },
                      endTime: { type: 'string', format: 'date-time' },
                    },
                  },
                },
              },
            },
          },
        },
      },
      post: {
        tags: ['Auctions'],
        summary: 'Create a new auction',
        description: 'Create a new auction with the provided details.',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string', example: 'Auction A' },
                  startTime: { type: 'string', format: 'date-time' },
                  endTime: { type: 'string', format: 'date-time' },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Auction created successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    id: { type: 'string', example: '123' },
                    name: { type: 'string', example: 'Auction A' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      BearerAuth: [],
    },
  ],
};

export default swaggerSpec;
