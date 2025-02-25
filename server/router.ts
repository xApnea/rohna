import express from 'express'

import getEvents from './bandsintown.js';
//@ts-ignore
import mailchimpSignup from './mailchimp.js';

const router = express.Router();

router.use(express.json());

router.get('/events', async (req, res) => {
  const response = await getEvents();
  res.send(response);
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
