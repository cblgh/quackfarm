# QuackFarm

who gives a quack

## Instructons

Start a server on port `8888`
```bash
node index.js
```

Join the farm
```bash
node client.js <url>
```

Issue a POST request to `<url>/quack` to make everyone on the farm quack e.g.
```bash
curl -X POST <url>/quack
```

**Happy quacking!**
