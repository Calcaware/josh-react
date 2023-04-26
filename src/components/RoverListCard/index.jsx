import { Card } from '@mui/material'
const RoverListCard = ({data}) => {
    return <Card style={{ margin: 10, width: '100%', padding: 10 }}>{data.teamName}</Card>
}
export default RoverListCard;