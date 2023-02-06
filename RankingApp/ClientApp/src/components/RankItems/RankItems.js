import { useEffect, useState } from 'react';
import RankingGrid from "./RankingGrid";
import ItemsCollection from "./ItemsCollection";

const RankItems = ({ items, setItems, dataType, imgArr, localStorageKey }) => {

    const [reload, setReload] = useState(false);

    const Reload = () => {
        setReload(true);
    }

    const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    const allowDrop = (ev) => {
        ev.preventDefault();
    }

    const drop = (ev) => {

        ev.preventDefault();
        const targetElm = ev.target;
        if (targetElm.nodeName === "IMG") {
            return false;
        }
        if (targetElm.childNodes.length === 0) {
            var data = parseInt(ev.dataTransfer.getData("text").substring(5));
            const transformedCollection = items.map((item) => (item.id === parseInt(data)) ?
                { ...item, ranking: parseInt(targetElm.id.substring(5)) } : { ...item, ranking: item.ranking });
            setItems(transformedCollection);
        }

    }
    useEffect(() => {
        if (items == null) {
            getDataFromApi();
        }

    }, [dataType]);

    const getDataFromApi = () => {
        fetch(`item/${dataType}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {

                setItems(data);
                console.log(items);
                console.log(imgArr);
            })
    }

    useEffect(() => {
        if (items != null) {
            localStorage.setItem(localStorageKey, JSON.stringify(items));
        }
        setReload(false);
    }, [items])

    useEffect(() => {
        if (reload === true) {
            getDataFromApi();
        }
    }, [reload])


    return (
        (items != null) ?
            <main>
                <RankingGrid items={items} imgArr={imgArr} drag={drag} allowDrop={allowDrop} drop={drop} />
                <ItemsCollection items={items} drag={drag} imgArr={imgArr} />
                <button onClick={Reload} className="reload" style={{ "marginTop": "10px" }}> <span className="text" >Reload</span > </button>
            </main>
            : <main>Loading...</main>
    )
}
export default RankItems;