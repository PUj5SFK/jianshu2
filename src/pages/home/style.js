import styled from 'styled-components';
/* Home Component */
export const HomeWrapper = styled.div`
  position: relative;
  top: 60px;
  width: 960px;
  margin: 0 auto;
  .row {
    overflow: hidden;
    width: 100%;
  }
`;
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  margin-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
  margin-top: 30px;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 60px;
  height: 50px;
  border: 1px solid #ccc;
  background-color: #fff;
  line-height: 50px;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
`;

/* Topic Component */
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background-color: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    background-color: red;
    margin-right: 10px;
  }
`;

/* List Component */

export const ListItem = styled.div`
  position: relative;
  overflow: hidden;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  line-height: 20px;
  .list-pic {
    position: absolute;
    right: 0;
    top: 20%;
    width: 150px;
    height: 100px;
    background-color: red;
  }
`;

export const ListInfo = styled.div`
float: left;
padding-right: 165px;
  .title {
    margin: 7px 0 4px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    color: #000;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  .art {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const Loadmore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  border: 1px solid #ccc;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  background-color:#aaa;
  color: #fff;
  cursor: pointer;
`;

/* Recomment component */
export const RecommentWrapper = styled.div`

`;

export const RecommentItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  background-image: url(${(props) => props.imgUrl});
  background-size: contain;
  cursor: pointer;
`;

export const DownloadWrapper = styled.div`
  overflow: hidden;
  border: 1px solid #f0f0f0;
  padding: 10px 22px;
  border-radius: 6px;
  margin-bottom: 30px;
  .qrcode {
    width: 60px;
    height: 60px;
    vertical-align: middle;
  }
  .info {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    .title {
      font-size: 15px;
      line-height: 25px;
      color: #333;
    }
    .des {
      margin-top: 4px;
      font-size: 13px;
      color: #999
    }
  }
`;

export const WriterWrapper = styled.div`
  .title {
    font-size: 14px;
    color: #969696;
    overflow: hidden;
    span {
      float: left;
    }
    .spin {
      float: right;
      font-size: 14px;
      cursor: pointer;
    }
  }
  .all {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
    border: 1px solid #dcdcdc;
    background-color: #f7f7f7;
    font-size: 13px;
    color: #787878;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const WriterItem = styled.div`
  margin: 15px 0;
  overflow: hidden;
  .write-img {
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    border: 1px solid #ccc;
    border-radius: 50px;
    vertical-align: middle;
    cursor: pointer;
  }
  .addition {
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
    .name {
      font-size: 14px;
      color: #333;
      cursor: pointer;
    } 
    p {
      margin-top: 8px;
      font-size: 12px;
      color: #969696;
    }
  }
  .follow {
    padding-top: 5px;
    float: right;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
  }
`;