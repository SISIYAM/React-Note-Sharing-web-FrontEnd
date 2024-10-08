import React, { useEffect } from "react";
import Universities from "../components/Universities";
import TopContent from "../components/home/TopContent";
import BottomContent from "../components/home/BottomContent";

function Home() {
  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
  }, []);
  const topContentData = {
    title: `Elevate Your Learning: Find and Download Semester PDFs from
    BAAU and Other Universities`,
    description: `Get inspired and explore new opportunities. Access semester PDFs
    from BAAU and other universities. Dive into aeronautical
    engineering, avionics, and more. All resources are developed and
    presented by the Aeronautical Engineering Avionics 3rd Batch.`,
    imageUrl: "/assets/images/memories/photo_6269336802917727427_y.jpg",
    ytLink: "https://youtu.be/o0lcpDvPoP0?si=vwK9SWKaaqSyV6p8",
  };
  return (
    <div>
      <TopContent
        title={topContentData.title}
        description={topContentData.description}
        imageUrl={topContentData.imageUrl}
        ytLink={topContentData.ytLink}
      />
      <Universities />
      <BottomContent />
    </div>
  );
}

export default Home;
