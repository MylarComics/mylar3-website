---
title: Installation
description: github or source
---
# Installation methods

***

<center>Besides the <a href="#base_requirements">base requirements</a>, these methods can optionally depend on <a href="https://www.git-scm.com">git</a> and/or using a <a href="https://docs.python.org/3/library/venv.html">virtualenv</a></center>

<center>If you have multiple python applications on your system, using a virtualenv is **highly** recommended.</center>

***

## Git Installation
1. Open up a command prompt/shell.
1. If the directory does not exist in the location where you want the program files to be located, create it.
1. Clone the chosen repository into the given directory once you've changed into the directory:
    * stable - ```git clone -b stable git@github.com:MylarComics/mylar3.git```
    * development - ```git clone -b nightly git@github.com:MylarComics/mylar3.git```
1. See [install requirements](source#installation-requirements)

***

## Source Installation (Unsupported)
This is a legacy install method that we don't recommend as it makes it harder to manage cleaning up files with upgrades.  If you really must follow this method, you're on your own for solving upgrade problems.

1. Download the zip of the desired source branch (stable / nightly):
    * [stable](https://github.com/MylarComics/mylar3/archive/refs/heads/stable.zip)
    * [development](https://github.com/Mylarcomics/mylar3/archive/refs/heads/nightly.zip)
1. Unpack in the directory of your choice
1. See [install requirements](source#installation-requirements)

***

## Installation requirements

From a command prompt/shell, change directory into the mylar installation.

Install the requirements with pip ```pip3 install -r requirements.txt```

REMINDER: If you upgrade your Python version and are not managing a virtualenv to keep it static for mylar, you may need to reinstall requirements.

**WINDOWS USERS** - If the above fails, run ```py -m pip install -r requirements.txt```.

## Done. What now?

See the [starting](running) instructions!
