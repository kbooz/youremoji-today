export const variants = {
	enter: { opacity: 0, transform: "scale(1.2)" },
	entered: {
		opacity: 1,
		transform: "scale(1)",
		transition: {
			type: "spring",
			duration: 0.15,
			stiffness: 100,
		},
	},
	exit: { opacity: 0, type: "spring", transform: "scale(.9)" },
	hover: {
		scale: 1.1,
		transition: { duration: 0.15, type: "spring", stiffness: 100 },
	},
	press: {
		scale: 0.9,
		opacity: 0.6,
		transition: { duration: 0.15, type: "spring", stiffness: 100 },
	},
}
