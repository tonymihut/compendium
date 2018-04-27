# SSH  
### Generate SSH key
`$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`  
### Add SSH key  
`$ eval "$(ssh-agent -s)"`  
`$ ssh-add ../path/to/key.rsa`  
*add flag -K to the ssh-add to store it on the keychain (macOS)*  

# GIT
### Stash
`$ git stash` to stash changes  
`$ git apply` to apply the last stash  
`$ git stash list` to see the list of stashes  
`$ git apply stash@{_index_nr_here_}` to apply a particular stash, you can see the index number from the list command
