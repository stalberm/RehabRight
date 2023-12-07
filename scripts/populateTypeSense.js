const fs = require('fs/promises');
const Typesense = require('typesense');


const API_KEY = "xyz";
const HOST = "localhost";
const PORT = 8108;
const PROTOCOL = "http"

const client = new Typesense.Client({
  nodes: [
    {
      host: HOST,
      port: PORT,
      protocol: PROTOCOL,
    },
  ],
  apiKey: `${API_KEY}`,
  connectionTimeoutSeconds: 2,
});

const createCollection = async () => {
  const exerciseSchema = {
    name: 'exercises',
    fields: [
      { name: 'exercise_name', type: 'string', sort: true},
      { name: 'description', type: 'string' },
      { name: 'image_url', type: 'string' },
      { name: 'associated_injuries', type: 'string[]', facet: true },
      { name: 'associated_muscles', type: 'string[]', facet: true },
    ],
    default_sorting_field: "exercise_name"
  };

  try {
    const data = await client.collections().create(exerciseSchema);
    console.log(data);
  } catch (error) {
    console.error('Error creating collection:', error);
  }
};

const importDocuments = async () => {
  try {
    const exerciseJson = await fs.readFile('./scripts/tmp/exercises.jsonl', 'utf8');
    await client.collections('exercises').documents().import(exerciseJson);
  } catch (error) {
    console.error('Error importing documents:', error);
  }
};

const runScript = async () => {
  await createCollection();
  await importDocuments();
};

runScript();

