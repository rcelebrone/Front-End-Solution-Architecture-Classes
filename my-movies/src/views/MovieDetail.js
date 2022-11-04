import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesService } from '../services/MoviesService';

export const MovieDetail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const fetchDetail = async () => {
        const { data } = await MoviesService.getMovieById(id);
        setDetail(data);
    }

    useEffect(() => {
        fetchDetail();
    })

    return (<section>
        <h2>#{id} {detail.title}</h2>
        <article>{detail.overview}</article>
    </section>)
}