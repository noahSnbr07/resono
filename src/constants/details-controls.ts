import { /* pause, */ play, repeat, shuffle, skip_next, skip_prev } from "@/assets/assets";

const detailsControlsAction = [
    { id: 0, name: "shuffle", svg: shuffle, onClick: () => console.log("shuffle") },
    { id: 4, name: "skip_prev", svg: skip_prev, onClick: () => console.log("skip_prev") },
    { id: 2, name: "play", svg: play, onClick: () => console.log("play") },
    // { id: 3, name: "pause", svg: pause },
    { id: 5, name: "skip_next", svg: skip_next, onClick: () => console.log("skip_next") },
    { id: 1, name: "repeat", svg: repeat, onClick: () => console.log("repeat") },
]

export default detailsControlsAction;