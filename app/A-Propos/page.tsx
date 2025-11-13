// import IconsSocial from "@/components/folio/IconsSocial";

import CardAbout from "@/components/folio/card/CardAbout";
import TiltWrapper from "@/components/folio/TiltWrapper";

export default function A_Propos() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <TiltWrapper>
        <CardAbout />
      </TiltWrapper>
    </div>
  );
}
