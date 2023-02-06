import Item from './Item';

const ItemsCollection = ({ items, drag, imgArr }) => {
    return (
        <div className='items-not-ranked'>
            {(items.length > 0) ? items.map((data) => (data.ranking === 0) ?
                <Item item={data} drag={drag} imgObj={imgArr.find(o => o.id === data.id)?.image} />
                   : null
            ) : <div>Loading....</div>}
        </div>
    )
}

export default ItemsCollection;