import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
    name: 'channelStoreName',
    initialState: { channelList: [] },
    reducers: {
        setChannels(state, action) {
            state.channelList = action.payload
        }
    }
})

const { setChannels } = channelStore.actions
const fetchChannelList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/api/subjects')
        console.log(res.data)
        dispatch(setChannels(res.data))
    }
}

const channelReduce = channelStore.reducer

export { fetchChannelList }
export default channelReduce
