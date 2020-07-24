import * as React from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import emojis from "./emojis.json";
import { randomNumber, addLineBreaks, fluidText } from "./utils";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmojiContainer = styled(CenterContainer)`
  position: relative;
  width: 60%;
`;

const EmojiIcon = styled.p`
  margin: 0;
  z-index: 2;
  font-size: calc(${fluidText(78, 148, 360, 720)});
`;

const EmojiText = styled.p`
  position: absolute;
  text-align: center;
  margin: 0;
  line-height: 0.9;
  font-size: calc(${fluidText(48, 82, 360, 720)});
  color: rgba(0, 0, 0, 0.15);
  font-weight: 700;
`;

interface EmojiObj {
  emoji: string;
  text: string;
  color: string;
}

function Emoji({ emoji, text }: EmojiObj) {
  return (
    <EmojiContainer>
      <EmojiIcon>{emoji}</EmojiIcon>
      <EmojiText>{addLineBreaks(text)}</EmojiText>
    </EmojiContainer>
  );
}

export default function App() {
  const [emoji, setEmoji] = React.useState<EmojiObj>(
    emojis[randomNumber(0, emojis.length)]
  );

  return (
    <>
      <Global
        styles={css`
          body {
            background: ${emoji.color};
          }
        `}
      />
      <Container>
        <div />
        <Emoji {...emoji} />
        <CenterContainer>
          {emojis.map(item => (
            <div style={{ padding: "0 20px" }} onClick={() => setEmoji(item)}>
              {item.emoji}
            </div>
          ))}
        </CenterContainer>
      </Container>
    </>
  );
}
