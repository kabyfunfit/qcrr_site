import { Client, Databases, Functions, Account } from 'appwrite';

// 1. Load variables from the .env file
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

// 2. Setup the connection
const client = new Client();
client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);

// 3. Export the tools
export const databases = new Databases(client);
export const functions = new Functions(client);
export const account = new Account(client);

// 4. Centralize IDs
export const CONSTANTS = {
    DB_ID: import.meta.env.VITE_APPWRITE_DB_ID,
    RSVP_COLLECTION_ID: import.meta.env.VITE_COLLECTION_RSVP,
};