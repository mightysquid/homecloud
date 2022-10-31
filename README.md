# homecloud
a way to create a cloud at home

# Quickstart
1. install : npm i
2. launch dev : npm run dev (wait for angular compilation => can take a while)

# Steps
1. get a computer for your cloud
2. get a very cheap vps (between 1€ to 3€ / month)
   1. oracle can be free : https://www.youtube.com/watch?v=NKc3k7xceT8
3. if you have a password on your vps you will need to create a rsa key first, if you already have the rsa key you can go to step 4 else set up a rsa key with this :  https://www.cyberciti.biz/faq/how-to-set-up-ssh-keys-on-linux-unix/ /!\ DO NOT DEACTIVATE PASSWORD IF ANOTHER WAY TO CONNECT ISNT SET AND WORKING
4. set up the vps for connection through ssh on your local cloud
* open the ssh config file located in C:\Users\USERNAME\.ssh>config (windows, it will be hidden, so open it from console or create if it doesnt exist)
* add this block with good informations :
Host vps-alias (can be what you want to use , for example vps)
HostName XXX.XXX.XXX.XXX (IP of the VPS)
Port 22
User username_for_this_key_on_vps
IdentityFile ~/.ssh/keys/vpsname_id_rsa (location of your id_rsa file)
* save the config file
* now typing in cmd "ssh vps" (if alias is vps) should connect to the vps
* if so you can deactivate password for this username only : https://www.cyberciti.biz/faq/how-to-disable-ssh-password-login-on-linux/ 
5. install nginx : https://ubuntu.com/tutorials/install-and-configure-nginx#2-installing-nginx 
6. configure nginx :
* create a file in /etc/nginx/sites-enabled/ named with your website domain name "example.com" or "cloud"
* add this server block :
server {
        listen 80;
        server_name yourdomain.com;
        location / {
                proxy_pass http://localhost:8888; 
                proxy_redirect http://localhost:8888/ /;
                proxy_pass_request_headers on;
                proxy_set_header X-Real-IP $remote_addr; # hide this
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; # hide this too
                proxy_set_header Host $host;
        }

}
Here 8888 will be the port forwarded on your vps.
change the servername for your domain (point the DNS on your server IP)
save the nginx config file
reload nginx : sudo systemctl restart nginx

now you can finally create a ssh tunnel between your localhost:port (1337 for example) and your vps having a ssh alias set to vps-alias using :
ssh -R 8888:localhost:1337 vps-alias

7. launch the cloud in local using port 1337
8. now you can access the cloud launched locally from yourdomain.com in your browser. (or any server launched locally)
9. you should use certbot to configure https certificate
10. you can then install on the vps a firewall

# TODOS
1. create a nwjs app with dev & prod environments & using angular
2. create a function to detect local ssh config files, list them and edit them
3. add possibility to create a vps with either connection by password or connection via rsa key
4. add possibility to connect to this vps
5. add possibility to create a new config bound to a vps
6. list vps 
7. add possibility of auto set up a new rsa key, deactivate password connection etc...
8. install nginx on the vps
9. config nginx for a specific port on vps
10. handle domain name
11. handle https set up with certbot (set automatic renew)
12. handle installing and launching a cloud app (start with next cloud)
13. create a daemon that will check the constant ssh connection
14. create a report for downtimes, uptimes and create the component
15. change nginx 502 page for something else (timeout, 404, website not found etc...?)
16. an already built release
