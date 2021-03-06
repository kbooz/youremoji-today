import * as React from "react"
import { css, Global } from "@emotion/core"
import styled from "@emotion/styled"
import { AnimatePresence } from "framer-motion"

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
	const [emoji, setEmoji] = React.useState<EmojiObj>()

	const findEmoji = React.useMemo(
		() => () => setEmoji(emojis[randomNumber(0, emojis.length)]),
		[]
	)

	return (
		<>
			<Global
				styles={css`
					body {
					}
				`}
			/>
			<Container>
				<div />
				<AnimatePresence>
					{!emoji && <Title onClick={() => {}} />}
				</AnimatePresence>
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
