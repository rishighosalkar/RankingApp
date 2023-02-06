const Item = ({ item, drag, imgObj }) => {

    return (
        <div className='unranked-cell'>
            <img id={`item-${item.id}`} src={imgObj}
                style={{ cursor: 'pointer' }} draggable='true' onDragStart={drag}
            />
        </div>
    )
}

export default Item;