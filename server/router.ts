import express from 'express'
import cache from 'memory-cache'

import getEvents from './bandsintown.js';
//@ts-ignore
import mailchimpSignup from './mailchimp.js';

const router = express.Router();

router.use(express.json());

router.get('/events', async (req, res) => {
  const cachedEvents = cache.get('events')
  if (cachedEvents) {
    res.send(cachedEvents);
  } else {
    const events = await getEvents();

    const ttl = 1000 * 60 * 10; // 1 hour
    cache.put('events', events, ttl);

    res.send(events);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const result = await mailchimpSignup(req.body);
    res.send(result)
  } catch (error: any) {
    res.status(error.status).send({ message: error.detail, errors: error.errors });
  }
});

export default router;
