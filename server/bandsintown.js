import axios from 'axios';

const getEvents = async function () {
  const getEventsOptions = {
    method: 'get',
    url: 'https://rest.bandsintown.com/artists/rohna/events',
    params: {
      app_id: process.env.BANDSINTOWN_APP_ID,
    },
  };
  try {
    const response = await axios(getEventsOptions);
    return response.data;
  } catch (err) {
    console.log(err.response);
  }
};

export default getEvents;