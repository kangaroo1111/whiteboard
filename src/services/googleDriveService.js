const CLIENT_ID = 826328240991-h4hvk14s96b9v6tp08d6pqeu0d856ns4.apps.googleusercontent.com;
const API_KEY = AIzaSyA2CrEYdUKsh_jcHv1wi530EJw5f65yarg;
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/drive.file';

const handleClientLoad = () => {
  gapi.load('client:auth2', initClient);
};

const initClient = () => {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(() => {
    // Authentication succeeded
  }, (error) => {
    console.error('Error initializing Google API client:', error);
  });
};

const signIn = () => {
  gapi.auth2.getAuthInstance().signIn();
};

const signOut = () => {
  gapi.auth2.getAuthInstance().signOut();
};

const isSignedIn = () => {
  return gapi.auth2.getAuthInstance().isSignedIn.get();
};

const createFile = (fileName, content) => {
  return gapi.client.drive.files.create({
    resource: {
      name: fileName,
      mimeType: 'application/json'
    },
    media: {
      mimeType: 'application/json',
      body: JSON.stringify(content)
    }
  });
};

const getFile = (fileId) => {
  return gapi.client.drive.files.get({
    fileId: fileId,
    alt: 'media'
  });
};

export { handleClientLoad, signIn, signOut, isSignedIn, createFile, getFile };
