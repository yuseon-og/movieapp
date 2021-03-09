import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const parseId = Number(id);

    if (isNaN(parseId)) {
      return push("/");
    }
  }

  render() {
    console.log(this.props);
    const { result, loading, error } = this.state;
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}
