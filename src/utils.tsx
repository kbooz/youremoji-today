import * as React from "react"

export function randomNumber(min: number, max: number) {
	const nMin = Math.ceil(min)
	const nMax = Math.floor(max)
	return Math.floor(Math.random() * (nMax - nMin)) + nMin
}

export const addLineBreaks = (text: string) => {
	const splitted = text.split("\n")
	return splitted.map((text, index) => (
		<React.Fragment key={`${text}-${index}`}>
			{text}
			{index === splitted.length - 1 ? null : <br />}
		</React.Fragment>
	))
}

export const fluidText = (
	min: number,
	max: number,
	minView: number,
	maxView: number
): string =>
	`${min}px + (${max} - ${min}) * ((100vw - ${minView}px) / (${maxView} - ${minView}))`
