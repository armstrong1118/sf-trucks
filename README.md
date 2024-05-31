This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Excersice Specific
I made the decision to use NextJS for this exercise as it is something that I only started to explore very recently and I would still consider outside of my comfort zone. Taking this approach was beneficial in helping my understanding of the framework, but also resulted in some concessions for the sake of the time alloted. 

If I were to continue development on this project, I would make the following updates:
- Update the random truck button
    - At the moment it only updates to a different random ID after a refresh, instead of on navigation back and forth
- Clean the data
    - I would liked to have taken the data - specifically the types of food on the details page and cleaned up the copy to be more readable
- Add geolocation
    - It would have been nice to use the location data to allow the user to see where the trucks were operating 
- Add filtering
    - The main list of the food trucks would have benefited from having additional sort or filter options
- Tests
    - The addition of tests would be a requirement for if this project were to be deployed to any kind of production environment