import * as React from "react"
import styled from "@emotion/styled"

import { CenterContainer } from "./styles"
import { addLineBreaks, fluidText } from "./utils"

const EmojiContainer = styled(CenterContainer)`
	position: relative;
	width: 60%;
`

const EmojiIcon = styled.p`
	margin: 0;
	z-index: 2;
	font-size: calc(${fluidText(78, 148, 360, 720)});
`

const EmojiText = styled.p`
	position: absolute;
	text-align: center;
	margin: 0;
	line-height: 0.9;
	font-size: calc(${fluidText(48, 82, 360, 720)});
	color: rgba(0, 0, 0, 0.15);
	font-weight: 700;
`

function Emoji({ emoji, text }: EmojiObj) {
	return (
		<EmojiContainer>
			<EmojiIcon>{emoji}</EmojiIcon>
			<EmojiText>{addLineBreaks(text)}</EmojiText>
		</EmojiContainer>
	)
}

export default Emoji
