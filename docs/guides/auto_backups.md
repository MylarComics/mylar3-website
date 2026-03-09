---
title: Automatic Backups
---
The ability to backup both the **_mylar.db_** and **_config.ini_** is present within Mylar. 

To use the backup feature, you need to enable the backup option either via the config.ini or directly via the CLI 

note docker users can only use the config.ini

***


**Configuration (config.ini):**

When editing your **_config.ini_** shut Mylar down first, as the application saves your current settings as a new **_config.ini_** on exit this will overwrite any changes.

* ``backup_location`` --> the full path location to where Mylar will backup the specified files. (default = _**backup**_ subdir in the root of the Mylar installation)
* ``backup_retention`` --> how many iterations of each file to retain before purging old ones. (default = 4 files)
* ``backup_on_start ( True / False )`` --> will backup the given files on each start of mylar if set to True. 

***
**CLI:**

You can also call the backup command from the command line instead of locking it in via the ini. 

- ``-b`` -->  enable backup on startup sequence.
   ( not specifiying a target for ``-b`` will backup both config.ini & mylar.db)
  - ``-b ini`` --> config.ini backups only
  - ``-b db``  --> mylar.db backups only
- Use of the switch will still use the config.ini options if any are set.

***
**HOW IT RUNS**

The backups are rolling backups based on the ``backup_retention`` value (default of 4 files).
 
Mylar will only keep the X most recent files of each in the ``backup_location`` if specified. (where X is ``backup_retention``)

Outside of enabling the ``backup_on_start`` option: 

* The backup of config.ini does not occur when the config settings are updated. 

* The backup of mylar.db will occur when db schema change is required or database data needs altering.

