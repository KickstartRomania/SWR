# Deploy Next.js To Cyber_Folks VPS

This guide is for deploying this repository as a **live Next.js app** on a **Cyber_Folks VPS**.

It assumes:

- the code is stored on GitHub
- the domain is currently registered elsewhere, such as HostGator
- you want to run the app with `next build` + `next start`
- you are using a Linux VPS, preferably **Ubuntu 24.04 LTS** or **Ubuntu 22.04 LTS**

This repo currently uses:

- `next 16`
- `react 19`
- `npm`
- `next/font/google`

## 1. Buy The Right Hosting

Use a **Cyber_Folks VPS**, not shared hosting.

A small VPS like this is a reasonable starting point for this project:

- `1 vCPU`
- `2 GB RAM`
- `30 GB SSD`

## 2. Prepare Before Deploy

You should have:

- a Cyber_Folks VPS with Ubuntu installed
- the server IP address
- SSH access to the server
- your GitHub repository URL
- the domain name you want to point to this app

If the repository is private, also prepare one of these:

- a GitHub personal access token
- an SSH deploy key

## 3. Point The Domain Later, Not First

Do **not** switch the domain before the app is working on the server.

Recommended order:

1. Set up the server
2. Deploy the app
3. Test with the server IP or temporary domain
4. Update DNS to point the real domain to the VPS
5. Enable SSL

## 4. Connect To The VPS

From your computer:

```bash
ssh root@YOUR_SERVER_IP
```

If Cyber_Folks gave you another user instead of `root`, use that user.

## 5. Update The Server

```bash
apt update
apt upgrade -y
```

## 6. Install Node.js

Use Node.js 20 or newer. Node 20 LTS is a safe choice.

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
node -v
npm -v
```

## 7. Install Useful Server Packages

```bash
apt install -y git nginx ufw
npm install -g pm2
```

## 8. Clone The Repository

Move to a good location for app code:

```bash
mkdir -p /var/www
cd /var/www
git clone YOUR_GITHUB_REPO_URL startupweekendromania
cd startupweekendromania
```

If the repo is private, use your GitHub auth method when cloning.

## 9. Install Dependencies

```bash
npm install
```

## 10. Create Environment Variables

This repo uses `NEXT_PUBLIC_SITE_URL`.

Create the production env file:

```bash
nano .env.production
```

Add:

```env
NEXT_PUBLIC_SITE_URL=https://startupweekendromania.com
```

If you want `www` as the main domain instead, use:

```env
NEXT_PUBLIC_SITE_URL=https://www.startupweekendromania.com
```

Save the file.

## 11. Build The App

```bash
npm run build
```

Important:

- this project uses `next/font/google`
- the server needs outbound internet access during build so Next.js can fetch font files

If the build fails only on Google Fonts, switch the fonts to local files later.

## 12. Test The App Locally On The Server

Start it once:

```bash
npm run start
```

By default, Next.js runs on port `3000`.

Open this in a browser:

```text
http://YOUR_SERVER_IP:3000
```

When you confirm it loads, stop it with `Ctrl + C`.

## 13. Run The App With PM2

Start the app in the background:

```bash
cd /var/www/startupweekendromania
pm2 start npm --name startupweekendromania -- start
pm2 status
```

Save PM2 so the app restarts after reboot:

```bash
pm2 save
pm2 startup
```

PM2 will print one more command. Run that command too.

Useful PM2 commands:

```bash
pm2 logs startupweekendromania
pm2 restart startupweekendromania
pm2 stop startupweekendromania
pm2 delete startupweekendromania
```

## 14. Configure Nginx

Create a new Nginx site config:

```bash
nano /etc/nginx/sites-available/startupweekendromania
```

Paste this config:

```nginx
server {
    listen 80;
    server_name startupweekendromania.com www.startupweekendromania.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable it:

```bash
ln -s /etc/nginx/sites-available/startupweekendromania /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

If there is a default Nginx site blocking this domain, remove it:

```bash
rm /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
```

## 15. Open The Firewall

If `ufw` is active:

```bash
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable
ufw status
```

## 16. Point The Domain To The VPS

At your domain registrar or DNS provider, point the domain to the VPS IP.

Typical records:

- `A` record for `@` -> `YOUR_SERVER_IP`
- `A` record for `www` -> `YOUR_SERVER_IP`

If you already use email on the domain:

- do **not** delete existing mail records by accident
- keep `MX`, `SPF`, `DKIM`, and `DMARC` if they are already in use

Wait for DNS propagation. This often takes a few minutes to a few hours, but sometimes up to 48 hours.

## 17. Install SSL

After the domain points to the server, install Let’s Encrypt:

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d startupweekendromania.com -d www.startupweekendromania.com
```

Test renewal:

```bash
certbot renew --dry-run
```

## 18. Deploy Updates Later

Whenever you push new code and want to redeploy:

```bash
cd /var/www/startupweekendromania
git pull
npm install
npm run build
pm2 restart startupweekendromania
```

If dependencies did not change, `npm install` is still safe, but optional.

## 19. Recommended First Deployment Checklist

Use this order:

1. Buy and activate the VPS
2. Install Ubuntu updates
3. Install Node.js, Git, Nginx, PM2
4. Clone the repo
5. Create `.env.production`
6. Run `npm install`
7. Run `npm run build`
8. Run `pm2 start npm --name startupweekendromania -- start`
9. Configure Nginx
10. Point DNS to the VPS IP
11. Install SSL with Certbot
12. Verify the live domain

## 20. Troubleshooting

### Build fails on Google Fonts

This repo uses `next/font/google`. If the server cannot fetch fonts during build:

- make sure the server has outbound internet access
- or replace Google fonts with locally hosted fonts

### App works on port 3000 but not on the domain

Usually one of these:

- DNS is not pointing to the VPS yet
- Nginx config is wrong
- firewall is blocking traffic
- SSL was installed before DNS finished propagating

### Nginx test fails

Run:

```bash
nginx -t
```

Read the line with the error, fix it, then reload:

```bash
systemctl reload nginx
```

### PM2 app is down

Check:

```bash
pm2 status
pm2 logs startupweekendromania
```

## 21. Notes For This Repository

Current repo observations:

- it is a Next.js app with App Router under `src/app`
- it appears suitable for live Node.js hosting on a VPS
- it does not appear to require a database for basic operation
- it uses `NEXT_PUBLIC_SITE_URL`, which should be set correctly in production

## 22. Optional Improvements

After the first deploy, you may want to add:

- a non-root deploy user
- GitHub Actions deployment
- automatic PM2 restart after pull/build
- Nginx caching rules
- server monitoring
- uptime checks

## 23. Rollback Strategy

Before major updates:

```bash
cd /var/www/startupweekendromania
git rev-parse HEAD
```

If a new deploy fails, roll back:

```bash
git log --oneline -n 5
git checkout PREVIOUS_COMMIT_SHA
npm install
npm run build
pm2 restart startupweekendromania
```

Do not use rollback commands unless you are sure which commit you want.
