import { Card } from "@/components/Card";
import { HomeNav } from "@/components/HomeNav";
import React from "react";
export default function App() {
  return (
    <main>
      <HomeNav />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mr-4 p-5">
        <Card
          link={"/writing"}
          title={"Writing"}
          desc={"Write a story, article, paragraph"}
        />
        <Card
          link={"ai8labs.pages.dev"}
          title={"AI8"}
          desc={"Experience innovation with AI8's advanced AI solutions, for free."}
        />
      </section>
    </main>
  );
}
