import * as reducer from '../modules/reducer/posts'
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from './components';

const usePosts = () => {
    const posts = useShallowEqualSelectorToJS((state) =>
        state.posts.get("post")
    );

    const actions = useActions(reducer);

    return {
        // 그냥 조회
        posts,

        // 액션 생성 함수를 액션을 디스패치하는 함수로 변환 (actions hooks 사용)
        getPosts : actions.getPosts
    }

}

export default usePosts