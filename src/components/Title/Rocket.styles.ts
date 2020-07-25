import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

const shake = keyframes`
0%, 100% {
		transform: translate3d(0, 10px, 0)
}
10%,
30%,
50%,
70%,
90% {
		transform: translate3d(-10px, 0, 0)
}
20%,
40%,
60%,
80% {
		transform: translate3d(10px, 10px, 0)
}
`

export const RocketContainer = styled(motion.div)`
	position: absolute;
	display: inline-block;
	animation-duration: 1s;
	animation-play-state: paused;
	font-size: 2rem;
	&.shake {
		animation-name: ${shake};
	}
`
