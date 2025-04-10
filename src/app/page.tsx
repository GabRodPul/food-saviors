import MainPage from "./MainPage/page";

import { HydrateClient } from "@food-saviors/trpc/server";

export default async function HomePage() {
  return (
    <HydrateClient>
      <main>
        <MainPage />
      </main>
    </HydrateClient>
  );
}
//className="flex min-h-screen flex-col justify-center"

/*
=====================================================================================
NEED TO MAKE THE BOTTOM (RESTAURANTS, BAKERIES AND SUPERMARKETS IN TO A COMPONENT)
=====================================================================================
*/

/*
=====================================================================================
NEED TO PUT THE FOOTER AND NAV TO ALMOST EVERYPAGE - AND CHANGE SOME COMPONENTS FROM COMPO.... TO PAGES
=====================================================================================
*/

/*
=================================================
PUT ALL THE DATA IN IT SO THAT WE HAVE EVERYTHING
=================================================
*/

/*
====================================================================================================================================
MAKE A PRESENTTATION, FANNAR - TALK ABOUT THE PRODUCT, GABRIELAND CORNELIS TALK ABOUT SOME BACKEND CODE, RAFAL TAKES CARE OF THE Q&A
====================================================================================================================================
*/

/*
==============================================
CHANGE ALL THE IMG TO IMAGES(NEXTJS COMPONENT)
==============================================
*/
