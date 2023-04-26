import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { teams } from '../../data'
import './styles.css'

function TeamDetails() {
    const { id } = useParams()
    const currentId = Number(id)

    const teamDetails = useMemo(
        () => teams.find((t) => t.id === currentId),
        [currentId]
    )

    return (
        <div className="container">
            <h1 className="title">Rover Details</h1>
            <div className="details">
                <p>
                    <strong>ID:</strong> {teamDetails.id}
                </p>
                <p>
                    <strong>Name:</strong> {teamDetails.name}
                </p>
                <p>
                    <strong>Member Count:</strong> {teamDetails.member_count}
                </p>
            </div>
        </div>
    )
}

export default TeamDetails
