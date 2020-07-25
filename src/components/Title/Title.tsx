import * as React from "react"
import { useAnimation } from "framer-motion"

import Rocket from "./Rocket"
import { variants } from "./Title.animation"
import { TitleButton, TitleContainer, TitleText } from "./Title.styles"

interface TitleInterface {
	onClick: () => void
}

function Title({ onClick }: TitleInterface) {
	const [isLaunched, setLaunched] = React.useState(false)
	const [isShaking, setShaking] = React.useState(false)
	const launchControl = useAnimation()

	const [appear, prepare, cancel] = React.useMemo(
		() => [
			() => !isLaunched && launchControl.start("appear"),
			async () => {
				if (isLaunched) return
				setShaking(true)
				await launchControl.start("prepare")
			},
			async () => {
				setShaking(false)
				if (isLaunched) return
				await launchControl.start("cancel")
				await launchControl.set("hidden")
			},
		],
		[isLaunched]
	)

	const launch = React.useMemo(
		() => async () => {
			setShaking(false)
			setLaunched(true)
			await launchControl.start("launch")
			await launchControl.set("hidden")
			setLaunched(false)
		},
		[]
	)

	return (
		<TitleContainer>
			<TitleText>
				<TitleButton
					key="titleButton"
					type="button"
					initial="enter"
					animate="entered"
					whileHover="hover"
					whileTap="press"
					exit="exit"
					variants={variants}
					onHoverStart={appear}
					onHoverEnd={cancel}
					onClick={onClick}
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
