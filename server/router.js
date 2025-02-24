import express, { Router } from 'express'

import getEvents from './bandsintown.js';
import mailchimpSignup from './mailchimp.js';

const router = Router();

router.use(express.json());

router.get('/events', async (req, res) => {
  const response = await getEvents();
  res.send(response);
});

router.post('/signup', async (req, res) => {
  try {
    const result = await mailchimpSignup(req.body);
    res.send(result)
  } catch (error) {
    res.status(error.status).send({ message: error.detail, errors: error.errors });
  }
});

export default router;
