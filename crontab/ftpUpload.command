#!/bin/bash
PATH=/usr/local/bin:/usr/local/sbin:~/bin:/usr/bin:/bin:/usr/sbin:/sbin


img_dir="Your image folder path"
# ex: /Users/deann_huang/Work/Newsletter/d1-assets/
img_file="Eheader.png"

edm_dir="your e-newsletter folder path"
# ex:/Users/deann_huang/Work/Newsletter/EDMgenerator/output/
edm_file="index.html"

hostname="jp-publishweb.jp.trendnet.org"
sdir="/Production/iotsec_us/Content/edm"
username="your name"
# ex: trend/john_doer
password="your passward"


ftp -in $hostname <<EOF
user $username $password

binary
cd $sdir
lcd $img_dir
put $img_file
lcd $edm_dir
put $edm_file
quit
EOF