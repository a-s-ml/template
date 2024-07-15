import Slider from "rc-slider"
import "rc-slider/assets/index.css"

export const Filter = () => {
	return (
		<>
			<Slider
				range
				min={18}
				max={80}
				value={[28, 45]}
				railStyle={{
					backgroundColor: "#D9D9D9"
				}}
				handleStyle={{
					backgroundColor: "#F34D71",
					borderColor: "#F34D71"
				}}
				trackStyle={{
					backgroundColor: "#F34D71"
				}}
			/>
		</>
	)
}
