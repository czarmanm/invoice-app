import PropTypes from "prop-types";

export const ClientView = ({ title, client }) => {
    const {
        firstname,
        lastname, 
        address: {
            country, 
            city, 
            street, 
            number}
        } = client;

    return (
        <>
            <h4>{ title }</h4>
            <ul className="list-group">
                <li className="list-group-item active">{firstname} {lastname}</li>
                <li className="list-group-item">{city}, {country}</li>
                <li className="list-group-item">{street} {number}</li>
            </ul>
        </>
    );
}

ClientView.propTypes = {
    title: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired,
}