import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const ItemThumbWrapper = styled.div`
  position: relative;
  padding: 30px 43px 110px;
  background: #f8f9fb;
`;

const DivLeft = styled.div`
  position: relative;
  width: 55.3%;
  // width: 45.9%;
  margin-top: 96px;
`;

const DivThumb = styled.div`
  display: flex;
  justify-content: center;
  max-width: 480px;
  margin: 0;
  padding: 0;
`;

const BuyerBenefits = styled.ul`
  display: block;
  position: absolute;
  bottom: 23px;
  left: 16px;
  zoom: 1;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
  vertical-align: top;
`;

const Li = styled.li`
  display: inline;
  float: left;
  position: relative;
  margin: 22px 0 0;
  padding: 0 0 0 28px;
  height: 21px;
  line-height: 21px;
  color: #505051;
  font-size: 15px;

  ${(props) => {
    if (props.img === "ic01") {
      return css`
        width: 185px;
      `;
    } else if (props.img === "ic02") {
      return css`
        width: 150px;
      `;
    } else if (props.img === "ic03") {
      return css`
        width: 150px;
        padding: 0 0 0 35px;
      `;
    } else if (props.img === "ic04") {
      return css`
        width: 185px;
      `;
    } else if (props.img === "ic05") {
      return css`
        width: 160px;
      `;
    }
  }}
`;

const Ic = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 29px;
  height: 21px;
  background: ${(props) => {
    if (props.img === "ic01") {
      return "URL('https://www.osulloc.com/kr/ko/static_renew/images/item_detail/bg_ico1.png?quality=80') 0 0 no-repeat";
    } else if (props.img === "ic02") {
      return "URL('https://www.osulloc.com/kr/ko/static_renew/images/item_detail/bg_ico1.png?quality=80') 0 -30px no-repeat";
    } else if (props.img === "ic03") {
      return "URL('https://www.osulloc.com/kr/ko/static_renew/images/item_detail/bg_ico1.png?quality=80') 0 -60px no-repeat";
    } else if (props.img === "ic04") {
      return "URL('https://www.osulloc.com/kr/ko/static_renew/images/item_detail/bg_ico1.png?quality=80') 0 -90px no-repeat";
    } else if (props.img === "ic05") {
      return "URL('https://www.osulloc.com/kr/ko/static_renew/images/item_detail/bg_ico1.png?quality=80') 0 -120px no-repeat";
    }
  }};
`;

const ReviewPoint = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PointBoard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InnerP = styled.p`
  margin: 0 15px 0 0;
  color: #555555;
  font-size: 30px;
  padding-top: 10px;
`;

const StarPoint = styled.div`
  position: relative;
  margin: 0 0 0 auto;
  padding: 0 0 0 40px;
  height: 58px;
  width: 270px;
`;

const Starts = styled.div`
  margin: 0 0 0;
  transform: scale(0.7);
  position: absolute;
  bottom: 5px;
  width: 176px;
  height: 32px;
`;

const Number = styled.span`
  left: 0;
  right: auto;
  font-size: 40px;
  position: absolute;
  bottom: 3px;

  color: #6c801a;

  font-weight: bold;
  line-height: 1;
`;

const BtnViewReview = styled.a`
  position: relative;
  top: -3px;
  margin: 0 0 0 0;
  padding: 20px 0 0 0;
  color: #9e9e9e;
  font-size: 20px;
  cursor: pointer;
`;

const Strong = styled.strong`
  color: #2f2f2f;
  font-weight: normal;
`;

const After = styled.a`
  display: block;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -6px;
  width: 10px;
  height: 14px;
  content: " ";
  background: url(https://www.osulloc.com/kr/ko/static_renew/images/item_detail/arr_10x14.png?quality=80) 50% 50% no-repeat;
`;

function DetailLeft() {
  const [data, setData] = useState("");
  const [posit, setPosit] = useState(0);

  // useEffect(() => {
  //   fetch(`http://localhost:10010/products/item/${id}`, {
  //     method: "GET",
  //     headers:{
  //       Authorization: localStorage.get("token")
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => {

  //   })

  // })

  useEffect(() => {
    axios
      .get(`http://localhost:10010${location.pathname}`)
      // axios.get('/data/productDetail/pd.json')
      .then((res) => {
        setData(res.data.data);
        if (Math.round(res.data.data.rateAverage) === 1) {
          setPosit("-139px");
        } else if (Math.round(res.data.data.rateAverage) === 2) {
          setPosit("-103px");
        } else if (Math.round(res.data.data.rateAverage) === 3) {
          setPosit("-67px");
        } else if (Math.round(res.data.data.rateAverage) === 4) {
          setPosit("-31px");
        } else if (Math.round(res.data.data.rateAverage) === 5) {
          setPosit("0px");
        } else if (Math.round(res.data.data.rateAverage) === 0) {
          setPosit("-139px");
        }
      });
  }, []);

  return (
    <>
      <DivLeft>
        <ItemThumbWrapper>
          <DivThumb>
            <Img src={data.defaultImg} alt={data.name} />
          </DivThumb>
          <BuyerBenefits>
            <Li img="ic01">
              <Ic img="ic01"></Ic>
              뷰티포인트 200P 적립
            </Li>
            <Li img="ic02">
              <Ic img="ic02"></Ic> 찻잎 200P 적립
            </Li>

            {/* <!-- 입점몰 상품일 경우 추가_20191106 --> */}

            <Li img="ic03">
              <Ic img="ic03"></Ic>3만원 이상 무료배송
            </Li>

            <Li img="ic04">
              <Ic img="ic04"></Ic> (유료)포장가능
            </Li>

            <Li img="ic05">
              <Ic img="ic05"></Ic> 쇼핑백 동봉
            </Li>
          </BuyerBenefits>
          <div className="prd_tag"></div>
        </ItemThumbWrapper>
        <ReviewPoint>
          <PointBoard>
            <InnerP>리뷰 평점</InnerP>
            <StarPoint>
              <Starts style={{ background: `url(https://www.osulloc.com/kr/ko/static_renew/images/item_detail/bg_stars.png?quality=80) ${posit} -40px no-repeat` }}>
                <div className="bar"></div>
              </Starts>
              <Number>{data.rateAverage}</Number>
            </StarPoint>
          </PointBoard>
          <BtnViewReview>
            REVIEW <Strong>{data.reviewAllCount} &gt;</Strong>
          </BtnViewReview>
        </ReviewPoint>
        <input type="hidden" className="attrOptItemCount" value="0" />
      </DivLeft>
    </>
  );
}

export default DetailLeft;
