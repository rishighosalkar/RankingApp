import { React, useEffect, useState } from 'react';
import MovieImageArr from "./MovieImages";
import RankingGrid from './RankingGrid';
import ItemsCollection from './ItemsCollection';

const RankItems = () => {
    const [items, setItems] = useState([]);
    const dataType = 1;
    const fetchData = async() => {
        const response = await fetch(`item/${dataType}`);
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const responseData = await response.json();
        const loadItems = [];
        for (const key in responseData) {
            loadItems.push({
                id: key,
                title: responseData.Title,
                imageId: responseData.ImageId,
                ranking: responseData.Ranking,
                itemType: responseData.ItemType
            })
        }
        setItems(loadItems);
    }

    const drag = (e) => {
        e.dataTransfer.setData('text', e.target.id);
    }

    const allowDrop = (e) => {
        e.preventDefault();
    }

    const drop = (e) => {
        e.preventDefault();
        const targetEl = e.target;
        if (targetEl.nodeName === 'IMG') {
            return false;
        }
        if (targetEl.childNodes.length === 0) {
            var data = parseInt(e.dataTransfer.getData('text').substring(5));
            const transformedCollection = items.map((item) => (item.id === parseInt(data)) ?
                { ...item, ranking: parseInt(targetEl.id.substring(5)) } : { ...item, ranking: item.ranking });
            setItems(transformedCollection);
        }
    }
    useEffect(() => {
        fetch(`item/${dataType}`).then((res) => { return res.json() })
            .then(data => { setItems(data) });
    }, [])
    console.log(items);
    return (
        <main>
            <RankingGrid items={items} imgArr={MovieImageArr} drag={drag} allowDrop={allowDrop} drop={drop} />
            {/*<div className='items-not-ranked'>
                {(items.length > 0) ? items.map((data) => (data.ranking === 0) ?
                    <div className='unranked-cell'>
                        <img id={`item-${data.id}`} src={MovieImageArr.find(o => o.id === data.id)?.image}
                            style={{ cursor: 'pointer' }} draggable='true' onDragStart={drag}
                        />
                    </div> : null
                    ) : <div>Loading....</div>}
             </div>*/}
            <ItemsCollection items={items} movieImageArr={MovieImageArr} drag={drag} />
        </main>
        )
}

export default RankItems;