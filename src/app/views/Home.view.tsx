import DefaultLayout from "../layouts/Default"

import PostList from "../features/PostList";
import UserPerformance from "../features/UserPerformance";
import UserTopTags from "../features/UserTopTags";
import UserEarnings from "../features/UserEarnings";

export default function HomeView() {
  return (
    <DefaultLayout>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 32 }}>
        <UserTopTags />
        <UserEarnings />
      </div>
      <UserPerformance />
      <PostList />
    </DefaultLayout>
  )
}