import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("componenete small");
  return <small>{value}</small>;
});
