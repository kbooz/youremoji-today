const animationPaused = {
	animationPlayState: "paused",
	animationIterationCount: 1,
}

export const variant = {
	hidden: {
		opacity: 0,
		left: -15,
		bottom: -15,
		right: "initial",
		top: "initial",
		transform: "rotate(0)",
		...animationPaused,
	},
	appear: { opacity: 1, left: 0, bottom: 0, ...animationPaused },
	prepare: {
		animationPlayState: "running",
		animationIterationCount: "infinite",
	},
	launch: {
		...animationPaused,
		left: "initial",
		right: 0,
		top: -20,
		opacity: 0,
		transition: {
			duration: 0.5,
		},
	},
	cancel: {
		opacity: 0,
		bottom: -100,
		transform: "rotate(90deg)",
		...animationPaused,
		transition: { duration: 0.2 },
	},
}
