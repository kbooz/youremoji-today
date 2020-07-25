import * as React from "react"
import { css, Global } from "@emotion/core"
import styled from "@emotion/styled"

import Title from "./components/Title/Title"
import emojis from "./emojis.json"
import { CenterContainer } from "./styles"
import { randomNumber } from "./utils"

const Container = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
`

export default function App() {
	const [emoji, setEmoji] = React.useState<EmojiObj>(
		emojis[randomNumber(0, emojis.length)]
	)

	return (
		<>
			<Global
				styles={css`
					body {
						/* background: ${emoji.color}; */
					}
				`}
			/>
			<Container>
				<div />
				{/* <Emoji {...emoji} /> */}
				<Title />
				<CenterContainer>
					{emojis.map((item) => (
						<div style={{ padding: "0 20px" }} onClick={() => setEmoji(item)}>
							{item.emoji}
						</div>
					))}
				</CenterContainer>
			</Container>
		</>
	)
}
