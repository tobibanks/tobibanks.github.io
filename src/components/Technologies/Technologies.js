import React from "react";
import {
  DiAngularSimple,
  DiCss3,
  DiFirebase,
  DiHtml5,
  DiJavascript,
  DiReact,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
  <br/>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a wide range of technologies in the past in Front-End
      and Design
    </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML5
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
      <DiHtml5 size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          HTML5
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
     <DiJavascript size="3rem" />
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with <br />
        CSS3
      </ListParagraph>
    </ListContainer>
  </ListItem>

  <ListItem>
   <DiJavascript size="3rem" />
  <ListContainer>
    <ListTitle>Front-End</ListTitle>
    <ListParagraph>
      Experience with <br />
      Javascript
    </ListParagraph>
  </ListContainer>
</ListItem>

<ListItem>
<DiReact size="3rem" />
<ListContainer>
  <ListTitle>Front-End</ListTitle>
  <ListParagraph>
    Experience with <br />
    React
  </ListParagraph>
</ListContainer>
</ListItem>

<ListItem>
<DiAngularSimple size="3rem" />
<ListContainer>
  <ListTitle>Front-End</ListTitle>
  <ListParagraph>
    Experience with <br />
    Angular
  </ListParagraph>
</ListContainer>
</ListItem>
    </List>
  </Section>
);

export default Technologies;
