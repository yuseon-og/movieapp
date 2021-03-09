import { movieApi } from "../../api";
import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      // console.log(nowPlaying);

      const {
        data: { results: upcoming },
      } = await movieApi.upcoming();
      // console.log(upcoming);

      const {
        data: { results: popular },
      } = await movieApi.popular();
      // console.log(popular);

      this.setState({
        nowPlaying: nowPlaying,
        upcoming: upcoming,
        popular: popular,
      });
    } catch {
      this.setState({
        error: "Can't Find Movies Information!!",
      });
    } finally {
      this.setState({
        loading: false,
      });
      // console.log(this.state.loading);
    }
  }

  // 각각 기능을 함수로 만들고 this. 로 호출해볼것
  // getNowPlaying() 이런식으로

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    // console.log(this.state);
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
