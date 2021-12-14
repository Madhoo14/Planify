import React from "react";
import styled from "styled-components";

const GoalSetting = () => {
  return (
    <GoalSettingContainer>
      <Para>
        <Para>
          <Header2>A quick guide to set your personal goals</Header2>
          <UnorderedList>
            <List>
              First you create your "big picture" of what you want to do with
              your life (or over, say, the next 10 years), and identify the
              large-scale goals that you want to achieve.
            </List>
            <List>
              Then, you break these down into the smaller and smaller targets
              that you must hit to reach your lifetime goals.
            </List>
            <List>
              Finally, once you have your plan, you start working on it to
              achieve these goals.
            </List>
          </UnorderedList>
        </Para>
        SMART Goals A useful way of making goals more powerful is to use the
        SMART mnemonic. While there are plenty of variants (some of which we've
        included in parenthesis), SMART usually stands for:
        <Para> S – Specific (or Significant).</Para>{" "}
        <Para> M – Measurable (or Meaningful). </Para>A – Attainable (or
        Action-Oriented). <Para>R – Relevant (or Rewarding). </Para>
        <Para>T – Time-bound (or Trackable).</Para>
        <Para>
          {" "}
          For example, instead of having "to sail around the world" as a goal,
          it's more powerful to use the SMART goal "To have completed my trip
          around the world by December 31, 2027." Obviously, this will only be
          attainable if a lot of preparation has been completed beforehand!
        </Para>
        <Cite>https://www.mindtools.com/page6.html</Cite>
      </Para>
    </GoalSettingContainer>
  );
};
const GoalSettingContainer = styled.div`
  width: 50%;
  height: 800px;
  margin-top: 50px;
  background-color: rgb(70, 63, 58, 0.2);
  border-radius: 10px;
  flex-grow: 0.5;
  align-items: center;
  text-align: left;
  color: var(--coffee-brown);
`;
const Para = styled.p`
  font-size: 30px;
`;
const UnorderedList = styled.ul``;
const List = styled.li`
  color: var(--coffee-brown);
`;
const Cite = styled.cite`
  font-size: 24px;
  color: #6b705c;
  font-weight: bold;
`;
const Header2 = styled.h2`
  text-decoration-color: var(--graceful-grey);
  align-items: center;
  font-size: 36px;
`;
export default GoalSetting;
