# QuackFarm

who gives a quack

![](https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fpixabay.com%2Fstatic%2Fuploads%2Fphoto%2F2013%2F10%2F04%2F18%2F42%2Fduck-190715_640.jpg&f=1)

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
