import React from "react";
import {Composition, Folder, Still} from "remotion";
import {AgentCompanyShowcase} from "./AgentCompanyShowcase";
import {CapturedAppShowcase} from "./CapturedAppShowcase";
import {
  AgentCompanyShowcaseSchema,
  agentCompanyShowcaseDefaultProps,
} from "./data/agentCompanyShowcase";
import {
  CapturedAppShowcaseCompositionSchema,
  capturedAppShowcaseCompositionDefaultProps,
} from "./data/capturedAppShowcase";
import {skillSprintCoachShowcaseDefaultProps} from "./data/skillSprintCoachShowcase";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="AgentCompany">
        <Composition
          id="AgentCompanyShowcase"
          component={AgentCompanyShowcase}
          durationInFrames={900}
          fps={30}
          width={1280}
          height={720}
          defaultProps={agentCompanyShowcaseDefaultProps}
          schema={AgentCompanyShowcaseSchema}
        />
        <Still
          id="AgentCompanyPoster"
          component={AgentCompanyShowcase}
          width={1280}
          height={720}
          defaultProps={agentCompanyShowcaseDefaultProps}
          schema={AgentCompanyShowcaseSchema}
        />
        <Composition
          id="SkillSprintCoachShowcase"
          component={AgentCompanyShowcase}
          durationInFrames={900}
          fps={30}
          width={1280}
          height={720}
          defaultProps={skillSprintCoachShowcaseDefaultProps}
          schema={AgentCompanyShowcaseSchema}
        />
        <Still
          id="SkillSprintCoachPoster"
          component={AgentCompanyShowcase}
          width={1280}
          height={720}
          defaultProps={skillSprintCoachShowcaseDefaultProps}
          schema={AgentCompanyShowcaseSchema}
        />
        <Composition
          id="CapturedAppShowcase"
          component={CapturedAppShowcase}
          durationInFrames={780}
          fps={30}
          width={1280}
          height={720}
          defaultProps={capturedAppShowcaseCompositionDefaultProps}
          schema={CapturedAppShowcaseCompositionSchema}
        />
        <Still
          id="CapturedAppPoster"
          component={CapturedAppShowcase}
          width={1280}
          height={720}
          defaultProps={capturedAppShowcaseCompositionDefaultProps}
          schema={CapturedAppShowcaseCompositionSchema}
        />
      </Folder>
    </>
  );
};
