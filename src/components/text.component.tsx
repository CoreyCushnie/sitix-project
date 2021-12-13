import React from "react";

export interface Props {
  fS?: String;
  fW?: Number;
  fC?: String;
  mR?: String;
  justify?: String;
  pos?: Number;
  t?: Number;
  r?: Number;
  b?: Number;
  l?: Number;
}

const Text: React.FC<Props> = ({
  fS,
  fW,
  pos,
  t,
  r,
  b,
  l,
  fC,
  mR,
  justify,
  ...props
}) => {
  return (
    <p
      className="tes"
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: 10,
        justifyContent: `${justify}`,
        padding: "5px",
        fontSize: `${fS}`,
        fontWeight: `${fW}`,
        color: `${fC}`,
        marginRight: `${mR}`,
        position: pos === 1 ? "absolute" : "sticky",
        top: `${t}px`,
        right: `${r}px`,
        bottom: `${b}px`,
        left: `${l}px`,
      }}
    >
      {props?.children}
    </p>
  );
};

export default Text;
