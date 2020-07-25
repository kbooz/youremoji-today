import * as React from "react"
import { useAnimation } from "framer-motion"

import Rocket from "./Rocket"
import { variants } from "./Title.animation"
import { TitleButton, TitleContainer, TitleText } from "./Title.styles"

function Title() {
	const [isShaking, setShaking] = React.useState(false)
	const launchControl = useAnimation()

	const [appear, prepare, launch, cancel] = React.useMemo(
		() => [
			() => launchControl.start("appear"),
			async () => {
				setShaking(true)
				await launchControl.start("prepare")
			},
			async () => {
				setShaking(false)
				await launchControl.start("launch")
				await launchControl.set("hidden")
			},
			async () => {
				setShaking(false)
				await launchControl.start("cancel")
				await launchControl.set("hidden")
			},
		],
		[]
	)

	return (
		<TitleContainer>
			<TitleText>
				<TitleButton
					type="button"
					initial="enter"
					animate="entered"
					whileHover="hover"
					whileTap="press"
					exit="exit"
					variants={variants}
					onHoverStart={appear}
					onHoverEnd={cancel}
					onTap={launch}
					onTapCancel={cancel}
					onTapStart={prepare}
				>
					what’s
					<br />
					your emoji
					<br />
					today?
				</TitleButton>
			</TitleText>
			<Rocket isShaking={isShaking} control={launchControl} />
		</TitleContainer>
	)
}

export default Title
