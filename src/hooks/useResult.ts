import {useEffect, useState} from 'react';


function useResult(result: string): boolean {
    const [positive, setPositive] = useState(true);
    useEffect(() => {
        if (Number(result) < 0){
            setPositive(false);
        } else {
            setPositive(true);
        }
    }, [result]);

        return positive
}

export default useResult;