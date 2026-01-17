import arcjet, { shield, detectBot, tokenBucket } from '@arcjet/next'

export const aj = arcjet({
  key: process.env.ARCJET_KEY || 'dummy-key-for-development',
  // Limit requests by IP address
  characteristics: ['ip.src'],
  rules: [
    // Protect against common attacks
    shield({
      mode: 'LIVE', // Enable protection in production
    }),
    // Block known bots
    detectBot({
      mode: 'LIVE', // Enable bot detection in production
      block: [
        'AUTOMATED',
        'CURL',
        'POSTMAN',
        'GO_HTTP',
        'K6',
        'PHANTOM_JS',
        'JAVA',
        'PYTHON',
        'NODE_JS',
        'PERL',
        'RUBY',
        'C_SHARP',
        'GO',
        'SCALA',
        'PHP',
        'ERLANG',
        'ELIXIR',
      ],
    }),
    // Rate limiting
    tokenBucket({
      mode: 'LIVE', // Enable rate limiting in production
      refillRate: 5, // 5 tokens
      interval: 60, // per minute
      capacity: 10, // maximum of 10 tokens
    }),
  ],
})

export const contactFormAj = arcjet({
  key: process.env.ARCJET_KEY || 'dummy-key-for-development',
  characteristics: ['ip.src'],
  rules: [
    shield({ mode: 'LIVE' }),
    detectBot({ 
      mode: 'LIVE',
      block: [
        'AUTOMATED',
        'CURL',
        'POSTMAN',
        'GO_HTTP',
        'K6',
        'PHANTOM_JS',
        'JAVA',
        'PYTHON',
        'NODE_JS',
        'PERL',
        'RUBY',
        'C_SHARP',
        'GO',
        'SCALA',
        'PHP',
        'ERLANG',
        'ELIXIR',
      ],
    }),
    tokenBucket({
      mode: 'LIVE',
      refillRate: 2, // Stricter rate limiting for contact form
      interval: 300, // 2 submissions per 5 minutes
      capacity: 3,
    }),
  ],
})