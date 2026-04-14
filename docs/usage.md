---
title: Basic Usage
---

From a command line/shell and in the location where Mylar is installed - typing `<python executable> Mylar.py --help` will give a list of available options, and/or removing the ``--help`` switch will start Mylar.

When Mylar is [first started](https://github.com/MylarComics/mylar3/wiki/Installation-Instructions#how-to-start-mylar), it will generate a default config.ini, a mylar.db and will listen on the local interface only. Here are the 2 most common setups:

- Mylar is on same machine as the browser you're going to use:
    - Browse to ``http://localhost:8090`` / ``http://127.0.0.1:8090``
- Mylar is on a different machine than the browser you're going to use:
    - Start Mylar up, then shut it down (so that the config.ini is generated).
    - edit the config.ini (located in the main directory of the mylar installation).
    - locate the field ``http_host`` under the [Interface] heading within the config.ini
    - set the value to either ``0.0.0.0`` if you want Mylar to listen to all interfaces (including external), or the local IP address if you want any other local network devices to have access.
    - save the config, close it down. Then start up Mylar as per normal usage.
    - Browse to ``http://<mylar machine IP>:8090``
    - Note that if you are allowing Mylar to have external access (0.0.0.0), you should set a username/password within the configuration of Mylar to help ensure that no unauthorised access will take place.

## It's running - now what?
The 2 most important things you need prior to doing anything:
- add your ComicVine API Key
- set your Comic Location path

Both are set via the gears icon (configuration settings) located in the upper right of the page:

_**ComicVine API Key**_

* Set the **ComicVine (CV) API Key** on the _2nd_ tab of the _Configuration page_ (Web Interface). Make sure that there are no spaces at the beginning and end, as well as removing the word None if it's present prior to entering the key. Without the CV API Key, Mylar cannot search/add/update series, so it's kind of important.


_**Comic Location path**_

* Just beneath that is the **Comic Location** field. This is the location where you want Mylar to start storing comics (ie. the root) - when adding series, post-processing issues, metatagging, renaming, etc this location is where Mylar will both look and send files (unless changed). Directories will be created beneath the path specified, in the format that is specified (this is called Folder Format and is on the Advanced Settings tab of the Configuration).

## Other Important Notes

* In order for Mylar to properly manage everything beneath this folder - it has to have complete access to the folder/sub-folders. In Linux terms, that's a ``7`` on the octet scale depending on if the user running mylar is the owner of the folder, or is part of the group. Windows permissions should be the typical ``+rwx``.

* If you set your Comic Location path to a remote location (ie. not on the same physical machine as Mylar), even if it's within your internal LAN, you need to ensure that the **Enforce Permissions** option is Disabled (Configuration tab / Web Interface). While some users can enable this and not have any problems due to their mounting setup, the vast majority of users using remote mounts will encounter problems creating directories, moving files, etc if this is enabled. Disabling it just means that your OS will handle the permissions which are usually enforced from the parent directory.

* __Docker Users__: Mylar can't read your docker-compose file, so it cannot know what your mounts points are without you telling it where they are. Which means you NEED to set the Comic Location path to whatever you mounted it as within the docker. Setting it in the just the compose file (or via CLI) and calling it a day will not work.
