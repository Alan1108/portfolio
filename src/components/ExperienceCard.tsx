import { Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Experience } from "../models/Experience";

interface IExperienceCardProps {
  experiences: Experience[];
}

export const ExperienceCard = ({ experiences }: IExperienceCardProps) => {
  return (
    <Timeline position="alternate">
      {experiences.map((experience) => (
        <TimelineItem key={experience.company}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              {experience.company}
            </Typography>
            <Typography variant="subtitle1">{experience.position}</Typography>
            <Typography variant="body2">
              {experience.startDate} - {experience.endDate}
            </Typography>
            <Timeline position="right">
              {experience.projects.map((project) => (
                <TimelineItem key={project.title}>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="subtitle2">{project.title}</Typography>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
