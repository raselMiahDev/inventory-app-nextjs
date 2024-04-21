import Image from "next/image";
import bgImage from "../../../public/image/under.png";
const UnderConstraction = (props) => {
  return (
    <div>
      <h>{props.title}</h>
      <Image
        src={bgImage}
        wei
        alt="image"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default UnderConstraction;
