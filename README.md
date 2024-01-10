```
npm install
npm run dev
```

```
npm run deploy
```

Get IdToken

```
curl -k 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=api-key' -H 'Content-Type: application/json' --data-binary '{"email":"test@example.com","password":"password","returnSecureToken":true}'
```
