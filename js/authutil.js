var clientId = '917104207092-41kqrs58v0ubkp5e33ugpepqe6nmi3up.apps.googleusercontent.com';
var apiKey = 'AIzaSyC33kx1_Gbx9ZzQsSuZJn1_jKqHwad9Y4w';
var scopes = 'https://www.googleapis.com/auth/analytics.readonly https://www.googleapis.com/auth/analytics.manage.users.readonly https://www.googleapis.com/auth/analytics.edit';

function handleClientLoad() {
  var initButton = document.getElementById('init');
  initButton.onclick = function() {
    gapi.client.setApiKey(apiKey);
    window.setTimeout(checkAuth, 1);
  }
}

function checkAuth() {
  gapi.auth.authorize({
    client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
}

function handleAuthResult(authResult) {
  if (authResult) {
    gapi.client.load('analytics', 'v3', spamFilter.initialize);
  } else {
    spamFilter.showError({
      'reason' : {
        'result' : {
          'error' : {
            'message' : 'Authentication failed.'
          }
        }
      }
    });
  }
}
