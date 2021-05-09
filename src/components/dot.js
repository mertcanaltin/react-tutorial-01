import { useEffect } from "react";

export default function Dot(props) {
  useEffect(() => {
    console.log("Dot componenti çalıştı");
  });

  return (
    <strong
      style={{
        fontSize: props.fontSize,
        color: props.color,
      }}
    >
      .
    </strong>
  );
}
