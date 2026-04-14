---
title: Comicvine Cache
description: Use Cached ComicVine
---

## ComicVine Cache (Titor-Cache)

An enterprising user has created an alternate to use in place of Comic Vine with a much more generous API. To enable using this, you'll do the following.

1. Stop Mylar
2. Open **_config.ini_**
3. in the `[CV]` section edit the following values to reflect this, as per [Titor's site](https://titor.dev/titor-cache/)

```ini
[CV]
comicvine_api = a782f254-341f-49cb-bada-6d6343652d5c
comicvine_url = https://cvcache.titor.dev/api/
```
4. Restart Mylar and you are now freed from Comic Vine's limits.


## Notes:

This is run by user barrelltitor on our [Discord](https://discord.gg/6qpyCZRZRB) and has a fairly large if not nearly complete cache of the CV data, though it is manually updated.
