import React from "react";
import BottomCard from "./BottomCard";

function BottomContent() {
  return (
    <div>
      <section className="py-0">
        <div className="container">
          <div className="row g-4">{/*left and right card*/}</div>
        </div>
      </section>
      <BottomCard />
    </div>
  );
}

export default BottomContent;
