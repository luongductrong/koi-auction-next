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
      url: 'https://koi-next.vercel.app/api',
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
      name: 'System Configurations',
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
    '/auth/login': {
      post: {
        tags: ['Authentications'],
        summary: 'Login',
        description: 'Login with the provided credentials to obtain a JWT token.',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  username: {
                    type: 'string',
                    example: 'user',
                  },
                  password: {
                    type: 'string',
                    example: '1',
                  },
                },
                required: ['username', 'password'],
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Login successful. Returns user information and a JWT token.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    token: {
                      type: 'string',
                      description: 'JWT token for authenticated requests',
                      example: 'eyJhbGciOiJIUzI1NiIsInR...',
                    },
                    fullName: {
                      type: 'string',
                      example: 'John Doe',
                    },
                    isFullInfo: {
                      type: 'boolean',
                      description: 'Indicates whether the user profile has full information',
                      example: true,
                    },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Bad request. Username and password are required.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Username and password are required',
                    },
                  },
                },
              },
            },
          },
          '401': {
            description: 'Unauthorized. Invalid credentials.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Invalid credentials',
                    },
                  },
                },
              },
            },
          },
          '403': {
            description: 'Forbidden. User is banned.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'User is banned',
                    },
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
    '/systems': {
      get: {
        tags: ['System Configurations'],
        summary: 'Get System Configurations',
        description: 'Retrieve all system fee configurations.',
        responses: {
          '200': {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    breederDeposit: { type: 'number', example: 0.2 },
                    auctionFee: { type: 'number', example: 500000.0 },
                    withdrawFree: { type: 'number', example: 0.01 },
                    withdrawFeeMin: { type: 'number', example: 50000.0 },
                  },
                },
              },
            },
          },
          '401': {
            description: 'Unauthorized',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Unauthorized',
                    },
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
