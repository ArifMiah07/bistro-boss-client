import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            setMenu(data);
            setLoading(false);
            console.log(data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    return [menu, loading];
};

export default useMenu;