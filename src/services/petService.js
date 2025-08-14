
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

// Debug logging
console.log('BASE_URL:', BASE_URL);
console.log('Environment variable:', import.meta.env.VITE_BACK_END_SERVER_URL);

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  } catch (err) {
    console.error('Error fetching pets:', err);
    throw err;
  }
};

const create = async (petData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petData),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  } catch (err) {
    console.error('Error creating pet:', err);
    throw err;
  }
};

export {
  index,
  create,
};
