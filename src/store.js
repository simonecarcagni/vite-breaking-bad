import { reactive } from "vue";

export const store = reactive(
    {
        cardsList: [],
        search: '',
        loading: true
    }
)