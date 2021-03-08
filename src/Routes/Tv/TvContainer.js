import { tvApi } from "api";
import React from "react";
import TvPresenter from "./TvPresenter";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      // console.log(topRated);

      const {
        data: { results: popular },
      } = await tvApi.popular();
      // console.log(popular);

      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      // console.log(airingToday);

      this.setState({
        topRated: topRated,
        popular: popular,
        airingToday: airingToday,
      });
    } catch {
      this.setState({
        error: "Can't Find Any Information!!",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    console.log(this.state);
    return (
      <TvPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
