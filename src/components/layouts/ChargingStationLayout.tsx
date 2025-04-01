import ChargingStationItem from "../ui/ChargingStationItem"

const ChargingStationLayout = () => {
  return Array(10)
    .fill(0)
    .map((_, index) => <ChargingStationItem key={index} />)
}

export default ChargingStationLayout
