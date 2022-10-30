export const MovieItem = ({ id, title }) => (
    <li key={ id }>
        { id } - { title }
    </li>
)