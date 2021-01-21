Steps to publish
- Make any changes to `dev` branch, do not touch `master` branch
- Run `npm run deploy` after making changes to `dev` (these changes do not have to necessarily be pushed to github)
- Go to github.com and open the repository of the website
- Add a file directly in github on the `master` branch called `CNAME`. Add your domain name (without `www` or `https`)
- Commit the changes to `CNAME`
- Refresh your website to see current changes (it may take several minutes to show up)