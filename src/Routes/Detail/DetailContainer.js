import {movieApi, tvApi} from "../../api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props); // 부모 클래스가 가지고 있는 함수 사용할때
    const {
      location: {pathname},
    } = props;
    this.state = {
      result: null,
      loading: true,
      error: null,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    // ID를 받아와서 그 ID가 숫자가 아니면 홈으로 리다이렉트

    const {
      match: {
        params: {id},
      },
      history: {push},
    } = this.props;
    const {isMovie} = this.state;
    const parseId = Number(id);

    if (isNaN(parseId)) {
      return push("/");
    }

    let result = null;

    try {
      if (isMovie) {
        const request = await movieApi.movieDetail(parseId);
        result = request.data;
        //아래와 같이 쓸수 있다.
      } else {
        const request = await tvApi.showDetail(parseId);
        result = request.data;
      }
      // console.log(result);
    } catch {
      this.setState({
        error: "Can't Find Anything",
      });
    } finally {
      this.setState({
        loading: false,
        result: result,
      });
    }

    // 만약 pathname이 movie를 포함하는게 참이라면
    // parseId로 movie Detail을 가지고 오고
    // show를 포함한다면 showDetail을 parsId로 가지고 오고
    // 둘다 아니라면 "/" 일로 가라

    // const moviede = await movieApi.movieDetail(parseId);
    // console.log(moviede);
  }

  render() {
    // console.log(this.props);
    // console.log(this.state);
    const {result, loading, error} = this.state;
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}
