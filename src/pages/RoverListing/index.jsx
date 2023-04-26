import { members } from '../../data'
import './styles.css';
import RoverListCard from '../../components/RoverListCard';

const RoverListing = () => {
    const mapedTableData = members.map((m) => ({
        ...m,
        memberName: `${m.first_name} ${m.last_name}`,
        teamName: <a href={`/rover/details/${m.team.id}`}>{m.team.name}</a>,
    }))
    return (
        <div className="teams-container">
            <h1 className="teams-title">Rover List</h1>
            <div style={{ width: '90%' }}>
                {mapedTableData.map((m,idx) => <RoverListCard data={m}/>)}
            </div>
        </div>
    )
}

export default RoverListing
