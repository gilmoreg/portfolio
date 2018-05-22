My first **React/Redux** project. I never expected React to be so much fun! The major challenge on this project was struggling with the **Steam API**. It is a poor quality API: it is highly fragmented, outdated, and inadequately documented. It has multiple endpoints using different formats with no consistent return pattern. Although I think this project was successful in the end, I had to scrap many plans to make the scoring more complex and interesting due to limitations of the API.

Since the Steam API does not support **CORS**, I had to create a backend proxy. Since I love to write APIs so much, I was grateful for the chance to do so. Originally I built a Node/Express server to handle the job, but later took this as an opportunity to learn **Google Cloud Functions** and converted my endpoints over.

On the front end, dealing with the Steam APIs rate limit meant that I had to throttle my network calls. I used **lodash** **debounce** to implement a custom type-ahead feature that tells you when you have a valid Steam ID as you type.

My struggles with the Steam API certainly inspired me to write better APIs myself. It was a major factor in pushing me to try out **GraphQL** on my next project.
