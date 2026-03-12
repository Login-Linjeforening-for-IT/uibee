import { useEffect, useRef } from 'react';
export default function useClickOutside(refOrCallback, maybeCallback) {
    let ref;
    let callback;
    if (typeof refOrCallback === 'function') {
        ref = useRef(null);
        callback = refOrCallback;
    }
    else {
        ref = refOrCallback;
        callback = maybeCallback;
    }
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref && ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
    if (typeof refOrCallback === 'function')
        return ref;
    return undefined;
}
