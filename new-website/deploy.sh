#!/bin/bash

ng build --prod

scp -r dist/website/ humoefrrxz@ssh.cluster023.hosting.ovh.net:www-tmp/

ssh humoefrrxz@ssh.cluster023.hosting.ovh.net << 'ENDSSH'

rm -rf www-old

mv www www-old
mv www-tmp www

ENDSSH

