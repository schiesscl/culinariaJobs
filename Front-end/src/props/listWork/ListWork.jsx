import Btn from "../button/Btn";

const ListWork = ({ data }) => {
    if (!Array.isArray(data)) {
        console.error("data is not an array:", data);
        return <p>No hay trabajos disponibles para mostrar.</p>;
    }

    const renderList = data.map(item => (
        <div key={item.id}>
            <div>
                <h2>{`${item.title}`}</h2>
            </div>
            <div>
                <Btn title="más info" to={`/app/workDetail/${item.id}`} />
            </div>
        </div>
    ));

    return (
        <>
            {renderList}
        </>
    );
};

export default ListWork;
