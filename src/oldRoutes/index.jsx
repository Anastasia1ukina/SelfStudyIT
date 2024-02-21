// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from '../features/counter/counterSlice'
// import Button from '@mui/material/Button';

export function PublicPage() {
    return <h3>Public</h3>;
}

export function ProtectedPage() {
    return <h3>Protected</h3>;
}

// export default function Index() {
// const count = useSelector((state) => state.counter.value)
// const dispatch = useDispatch()

// return (
// <div>
{/* <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
            <p id="zero-state">
                This is a demo for React Router.
                <br />
                Check out{" "}
                <a href="https://reactrouter.com">
                    the docs at reactrouter.com
                </a>
                .
            </p> */}
// <Button variant="contained">Hello world</Button>
// </div>
// );
// }