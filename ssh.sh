# Generate SSH key
ssh-keygen -t rsa -b 4096 -C "example@email.com"

# Add the jey to agent
eval "$(ssh-agent -s)"
ssh-add ../path/to/key.rsa # adding -K flag will store it on the Apple keychain
