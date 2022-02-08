import { useForm } from "../../hooks/useForm";
import queryStream from 'query-string';
import { HeroCard } from "../hero/HeroCard.js"
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { useNavigate, useLocation } from "react-router-dom";
import { useMemo } from "react";

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryStream.parse(location.search);


    const [formValues, handleInputChange] = useForm({
        searchText: q,
    });

    const { searchText } = formValues;
    const heroesFilteted = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText);
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Buscar un héroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange} />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block">
                            Buscar...
                        </button>

                    </form>

                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    {
                        (q === '')
                            ? <div className="alert alert-info">Buscar un héroe</div>
                            : (heroesFilteted.length === 0)
                            && <div className="alert alert-danger">No hay resultados: {q}</div>
                    }


                    {
                        heroesFilteted.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>

            </div>
        </>);
};
