---
title: Folder/File Rename Formats
---
### Folder Format
- If left blank or as the default value of `ComicName-(Year)`, it will create subdirectories in the format `ComicName-(Year)`
- You can do multiple directory hiearchies as well - so you could do $Publisher/$Series/$Year to have it setup like DC Comics/Wildman/2011 (as an example)
- Folder Format **is** used on every Add Series / Refresh Series request
  - Enabling `Renaming` has no bearing on this, so make sure if you're not using the default, that it's what you want.

### File Format
- To enable renaming for files, you need to enable the Rename Files option, otherwise, Mylar will use the original file and not rename at all
  - This includes replacing spaces, lowercasing and zero suppression (all renaming features)

## Renaming files and folders
You can specify how Mylar renames files during post-processing / import in addition to the folders.
