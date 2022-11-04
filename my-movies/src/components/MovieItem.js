import { Link } from "react-router-dom";


export const MovieItem = ({ id, title }) => (
    <li key={ id }>
        { id } - <Link to={`movie/detail/${id}`}>{ title }</Link>
    </li>
)