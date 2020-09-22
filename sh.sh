# Utils

## Disk Usage
### Recursively get disk info for a directory
### -h -> human readable, 150MB vs 150000KB
### -s -> summary, show directory results leaving out each file individual file report
du -hs <folder>

## Search by text match
### Find <query> in <file>
cat <file> | grep <query>
### Find <query> within file names
ls . | grep <query>
### or another directory at <path>
ls <directory> | grep <query>

## Clipboard
### Copy file contents to clipboard
pbcopy < <file>

## Processes
### Show running processes 
top

## Misc
### Display last part of a file
### -f -> watch file
### -n -> number of lines to show
tail