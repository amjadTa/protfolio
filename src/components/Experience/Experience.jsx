import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdOutlineWork } from "react-icons/md";
import styled from "styled-components";
import { EXPERIENCE, EDUCATION } from 'data/experience';
import DynamicBoldString from 'utils/DynamicBoldString';

function Experience() {
    return (
        <Container id="experience">
            <VerticalTimeline lineColor="#fff">
                {EXPERIENCE.map((work, i) => {
                    return (<VerticalTimelineElement
                        key={i}
                        className="vertical-timeline-element--work"
                        date={work.date}
                        iconStyle={{ background: "#e9d35b", color: "#fff" }}
                        icon={<MdOutlineWork />}
                        contentStyle={{ background: '#01be96', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #01be96' }}
                    >
                        <TitleText className="vertical-timeline-element-title">{work.title} - <a href={work.url} target="_blank" rel="noopener noreferrer">{work.company}</a></TitleText>
                        {work.description.map((des, j) => {
                            return (
                                <DynamicBoldString key={j} text={des} />
                            )
                        })}
                    </VerticalTimelineElement>)
                })}
                {EDUCATION.map((school, i) => {
                    return (
                        <VerticalTimelineElement
                            key={i}
                            className="vertical-timeline-element--education"
                            date={school.date}
                            iconStyle={{ background: "#3e497a", color: "#fff" }}
                            icon={<MdSchool />}
                            contentStyle={{ background: '#01be96', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #01be96' }}
                        >
                            <TitleText className="vertical-timeline-element-title">{school.title} - {school.school}</TitleText>
                            {school.description.map((des, j) => {
                                return (
                                    <DynamicBoldString key={j} text={des} />
                                )
                            })}
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </Container>
    );
}

export default Experience;

const Container = styled.div``;

const TitleText = styled.h3`
`;