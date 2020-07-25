import * as React from "react"
import { AnimationControls } from "framer-motion"

import { variant } from "./Rocket.animation"
import { RocketContainer } from "./Rocket.styles"

interface RocketInterface {
	control: AnimationControls
	isShaking: boolean
}

function Rocket({ isShaking, control }: RocketInterface) {
	return (
		<RocketContainer
			className={isShaking ? "shake" : ""}
			initial="hidden"
			animate={control}
			variants={variant}
		>
			🚀
		</RocketContainer>
	)
}

export default Rocket
