import React from "react";
import {
  ProcessContainer,
  ProcessDiv,
  ProcessText,
  ProcessImage,
  ProcessHeader,
  ProcessH1,
  ProcessBody,
  ProcessCard,
} from "./ProcessElement";
import hand from "../../assets/images/hand.svg";
import { Chrono } from "react-chrono";
import { Items } from "./TimeLine";

function ProcessBord() {
  return (
    <ProcessContainer>
      <ProcessDiv>
        <ProcessImage>
          <img src={hand} alt="icon" />
        </ProcessImage>

        <ProcessText>
          <ProcessHeader>
            The <span>NGENI</span> Web3 <span>Blockchain</span> Project{" "}
            <span> onboarding </span> process
          </ProcessHeader>
          <ProcessH1>
            Our onboarding and project kick-off process is carefully designed to
            capture all critical aspects of the new project fully and
            adequately. This is done to make sure that both parties are on the
            same page regarding deliverables and the final project builds. It is
            straightforward and detail-oriented.
          </ProcessH1>
        </ProcessText>
        <ProcessBody>
          <ProcessCard>
            <Chrono
              items={Items}
              slideshow="true"
              itemWidth="350"
              useReadMore="true"
              mode="VERTICAL_ALTERNATING"
              scrollable={{ scrollbar: true }}
              theme={{
                primary: "#EC5646",
                secondary: "white",
                cardBgColor: "#222222",
                cardForeColor: "white",
                titleColor: "#EC5646",
              }}
            />
          </ProcessCard>
        </ProcessBody>
      </ProcessDiv>
    </ProcessContainer>
  );
}

export default ProcessBord;
