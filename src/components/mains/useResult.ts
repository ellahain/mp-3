import {useEffect, useState} from 'react';

/*this Custom Hook is for testing whether the answers are positive or negative*/
function useResult(result: string): boolean {
    const [positive, setPositive] = useState<boolean>(true);
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