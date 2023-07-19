import PropTypes from "prop-types";

export const CompanyView = ({ title, company }) => {
    return (
        <>
            <h4>{ title }</h4>
            <ul className="list-group">
                <li className="list-group-item active">{company.fiscalNumber}</li>
                <li className="list-group-item">{company.companyName}</li>
            </ul>
        </>
    );
}

CompanyView.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired,
}