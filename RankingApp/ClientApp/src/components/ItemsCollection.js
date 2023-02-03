import Item from './Item';

const ItemsCollection = ({ items, drag, movieImageArr }) => {
    return (
        <div className='items-not-ranked'>
            {(items.length > 0) ? items.map((data) => (data.ranking === 0) ?
                <Item item={data} drag={drag} imgObj={movieImageArr.find(o => o.id === data.id)?.image} />
                   : null
            ) : <div>Loading....</div>}
        </div>
    )
}

export default ItemsCollection;