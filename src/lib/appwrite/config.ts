import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '65b2943db1cb38d6114b',
  databaseId: '65b2bf9758d767bf51a3',
  storageId: '65b2bf17974368dfa7da',
  userCollectionId: '65b2c1143f271e106524',
  postCollectionId: '65b2c02d92bffbd11657',
  savesCollectionId: '65b2c195c9a0090589c2',
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
