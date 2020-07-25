import styled from "@emotion/styled"
import { motion } from "framer-motion"

import { fluidText } from "../../utils"

export const TitleContainer = styled.div`
	position: relative;
`

export const TitleText = styled.h1`
	margin: 0;
`

export const TitleButton = styled(motion.button)`
	appearance: none;
	border: 0;
	background: transparent;
	font-size: calc(${fluidText(48, 82, 360, 720)});
	font-weight: 600;
	text-align: center;
	line-height: 0.85;
	padding: 0;
`
