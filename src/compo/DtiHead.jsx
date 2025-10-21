import React from "react";

const DtiHead = (props) => {
  const { title, detall } = props;
  return (
    <div>
      <h1 className="text-center mt-20 text-3xl font-bold">{title}</h1>
      <h3 className="text-center mt-5 text-xl">{detall}</h3>
      <br />
    </div>
  );
};

export default DtiHead;
