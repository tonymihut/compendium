# Utils

## Disk Usage
### Recursively get disk info for a directory
### -h -> human readable, 150MB vs 150000KB
### -s -> summary, show directory results leaving out each file individual file report
du -hs <folder>
### Filesystem disk usage
### -h -> human readable, 150MB vs 150000KB
df -h

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

## Memory
### Show system memory
### -m -> display in mebibytes
free -m

## Misc
### Display last part of a file
### -f -> watch file
### -n -> number of lines to show
tail

## SSH
### Generate SSH key
ssh-keygen -t rsa -b 4096 -C "example@email.com"

### Add the jey to agent
eval `ssh-agent`
ssh-add ../path/to/key.rsa # adding -K flag will store it on the Apple keychain

### SCP
scp <file> <user>@<ip>:/<targetDir> # copy <file. to <targetDir> as <user> on machine at <ip>
scp [options] <file> <user>@<ip>:/<targetDir> # copy <file. to <targetDir> as <user> on machine at <ip>, using [options] (-r recurive, * for entire pwd content, etc)

## Network
### List processes running on <PORT>

lsof -i:<PORT>
