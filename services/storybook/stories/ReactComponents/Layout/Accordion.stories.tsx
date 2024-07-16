import "@manon/react-components-accordion/style.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@manon/react-components-accordion";
import React from "react";

import "@manon/react-components-layout/style.css";
import { Text, Heading } from "@manon/react-components-layout";

export default {
  title: "React Components/Accordion",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const AccordionStory = {
  render: () => (
    <Accordion defaultActiveItems={["목록1"]} style={{ width: "500px" }}>
      <AccordionItem itemName="목록1">
        <AccordionButton>
          <Heading color="gray" fontSize="lg">
            목록 1
          </Heading>
        </AccordionButton>
        <AccordionPanel>
          <Text color="gray" fontSize="md">
            내용입니다.
          </Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem itemName="목록2">
        <AccordionButton>
          <Heading color="gray" fontSize="lg">
            목록 2
          </Heading>
        </AccordionButton>
        <AccordionPanel>
          <Text color="gray" fontSize="md">
            내용입니다.
            <br />
            내용입니다.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccordionTestStory = {
  args: {
    items: [
      {
        name: "목록1",
        content: "내용1",
      },
      {
        name: "목록2",
        content: "내용2",
      },
    ],
    defaultActiveItems: [],
  },

  render: ({ defaultactiveItems, items }) => (
    <Accordion
      defaultActiveItems={defaultactiveItems}
      style={{ width: "500px" }}
    >
      {items.map((item, index) => (
        <AccordionItem key={item.name} itemName={item.name}>
          <AccordionButton data-testid={`button-${index}`}>
            <Heading color="gray" fontSize="lg">
              {item.name}
            </Heading>
          </AccordionButton>
          <AccordionPanel data-testid={`panel-${index}`}>
            <Text color="gray" fontSize="md">
              {item.content}
            </Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};
