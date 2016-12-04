Hivatalos doksi:
https://firebase.google.com/docs/database/web/start

1. A Database DATA fülén adj hozzá két elemet (a Name-nek meg kell egyeznie, a Value mindegy)
	Name "greetings"	Value: <whatever>
	Name "name"			Value: <whatever>
2. A RULES fülön a 3-4. sort módosítsd erre:
	".read": true,
	".write": true
3. Az upload.js 3. sorába másold be a saját APIkey-edet.
	Az "Add Firebase to your web app" gombra kattintva kapod meg az APIkey-t.
4. Nyisd meg böngészővel az index.html-t.

+. Ha módosítod a Database-ben lévő elemek értékeit akkor realtime változik a weblapon lévő érték is.
