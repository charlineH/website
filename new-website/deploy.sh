#!/bin/bash

#Ask for username
echo Username:
read username

#ask for password
echo Password:
read password

ng build --prod

ssh $username@
