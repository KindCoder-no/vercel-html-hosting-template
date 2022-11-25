# Vercel Html Hosting Template
This is a repository template to host static html/css webpages on https://vercel.app

Jump to:

[Setup](https://github.com/KindCoder-no/vercel-html-hosting-template#setup)

[Adding custom content](https://github.com/KindCoder-no/vercel-html-hosting-template#adding-custom-content)

## Setup
Start by cloning this repo (or use as a template)

![image](https://user-images.githubusercontent.com/40148297/203991701-17d30b2c-73be-4408-902f-3b612e954b5c.png)

Go to https://vercel.com and login with your github account

Create a new project and import from github

![image](https://user-images.githubusercontent.com/40148297/203991979-3eba8ce7-6da4-4116-9f0a-42c5dd1d01b1.png)

![image](https://user-images.githubusercontent.com/40148297/203992169-fc2f9ff2-389e-41ab-9fa5-1b2b5b9be678.png)

Select your github repo and press import

![image](https://user-images.githubusercontent.com/40148297/203992265-c65959d7-efa6-4886-8474-be4f0254430c.png)

Under project settings you need to customize your build settings

Build command: ``npm run start``

Install command: ``npm install``

![image](https://user-images.githubusercontent.com/40148297/203992539-9194ba85-416e-4e71-9b6a-e9c237b913b6.png)

After you have setup build setting press deploy and vercel should deploy the project by itself

If you have setup everything correctly you should see a page looking somewhat like this:

![image](https://user-images.githubusercontent.com/40148297/203992894-e21b2f79-9e3c-4c27-84bb-48e53d5289cd.png)

You should get a domain from vercel. Mine became: https://vercel-html-hosting-template.vercel.app/


## Adding custom content
After setting up your deployment, you can add you own html/css/javascript files in the public folder on github. And Vercel should deploy the changes automatically
